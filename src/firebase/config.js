import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYR8h2dQ_CjkmWahDpCJhDjGlK-31bj4",
  authDomain: "movieguess-434ae.firebaseapp.com",
  projectId: "movieguess-434ae",
  storageBucket: "movieguess-434ae.firebasestorage.app",
  messagingSenderId: "516633216994",
  appId: "1:516633216994:web:ddc79f4fb5550a16365bbb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
