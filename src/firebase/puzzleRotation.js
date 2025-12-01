import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  setDoc,
  deleteDoc, 
  query, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './config';

/**
 * Get the start and end timestamps for today in IST
 * Start: 12:00 AM IST
 * End: 11:59:59 PM IST
 */
export const getTodayISTBounds = () => {
  const now = new Date();
  
  // Convert to IST (UTC+5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffset);
  
  // Get start of day (12:00 AM IST)
  const startOfDay = new Date(istNow);
  startOfDay.setUTCHours(0, 0, 0, 0);
  
  // Get end of day (11:59:59 PM IST)
  const endOfDay = new Date(istNow);
  endOfDay.setUTCHours(23, 59, 59, 999);
  
  return {
    start: startOfDay,
    end: endOfDay,
    now: istNow
  };
};

/**
 * Check if the current display puzzle has expired
 */
export const checkDisplayPuzzleExpiry = async () => {
  try {
    const displayDocRef = doc(db, 'displayPuzzle', 'current');
    const displayDoc = await getDoc(displayDocRef);
    
    if (!displayDoc.exists()) {
      console.log('No display puzzle found');
      return { expired: true, puzzle: null };
    }
    
    const puzzleData = displayDoc.data();
    const expiryDate = puzzleData.expiryDate?.toDate();
    const now = new Date();
    
    if (!expiryDate || now > expiryDate) {
      console.log('Display puzzle has expired');
      return { expired: true, puzzle: puzzleData };
    }
    
    return { expired: false, puzzle: puzzleData };
  } catch (error) {
    console.error('Error checking display puzzle expiry:', error);
    return { expired: true, puzzle: null };
  }
};

/**
 * Move expired puzzle to history
 */
export const moveToHistory = async (puzzleData) => {
  try {
    if (!puzzleData) return;
    
    // Add to history collection
    await addDoc(collection(db, 'historyPuzzles'), {
      ...puzzleData,
      movedToHistoryAt: serverTimestamp()
    });
    
    console.log('Moved puzzle to history');
  } catch (error) {
    console.error('Error moving puzzle to history:', error);
    throw error;
  }
};

/**
 * Get the oldest approved puzzle (FIFO - First In, First Out)
 */
export const getNextApprovedPuzzle = async () => {
  try {
    const approvedQuery = query(
      collection(db, 'approvedPuzzles'),
      orderBy('createdAt', 'asc'),
      limit(1)
    );
    
    const querySnapshot = await getDocs(approvedQuery);
    
    if (querySnapshot.empty) {
      console.log('No approved puzzles available');
      return null;
    }
    
    const puzzleDoc = querySnapshot.docs[0];
    return {
      id: puzzleDoc.id,
      ...puzzleDoc.data()
    };
  } catch (error) {
    console.error('Error getting next approved puzzle:', error);
    return null;
  }
};

/**
 * Set a new puzzle as the display puzzle with expiry
 */
export const setDisplayPuzzle = async (puzzle) => {
  try {
    const { start, end } = getTodayISTBounds();
    
    const displayDocRef = doc(db, 'displayPuzzle', 'current');
    
    await setDoc(displayDocRef, {
      movieName: puzzle.movieName,
      submittedBy: puzzle.submittedBy,
      clues: puzzle.clues,
      createdAt: puzzle.createdAt,
      approvedAt: puzzle.approvedAt,
      displayedAt: serverTimestamp(),
      expiryDate: end, // 11:59:59 PM IST today
      sourceId: puzzle.id // Keep reference to original approved puzzle
    });
    
    // Delete from approved puzzles
    await deleteDoc(doc(db, 'approvedPuzzles', puzzle.id));
    
    console.log('Set new display puzzle with expiry:', end);
    return true;
  } catch (error) {
    console.error('Error setting display puzzle:', error);
    throw error;
  }
};

/**
 * Main rotation function - checks expiry and rotates puzzles
 * Call this when the app loads or periodically
 */
export const rotatePuzzleIfNeeded = async () => {
  try {
    console.log('Checking if puzzle rotation is needed...');
    
    const { expired, puzzle } = await checkDisplayPuzzleExpiry();
    
    if (expired) {
      console.log('Puzzle expired or missing, rotating...');
      
      // Move expired puzzle to history (if exists)
      if (puzzle) {
        await moveToHistory(puzzle);
      }
      
      // Get next approved puzzle
      const nextPuzzle = await getNextApprovedPuzzle();
      
      if (nextPuzzle) {
        // Set as display puzzle
        await setDisplayPuzzle(nextPuzzle);
        console.log('Successfully rotated to new puzzle');
        return { success: true, newPuzzle: true };
      } else {
        console.log('No approved puzzles available for rotation');
        
        // Delete the expired puzzle from display so it doesn't show as live
        if (puzzle) {
           await deleteDoc(doc(db, 'displayPuzzle', 'current'));
        }
        
        return { success: false, reason: 'no_approved_puzzles' };
      }
    } else {
      console.log('Current puzzle is still valid');
      return { success: true, newPuzzle: false };
    }
  } catch (error) {
    console.error('Error in puzzle rotation:', error);
    return { success: false, error };
  }
};

/**
 * Get the current display puzzle
 */
export const getCurrentDisplayPuzzle = async () => {
  try {
    const displayDocRef = doc(db, 'displayPuzzle', 'current');
    const displayDoc = await getDoc(displayDocRef);
    
    if (!displayDoc.exists()) {
      return null;
    }
    
    return displayDoc.data();
  } catch (error) {
    console.error('Error getting display puzzle:', error);
    return null;
  }
};

/**
 * Manually trigger puzzle rotation (for admin use)
 */
export const manualRotatePuzzle = async () => {
  try {
    const displayDocRef = doc(db, 'displayPuzzle', 'current');
    const displayDoc = await getDoc(displayDocRef);
    
    // Move current to history if exists
    if (displayDoc.exists()) {
      await moveToHistory(displayDoc.data());
    }
    
    // Get and set next puzzle
    const nextPuzzle = await getNextApprovedPuzzle();
    
    if (nextPuzzle) {
      await setDisplayPuzzle(nextPuzzle);
      return { success: true };
    } else {
      return { success: false, reason: 'no_approved_puzzles' };
    }
  } catch (error) {
    console.error('Error in manual rotation:', error);
    return { success: false, error };
  }
};
