const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-I1rt3gbG.js","assets/puzzleRotation-B3cY-X53.js","assets/HomeView-Dlx41yiw.css","assets/SubmitView-C9hGaN1i.js","assets/SubmitView-ChFSciUm.css","assets/AdminView-CFnfFDwD.js","assets/AdminView-CYmXx3n6.css","assets/HistoryView-D3pZvP3K.js","assets/HistoryView-D6066fym.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Gr=[],Xt=()=>{},Gd=()=>!1,Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cc=t=>t.startsWith("onUpdate:"),Qe=Object.assign,uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cy=Object.prototype.hasOwnProperty,Re=(t,e)=>cy.call(t,e),le=Array.isArray,zr=t=>Xo(t)==="[object Map]",zd=t=>Xo(t)==="[object Set]",he=t=>typeof t=="function",Be=t=>typeof t=="string",sr=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Qd=t=>(ke(t)||he(t))&&he(t.then)&&he(t.catch),Jd=Object.prototype.toString,Xo=t=>Jd.call(t),uy=t=>Xo(t).slice(8,-1),Yd=t=>Xo(t)==="[object Object]",hc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hy=/-\w/g,Lt=Zo(t=>t.replace(hy,e=>e.slice(1).toUpperCase())),fy=/\B([A-Z])/g,ir=Zo(t=>t.replace(fy,"-$1").toLowerCase()),ea=Zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ka=Zo(t=>t?`on${ea(t)}`:""),zn=(t,e)=>!Object.is(t,e),uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dy=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let yh;const ta=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?_y(r):dc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||ke(t))return t}const py=/;(?![^(]*\))/g,gy=/:([^]+)/,my=/\/\*[^]*?\*\//g;function _y(t){const e={};return t.replace(my,"").split(py).forEach(n=>{if(n){const r=n.split(gy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pc(t){let e="";if(Be(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=pc(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vy=lc(yy);function Zd(t){return!!t||t===""}const ep=t=>!!(t&&t.__v_isRef===!0),Tl=t=>Be(t)?t:t==null?"":le(t)||ke(t)&&(t.toString===Jd||!he(t.toString))?ep(t)?Tl(t.value):JSON.stringify(t,tp,2):String(t),tp=(t,e)=>ep(e)?tp(t,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ga(r,i)+" =>"]=s,n),{})}:zd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ga(n))}:sr(e)?Ga(e):ke(e)&&!le(e)&&!Yd(e)?String(e):e,Ga=(t,e="")=>{var n;return sr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Ey{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){this._on>0&&--this._on===0&&(Tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ty(){return Tt}let Ne;const za=new WeakSet;class np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vh(this),ip(this);const e=Ne,n=jt;Ne=this,jt=!0;try{return this.fn()}finally{op(this),Ne=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_c(e);this.deps=this.depsTail=void 0,vh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let rp=0,Qs,Js;function sp(t,e=!1){if(t.flags|=8,e){t.next=Js,Js=t;return}t.next=Qs,Qs=t}function gc(){rp++}function mc(){if(--rp>0)return;if(Js){let e=Js;for(Js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Qs;){let e=Qs;for(Qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ip(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function op(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),_c(r),Iy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ai)||(t.globalVersion=ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Il(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=jt;Ne=t,jt=!0;try{ip(t);const s=t.fn(t._value);(e.version===0||zn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,jt=r,op(t),t.flags&=-3}}function _c(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_c(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Iy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const lp=[];function In(){lp.push(jt),jt=!1}function wn(){const t=lp.pop();jt=t===void 0?!0:t}function vh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let ai=0;class wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!jt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new wy(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,cp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,ai++,this.notify(e)}notify(e){gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mc()}}}function cp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wl=new WeakMap,wr=Symbol(""),Al=Symbol(""),li=Symbol("");function ct(t,e,n){if(jt&&Ne){let r=wl.get(t);r||wl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new yc),s.map=r,s.key=n),s.track()}}function gn(t,e,n,r,s,i){const o=wl.get(t);if(!o){ai++;return}const l=c=>{c&&c.trigger()};if(gc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&hc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===li||!sr(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(li)),e){case"add":c?h&&l(o.get("length")):(l(o.get(wr)),zr(t)&&l(o.get(Al)));break;case"delete":c||(l(o.get(wr)),zr(t)&&l(o.get(Al)));break;case"set":zr(t)&&l(o.get(wr));break}}mc()}function Ur(t){const e=we(t);return e===t?e:(ct(e,"iterate",li),xt(t)?e:e.map($t))}function na(t){return ct(t=we(t),"iterate",li),t}function Un(t,e){return An(t)?Ar(t)?rs($t(e)):rs(e):$t(e)}const Ay={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,t=>Un(this,t))},concat(...t){return Ur(this).concat(...t.map(e=>le(e)?Ur(e):e))},entries(){return Qa(this,"entries",t=>(t[1]=Un(this,t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(r=>Un(this,r)),arguments)},find(t,e){return un(this,"find",t,e,n=>Un(this,n),arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,n=>Un(this,n),arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return Eh(this,"reduce",t,e)},reduceRight(t,...e){return Eh(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return Qa(this,"values",t=>Un(this,t))}};function Qa(t,e,n){const r=na(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ry=Array.prototype;function un(t,e,n,r,s,i){const o=na(t),l=o!==t&&!xt(t),c=o[e];if(c!==Ry[e]){const p=c.apply(t,i);return l?$t(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,Un(t,p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function Eh(t,e,n,r){const s=na(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Un(t,l),c,t)}),s[e](i,...r)}function Ja(t,e,n){const r=we(t);ct(r,"iterate",li);const s=r[e](...n);return(s===-1||s===!1)&&Tc(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Ls(t,e,n=[]){In(),gc();const r=we(t)[e].apply(t,n);return mc(),wn(),r}const by=lc("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sr));function Sy(t){sr(t)||(t=String(t));const e=we(this);return ct(e,"has",t),e.hasOwnProperty(t)}class hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?My:gp:i?pp:dp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=Ay[n]))return c;if(n==="hasOwnProperty")return Sy}const l=Reflect.get(e,n,ft(e)?e:r);if((sr(n)?up.has(n):by(n))||(s||ct(e,"get",n),i))return l;if(ft(l)){const c=o&&hc(n)?l:l.value;return s&&ke(c)?bl(c):c}return ke(l)?s?bl(l):ra(l):l}}class fp extends hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=le(e)&&hc(n);if(!this._isShallow){const h=An(i);if(!xt(r)&&!An(r)&&(i=we(i),r=we(r)),!o&&ft(i)&&!ft(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ft(e)?e:s);return e===we(s)&&(l?zn(r,i)&&gn(e,"set",n,r):gn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!sr(n)||!up.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",le(e)?"length":wr),Reflect.ownKeys(e)}}class Py extends hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cy=new fp,Ny=new Py,ky=new fp(!0);const Rl=t=>t,to=t=>Reflect.getPrototypeOf(t);function Dy(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=zr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?Rl:e?rs:$t;return!e&&ct(i,"iterate",c?Al:wr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Oy(t,e){const n={get(s){const i=this.__v_raw,o=we(i),l=we(s);t||(zn(s,l)&&ct(o,"get",s),ct(o,"get",l));const{has:c}=to(o),h=e?Rl:t?rs:$t;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(we(s),"iterate",wr),s.size},has(s){const i=this.__v_raw,o=we(i),l=we(s);return t||(zn(s,l)&&ct(o,"has",s),ct(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=we(l),h=e?Rl:t?rs:$t;return!t&&ct(c,"iterate",wr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return Qe(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!xt(s)&&!An(s)&&(s=we(s));const i=we(this);return to(i).has.call(i,s)||(i.add(s),gn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!An(i)&&(i=we(i));const o=we(this),{has:l,get:c}=to(o);let h=l.call(o,s);h||(s=we(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?zn(i,f)&&gn(o,"set",s,i):gn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:l}=to(i);let c=o.call(i,s);c||(s=we(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&gn(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Dy(s,t,e)}),n}function vc(t,e){const n=Oy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Vy={get:vc(!1,!1)},xy={get:vc(!1,!0)},Ly={get:vc(!0,!1)};const dp=new WeakMap,pp=new WeakMap,gp=new WeakMap,My=new WeakMap;function Fy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:Fy(uy(t))}function ra(t){return An(t)?t:Ec(t,!1,Cy,Vy,dp)}function mp(t){return Ec(t,!1,ky,xy,pp)}function bl(t){return Ec(t,!0,Ny,Ly,gp)}function Ec(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Uy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ar(t){return An(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function Tc(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function By(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Xd(t,"__v_skip",!0),t}const $t=t=>ke(t)?ra(t):t,rs=t=>ke(t)?bl(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function mr(t){return _p(t,!1)}function jy(t){return _p(t,!0)}function _p(t,e){return ft(t)?t:new qy(t,e)}class qy{constructor(e,n){this.dep=new yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:$t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||An(e);e=r?e:we(e),zn(e,n)&&(this._rawValue=e,this._value=r?e:$t(e),this.dep.trigger())}}function Qr(t){return ft(t)?t.value:t}const $y={get:(t,e,n)=>e==="__v_raw"?t:Qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yp(t){return Ar(t)?t:new Proxy(t,$y)}class Hy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return sp(this,!0),!0}get value(){const e=this.dep.track();return ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new Hy(r,s,n)}const ro={},bo=new WeakMap;let _r;function Ky(t,e=!1,n=_r){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function Gy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:xt(H)||s===!1||s===0?mn(H,1):mn(H);let f,p,m,y,C=!1,k=!1;if(ft(t)?(p=()=>t.value,C=xt(t)):Ar(t)?(p=()=>h(t),C=!0):le(t)?(k=!0,C=t.some(H=>Ar(H)||xt(H)),p=()=>t.map(H=>{if(ft(H))return H.value;if(Ar(H))return h(H);if(he(H))return c?c(H,2):H()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){In();try{m()}finally{wn()}}const H=_r;_r=f;try{return c?c(t,3,[y]):t(y)}finally{_r=H}}:p=Xt,e&&s){const H=p,ae=s===!0?1/0:s;p=()=>mn(H(),ae)}const x=Ty(),j=()=>{f.stop(),x&&x.active&&uc(x.effects,f)};if(i&&e){const H=e;e=(...ae)=>{H(...ae),j()}}let B=k?new Array(t.length).fill(ro):ro;const q=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ae=f.run();if(s||C||(k?ae.some((se,R)=>zn(se,B[R])):zn(ae,B))){m&&m();const se=_r;_r=f;try{const R=[ae,B===ro?void 0:k&&B[0]===ro?[]:B,y];B=ae,c?c(e,3,R):e(...R)}finally{_r=se}}}else f.run()};return l&&l(q),f=new np(p),f.scheduler=o?()=>o(q,!1):q,y=H=>Ky(H,!1,f),m=f.onStop=()=>{const H=bo.get(f);if(H){if(c)c(H,4);else for(const ae of H)ae();bo.delete(f)}},e?r?q(!0):B=f.run():o?o(q.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function mn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ft(t))mn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)mn(t[r],e,n);else if(zd(t)||zr(t))t.forEach(r=>{mn(r,e,n)});else if(Yd(t)){for(const r in t)mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(t,e,n,r){try{return r?t(...r):t()}catch(s){sa(s,e,n)}}function Ht(t,e,n,r){if(he(t)){const s=bi(t,e,n,r);return s&&Qd(s)&&s.catch(i=>{sa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}}function sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){In(),bi(i,null,10,[t,c,h]),wn();return}}zy(t,n,s,r,o)}function zy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let Qt=-1;const Jr=[];let Bn=null,Br=0;const vp=Promise.resolve();let So=null;function Ep(t){const e=So||vp;return t?e.then(this?t.bind(this):t):e}function Qy(t){let e=Qt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ic(t){if(!(t.flags&1)){const e=ci(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=ci(n)?yt.push(t):yt.splice(Qy(e),0,t),t.flags|=1,Tp()}}function Tp(){So||(So=vp.then(wp))}function Jy(t){le(t)?Jr.push(...t):Bn&&t.id===-1?Bn.splice(Br+1,0,t):t.flags&1||(Jr.push(t),t.flags|=1),Tp()}function Th(t,e,n=Qt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ip(t){if(Jr.length){const e=[...new Set(Jr)].sort((n,r)=>ci(n)-ci(r));if(Jr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Br=0;Br<Bn.length;Br++){const n=Bn[Br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,Br=0}}const ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wp(t){try{for(Qt=0;Qt<yt.length;Qt++){const e=yt[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<yt.length;Qt++){const e=yt[Qt];e&&(e.flags&=-2)}Qt=-1,yt.length=0,Ip(),So=null,(yt.length||Jr.length)&&wp()}}let Pt=null,Ap=null;function Po(t){const e=Pt;return Pt=t,Ap=t&&t.type.__scopeId||null,e}function yr(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ko(-1);const i=Po(e);let o;try{o=t(...s)}finally{Po(i),r._d&&ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ih(t,e){if(Pt===null)return t;const n=ca(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ce]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&mn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(In(),Ht(c,n,8,[t.el,l,t,e]),wn())}}const Yy=Symbol("_vte"),Rp=t=>t.__isTeleport,pn=Symbol("_leaveCb"),so=Symbol("_enterCb");function Xy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vp(()=>{t.isMounted=!0}),xp(()=>{t.isUnmounting=!0}),t}const Ot=[Function,Array],bp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ot,onEnter:Ot,onAfterEnter:Ot,onEnterCancelled:Ot,onBeforeLeave:Ot,onLeave:Ot,onAfterLeave:Ot,onLeaveCancelled:Ot,onBeforeAppear:Ot,onAppear:Ot,onAfterAppear:Ot,onAppearCancelled:Ot},Sp=t=>{const e=t.subTree;return e.component?Sp(e.component):e},Zy={name:"BaseTransition",props:bp,setup(t,{slots:e}){const n=og(),r=Xy();return()=>{const s=e.default&&Np(e.default(),!0);if(!s||!s.length)return;const i=Pp(s),o=we(t),{mode:l}=o;if(r.isLeaving)return Ya(i);const c=wh(i);if(!c)return Ya(i);let h=Sl(c,o,r,n,p=>h=p);c.type!==vt&&ui(c,h);let f=n.subTree&&wh(n.subTree);if(f&&f.type!==vt&&!Er(f,c)&&Sp(n).type!==vt){let p=Sl(f,o,r,n);if(ui(f,p),l==="out-in"&&c.type!==vt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Ya(i);l==="in-out"&&c.type!==vt?p.delayLeave=(m,y,C)=>{const k=Cp(r,f);k[String(f.key)]=f,m[pn]=()=>{y(),m[pn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{C(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Pp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==vt){e=n;break}}return e}const ev=Zy;function Cp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Sl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:y,onAfterLeave:C,onLeaveCancelled:k,onBeforeAppear:x,onAppear:j,onAfterAppear:B,onAppearCancelled:q}=e,H=String(t.key),ae=Cp(n,t),se=(_,A)=>{_&&Ht(_,r,9,A)},R=(_,A)=>{const b=A[1];se(_,A),le(_)?_.every(I=>I.length<=1)&&b():_.length<=1&&b()},v={mode:o,persisted:l,beforeEnter(_){let A=c;if(!n.isMounted)if(i)A=x||c;else return;_[pn]&&_[pn](!0);const b=ae[H];b&&Er(t,b)&&b.el[pn]&&b.el[pn](),se(A,[_])},enter(_){let A=h,b=f,I=p;if(!n.isMounted)if(i)A=j||h,b=B||f,I=q||p;else return;let T=!1;const Se=_[so]=He=>{T||(T=!0,He?se(I,[_]):se(b,[_]),v.delayedLeave&&v.delayedLeave(),_[so]=void 0)};A?R(A,[_,Se]):Se()},leave(_,A){const b=String(t.key);if(_[so]&&_[so](!0),n.isUnmounting)return A();se(m,[_]);let I=!1;const T=_[pn]=Se=>{I||(I=!0,A(),Se?se(k,[_]):se(C,[_]),_[pn]=void 0,ae[b]===t&&delete ae[b])};ae[b]=t,y?R(y,[_,T]):T()},clone(_){const A=Sl(_,e,n,r,s);return s&&s(A),A}};return v}function Ya(t){if(ia(t))return t=Zn(t),t.children=null,t}function wh(t){if(!ia(t))return Rp(t.type)&&t.children?Pp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function ui(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ui(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Np(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Jt?(o.patchFlag&128&&s++,r=r.concat(Np(o.children,e,l))):(e||o.type!==vt)&&r.push(l!=null?Zn(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function kp(t,e){return he(t)?Qe({name:t.name},e,{setup:t}):t}function Dp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Co=new WeakMap;function Ys(t,e,n,r,s=!1){if(le(t)){t.forEach((C,k)=>Ys(C,e&&(le(e)?e[k]:e),n,r,s));return}if(Xs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ys(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ca(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=we(p),y=p===Ce?Gd:C=>Re(m,C);if(h!=null&&h!==c){if(Ah(e),Be(h))f[h]=null,y(h)&&(p[h]=null);else if(ft(h)){h.value=null;const C=e;C.k&&(f[C.k]=null)}}if(he(c))bi(c,l,12,[o,f]);else{const C=Be(c),k=ft(c);if(C||k){const x=()=>{if(t.f){const j=C?y(c)?p[c]:f[c]:c.value;if(s)le(j)&&uc(j,i);else if(le(j))j.includes(i)||j.push(i);else if(C)f[c]=[i],y(c)&&(p[c]=f[c]);else{const B=[i];c.value=B,t.k&&(f[t.k]=B)}}else C?(f[c]=o,y(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const j=()=>{x(),Co.delete(t)};j.id=-1,Co.set(t,j),bt(j,n)}else Ah(t),x()}}}function Ah(t){const e=Co.get(t);e&&(e.flags|=8,Co.delete(t))}ta().requestIdleCallback;ta().cancelIdleCallback;const Xs=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function tv(t,e){Op(t,"a",e)}function nv(t,e){Op(t,"da",e)}function Op(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(oa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ia(s.parent.vnode)&&rv(r,e,n,s),s=s.parent}}function rv(t,e,n,r){const s=oa(e,t,r,!0);Lp(()=>{uc(r[e],s)},n)}function oa(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{In();const l=Si(n),c=Ht(e,n,t,o);return l(),wn(),c});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=ht)=>{(!fi||t==="sp")&&oa(t,(...r)=>e(...r),n)},sv=Nn("bm"),Vp=Nn("m"),iv=Nn("bu"),ov=Nn("u"),xp=Nn("bum"),Lp=Nn("um"),av=Nn("sp"),lv=Nn("rtg"),cv=Nn("rtc");function uv(t,e=ht){oa("ec",t,e)}const Mp="components";function Rh(t,e){return Up(Mp,t,!0,e)||t}const Fp=Symbol.for("v-ndc");function hv(t){return Be(t)?Up(Mp,t,!1)||t:t||Fp}function Up(t,e,n=!0,r=!1){const s=Pt||ht;if(s){const i=s.type;{const l=Xv(i,!1);if(l&&(l===e||l===Lt(e)||l===ea(Lt(e))))return i}const o=bh(s[t]||i[t],e)||bh(s.appContext[t],e);return!o&&r?i:o}}function bh(t,e){return t&&(t[e]||t[Lt(e)]||t[ea(Lt(e))])}function mP(t,e,n,r){let s;const i=n,o=le(t);if(o||Be(t)){const l=o&&Ar(t);let c=!1,h=!1;l&&(c=!xt(t),h=An(t),t=na(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?rs($t(t[f])):$t(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Pl=t=>t?ag(t)?ca(t):Pl(t.parent):null,Zs=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ic(t.update)}),$nextTick:t=>t.n||(t.n=Ep.bind(t.proxy)),$watch:t=>Iv.bind(t)}),Xa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),fv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xa(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const h=Zs[e];let f,p;if(h)return e==="$attrs"&&ct(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xa(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ce&&l[0]!=="$"&&Re(t,l)||Xa(e,l)||Re(i,l)||Re(r,l)||Re(Zs,l)||Re(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function dv(t){const e=jp(t),n=t.proxy,r=t.ctx;Cl=!1,e.beforeCreate&&Ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:C,activated:k,deactivated:x,beforeDestroy:j,beforeUnmount:B,destroyed:q,unmounted:H,render:ae,renderTracked:se,renderTriggered:R,errorCaptured:v,serverPrefetch:_,expose:A,inheritAttrs:b,components:I,directives:T,filters:Se}=e;if(h&&pv(h,r,null),o)for(const ye in o){const ge=o[ye];he(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);ke(ye)&&(t.data=ra(ye))}if(Cl=!0,i)for(const ye in i){const ge=i[ye],wt=he(ge)?ge.bind(n,n):he(ge.get)?ge.get.bind(n,n):Xt,Mt=!he(ge)&&he(ge.set)?ge.set.bind(n):Xt,Nt=Ut({get:wt,set:Mt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:xe=>Nt.value=xe})}if(l)for(const ye in l)Bp(l[ye],r,n,ye);if(c){const ye=he(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(ge=>{ho(ge,ye[ge])})}f&&Ph(f,t,"c");function Ve(ye,ge){le(ge)?ge.forEach(wt=>ye(wt.bind(n))):ge&&ye(ge.bind(n))}if(Ve(sv,p),Ve(Vp,m),Ve(iv,y),Ve(ov,C),Ve(tv,k),Ve(nv,x),Ve(uv,v),Ve(cv,se),Ve(lv,R),Ve(xp,B),Ve(Lp,H),Ve(av,_),le(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:wt=>n[ge]=wt,enumerable:!0})})}else t.exposed||(t.exposed={});ae&&t.render===Xt&&(t.render=ae),b!=null&&(t.inheritAttrs=b),I&&(t.components=I),T&&(t.directives=T),_&&Dp(t)}function pv(t,e,n=Xt){le(t)&&(t=Nl(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ph(t,e,n){Ht(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bp(t,e,n,r){let s=r.includes(".")?Hp(n,r):()=>n[r];if(Be(t)){const i=e[t];he(i)&&fo(s,i)}else if(he(t))fo(s,t.bind(n));else if(ke(t))if(le(t))t.forEach(i=>Bp(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&fo(s,i,t)}}function jp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>No(c,h,o,!0)),No(c,e,o)),ke(e)&&i.set(e,c),c}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=gv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const gv={data:Ch,props:Nh,emits:Nh,methods:Bs,computed:Bs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Bs,directives:Bs,watch:_v,provide:Ch,inject:mv};function Ch(t,e){return e?t?function(){return Qe(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function mv(t,e){return Bs(Nl(t),Nl(e))}function Nl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Qe(Object.create(null),t,e):e}function Nh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Qe(Object.create(null),Sh(t),Sh(e??{})):e}function _v(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function qp(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yv=0;function vv(t,e){return function(r,s=null){he(r)||(r=Qe({},r)),s!=null&&!ke(s)&&(s=null);const i=qp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:yv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...p)):he(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!c){const y=h._ceVNode||Ke(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),c=!0,h._container=f,f.__vue_app__=h,ca(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ht(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Yr;Yr=h;try{return f()}finally{Yr=p}}};return h}}let Yr=null;function ho(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=og();if(r||Yr){let s=Yr?Yr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Ev=Symbol.for("v-scx"),Tv=()=>Zt(Ev);function fo(t,e,n){return $p(t,e,n)}function $p(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,l=Qe({},n),c=e&&r||!e&&i!=="post";let h;if(fi){if(i==="sync"){const y=Tv();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Xt,y.resume=Xt,y.pause=Xt,y}}const f=ht;l.call=(y,C,k)=>Ht(y,f,C,k);let p=!1;i==="post"?l.scheduler=y=>{bt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,C)=>{C?y():Ic(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Gy(t,e,l);return fi&&(h?h.push(m):c&&m()),m}function Iv(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Hp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=Si(this),l=$p(s,i.bind(r),n);return o(),l}function Hp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const wv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Lt(e)}Modifiers`]||t[`${ir(e)}Modifiers`];function Av(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&wv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Be(f)?f.trim():f)),o.number&&(s=n.map(fc)));let l,c=r[l=Ka(e)]||r[l=Ka(Lt(e))];!c&&i&&(c=r[l=Ka(ir(e))]),c&&Ht(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ht(h,t,6,s)}}const Rv=new WeakMap;function Wp(t,e,n=!1){const r=n?Rv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!he(t)){const c=h=>{const f=Wp(h,e,!0);f&&(l=!0,Qe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ke(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):Qe(o,i),ke(t)&&r.set(t,o),o)}function aa(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,ir(e))||Re(t,e))}function kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:m,setupState:y,ctx:C,inheritAttrs:k}=t,x=Po(t);let j,B;try{if(n.shapeFlag&4){const H=s||r,ae=H;j=Yt(h.call(ae,H,f,p,y,m,C)),B=l}else{const H=e;j=Yt(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),B=e.props?l:bv(l)}}catch(H){ei.length=0,sa(H,t,1),j=Ke(vt)}let q=j;if(B&&k!==!1){const H=Object.keys(B),{shapeFlag:ae}=q;H.length&&ae&7&&(i&&H.some(cc)&&(B=Sv(B,i)),q=Zn(q,B,!1,!0))}return n.dirs&&(q=Zn(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ui(q,n.transition),j=q,Po(x),j}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},Sv=(t,e)=>{const n={};for(const r in t)(!cc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Dh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!aa(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Dh(r,o,h):!0:!!o;return!1}function Dh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function Cv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kp={},Gp=()=>Object.create(Kp),zp=t=>Object.getPrototypeOf(t)===Kp;function Nv(t,e,n,r=!1){const s={},i=Gp();t.propsDefaults=Object.create(null),Qp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:mp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=we(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(aa(t.emitsOptions,m))continue;const y=e[m];if(c)if(Re(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const C=Lt(m);s[C]=kl(c,l,C,y,t,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{Qp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=ir(p))===p||!Re(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=kl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&gn(t.attrs,"set","")}function Qp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(zs(c))continue;const h=e[c];let f;s&&Re(s,f=Lt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:aa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=we(n),h=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=kl(s,c,p,h[p],t,!Re(h,p))}}return o}function kl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Si(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ir(n))&&(r=!0))}return r}const Dv=new WeakMap;function Jp(t,e,n=!1){const r=n?Dv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!he(t)){const f=p=>{c=!0;const[m,y]=Jp(p,e,!0);Qe(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ke(t)&&r.set(t,Gr),Gr;if(le(i))for(let f=0;f<i.length;f++){const p=Lt(i[f]);Oh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Lt(f);if(Oh(p)){const m=i[f],y=o[p]=le(m)||he(m)?{type:m}:Qe({},m),C=y.type;let k=!1,x=!0;if(le(C))for(let j=0;j<C.length;++j){const B=C[j],q=he(B)&&B.name;if(q==="Boolean"){k=!0;break}else q==="String"&&(x=!1)}else k=he(C)&&C.name==="Boolean";y[0]=k,y[1]=x,(k||Re(y,"default"))&&l.push(p)}}const h=[o,l];return ke(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!zs(t)}const wc=t=>t==="_"||t==="_ctx"||t==="$stable",Ac=t=>le(t)?t.map(Yt):[Yt(t)],Ov=(t,e,n)=>{if(e._n)return e;const r=yr((...s)=>Ac(e(...s)),n);return r._c=!1,r},Yp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wc(s))continue;const i=t[s];if(he(i))e[s]=Ov(s,i,r);else if(i!=null){const o=Ac(i);e[s]=()=>o}}},Xp=(t,e)=>{const n=Ac(e);t.slots.default=()=>n},Zp=(t,e,n)=>{for(const r in e)(n||!wc(r))&&(t[r]=e[r])},Vv=(t,e,n)=>{const r=t.slots=Gp();if(t.vnode.shapeFlag&32){const s=e._;s?(Zp(r,e,n),n&&Xd(r,"_",s,!0)):Yp(e,r)}else e&&Xp(t,e)},xv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Zp(s,e,n):(i=!e.$stable,Yp(e,s)),o=e}else e&&(Xp(t,e),o={default:1});if(i)for(const l in s)!wc(l)&&o[l]==null&&delete s[l]},bt=Bv;function Lv(t){return Mv(t)}function Mv(t,e){const n=ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=Xt,insertStaticContent:C}=t,k=(E,w,S,O=null,M=null,V=null,G=void 0,W=null,$=!!w.dynamicChildren)=>{if(E===w)return;E&&!Er(E,w)&&(O=D(E),xe(E,M,V,!0),E=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=w;switch(F){case la:x(E,w,S,O);break;case vt:j(E,w,S,O);break;case el:E==null&&B(w,S,O,G);break;case Jt:I(E,w,S,O,M,V,G,W,$);break;default:Q&1?ae(E,w,S,O,M,V,G,W,$):Q&6?T(E,w,S,O,M,V,G,W,$):(Q&64||Q&128)&&F.process(E,w,S,O,M,V,G,W,$,Z)}ne!=null&&M?Ys(ne,E&&E.ref,V,w||E,!w):ne==null&&E&&E.ref!=null&&Ys(E.ref,null,V,E,!0)},x=(E,w,S,O)=>{if(E==null)r(w.el=l(w.children),S,O);else{const M=w.el=E.el;w.children!==E.children&&h(M,w.children)}},j=(E,w,S,O)=>{E==null?r(w.el=c(w.children||""),S,O):w.el=E.el},B=(E,w,S,O)=>{[E.el,E.anchor]=C(E.children,w,S,O,E.el,E.anchor)},q=({el:E,anchor:w},S,O)=>{let M;for(;E&&E!==w;)M=m(E),r(E,S,O),E=M;r(w,S,O)},H=({el:E,anchor:w})=>{let S;for(;E&&E!==w;)S=m(E),s(E),E=S;s(w)},ae=(E,w,S,O,M,V,G,W,$)=>{if(w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),E==null)se(w,S,O,M,V,G,W,$);else{const F=E.el&&E.el._isVueCE?E.el:null;try{F&&F._beginPatch(),_(E,w,M,V,G,W,$)}finally{F&&F._endPatch()}}},se=(E,w,S,O,M,V,G,W)=>{let $,F;const{props:ne,shapeFlag:Q,transition:ee,dirs:ie}=E;if($=E.el=o(E.type,V,ne&&ne.is,ne),Q&8?f($,E.children):Q&16&&v(E.children,$,null,O,M,Za(E,V),G,W),ie&&fr(E,null,O,"created"),R($,E,E.scopeId,G,O),ne){for(const de in ne)de!=="value"&&!zs(de)&&i($,de,null,ne[de],V,O);"value"in ne&&i($,"value",null,ne.value,V),(F=ne.onVnodeBeforeMount)&&zt(F,O,E)}ie&&fr(E,null,O,"beforeMount");const re=Fv(M,ee);re&&ee.beforeEnter($),r($,w,S),((F=ne&&ne.onVnodeMounted)||re||ie)&&bt(()=>{F&&zt(F,O,E),re&&ee.enter($),ie&&fr(E,null,O,"mounted")},M)},R=(E,w,S,O,M)=>{if(S&&y(E,S),O)for(let V=0;V<O.length;V++)y(E,O[V]);if(M){let V=M.subTree;if(w===V||ng(V.type)&&(V.ssContent===w||V.ssFallback===w)){const G=M.vnode;R(E,G,G.scopeId,G.slotScopeIds,M.parent)}}},v=(E,w,S,O,M,V,G,W,$=0)=>{for(let F=$;F<E.length;F++){const ne=E[F]=W?jn(E[F]):Yt(E[F]);k(null,ne,w,S,O,M,V,G,W)}},_=(E,w,S,O,M,V,G)=>{const W=w.el=E.el;let{patchFlag:$,dynamicChildren:F,dirs:ne}=w;$|=E.patchFlag&16;const Q=E.props||Ce,ee=w.props||Ce;let ie;if(S&&dr(S,!1),(ie=ee.onVnodeBeforeUpdate)&&zt(ie,S,w,E),ne&&fr(w,E,S,"beforeUpdate"),S&&dr(S,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(W,""),F?A(E.dynamicChildren,F,W,S,O,Za(w,M),V):G||ge(E,w,W,null,S,O,Za(w,M),V,!1),$>0){if($&16)b(W,Q,ee,S,M);else if($&2&&Q.class!==ee.class&&i(W,"class",null,ee.class,M),$&4&&i(W,"style",Q.style,ee.style,M),$&8){const re=w.dynamicProps;for(let de=0;de<re.length;de++){const ve=re[de],Je=Q[ve],Ye=ee[ve];(Ye!==Je||ve==="value")&&i(W,ve,Je,Ye,M,S)}}$&1&&E.children!==w.children&&f(W,w.children)}else!G&&F==null&&b(W,Q,ee,S,M);((ie=ee.onVnodeUpdated)||ne)&&bt(()=>{ie&&zt(ie,S,w,E),ne&&fr(w,E,S,"updated")},O)},A=(E,w,S,O,M,V,G)=>{for(let W=0;W<w.length;W++){const $=E[W],F=w[W],ne=$.el&&($.type===Jt||!Er($,F)||$.shapeFlag&198)?p($.el):S;k($,F,ne,null,O,M,V,G,!0)}},b=(E,w,S,O,M)=>{if(w!==S){if(w!==Ce)for(const V in w)!zs(V)&&!(V in S)&&i(E,V,w[V],null,M,O);for(const V in S){if(zs(V))continue;const G=S[V],W=w[V];G!==W&&V!=="value"&&i(E,V,W,G,M,O)}"value"in S&&i(E,"value",w.value,S.value,M)}},I=(E,w,S,O,M,V,G,W,$)=>{const F=w.el=E?E.el:l(""),ne=w.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ie}=w;ie&&(W=W?W.concat(ie):ie),E==null?(r(F,S,O),r(ne,S,O),v(w.children||[],S,ne,M,V,G,W,$)):Q>0&&Q&64&&ee&&E.dynamicChildren?(A(E.dynamicChildren,ee,S,M,V,G,W),(w.key!=null||M&&w===M.subTree)&&eg(E,w,!0)):ge(E,w,S,ne,M,V,G,W,$)},T=(E,w,S,O,M,V,G,W,$)=>{w.slotScopeIds=W,E==null?w.shapeFlag&512?M.ctx.activate(w,S,O,G,$):Se(w,S,O,M,V,G,$):He(E,w,$)},Se=(E,w,S,O,M,V,G)=>{const W=E.component=Gv(E,O,M);if(ia(E)&&(W.ctx.renderer=Z),zv(W,!1,G),W.asyncDep){if(M&&M.registerDep(W,Ve,G),!E.el){const $=W.subTree=Ke(vt);j(null,$,w,S),E.placeholder=$.el}}else Ve(W,E,w,S,M,V,G)},He=(E,w,S)=>{const O=w.component=E.component;if(Pv(E,w,S))if(O.asyncDep&&!O.asyncResolved){ye(O,w,S);return}else O.next=w,O.update();else w.el=E.el,O.vnode=w},Ve=(E,w,S,O,M,V,G)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:ee,u:ie,parent:re,vnode:de}=E;{const st=tg(E);if(st){Q&&(Q.el=de.el,ye(E,Q,G)),st.asyncDep.then(()=>{E.isUnmounted||W()});return}}let ve=Q,Je;dr(E,!1),Q?(Q.el=de.el,ye(E,Q,G)):Q=de,ee&&uo(ee),(Je=Q.props&&Q.props.onVnodeBeforeUpdate)&&zt(Je,re,Q,de),dr(E,!0);const Ye=kh(E),kt=E.subTree;E.subTree=Ye,k(kt,Ye,p(kt.el),D(kt),E,M,V),Q.el=Ye.el,ve===null&&Cv(E,Ye.el),ie&&bt(ie,M),(Je=Q.props&&Q.props.onVnodeUpdated)&&bt(()=>zt(Je,re,Q,de),M)}else{let Q;const{el:ee,props:ie}=w,{bm:re,m:de,parent:ve,root:Je,type:Ye}=E,kt=Xs(w);dr(E,!1),re&&uo(re),!kt&&(Q=ie&&ie.onVnodeBeforeMount)&&zt(Q,ve,w),dr(E,!0);{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Ye);const st=E.subTree=kh(E);k(null,st,S,O,E,M,V),w.el=st.el}if(de&&bt(de,M),!kt&&(Q=ie&&ie.onVnodeMounted)){const st=w;bt(()=>zt(Q,ve,st),M)}(w.shapeFlag&256||ve&&Xs(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&bt(E.a,M),E.isMounted=!0,w=S=O=null}};E.scope.on();const $=E.effect=new np(W);E.scope.off();const F=E.update=$.run.bind($),ne=E.job=$.runIfDirty.bind($);ne.i=E,ne.id=E.uid,$.scheduler=()=>Ic(ne),dr(E,!0),F()},ye=(E,w,S)=>{w.component=E;const O=E.vnode.props;E.vnode=w,E.next=null,kv(E,w.props,O,S),xv(E,w.children,S),In(),Th(E),wn()},ge=(E,w,S,O,M,V,G,W,$=!1)=>{const F=E&&E.children,ne=E?E.shapeFlag:0,Q=w.children,{patchFlag:ee,shapeFlag:ie}=w;if(ee>0){if(ee&128){Mt(F,Q,S,O,M,V,G,W,$);return}else if(ee&256){wt(F,Q,S,O,M,V,G,W,$);return}}ie&8?(ne&16&&Et(F,M,V),Q!==F&&f(S,Q)):ne&16?ie&16?Mt(F,Q,S,O,M,V,G,W,$):Et(F,M,V,!0):(ne&8&&f(S,""),ie&16&&v(Q,S,O,M,V,G,W,$))},wt=(E,w,S,O,M,V,G,W,$)=>{E=E||Gr,w=w||Gr;const F=E.length,ne=w.length,Q=Math.min(F,ne);let ee;for(ee=0;ee<Q;ee++){const ie=w[ee]=$?jn(w[ee]):Yt(w[ee]);k(E[ee],ie,S,null,M,V,G,W,$)}F>ne?Et(E,M,V,!0,!1,Q):v(w,S,O,M,V,G,W,$,Q)},Mt=(E,w,S,O,M,V,G,W,$)=>{let F=0;const ne=w.length;let Q=E.length-1,ee=ne-1;for(;F<=Q&&F<=ee;){const ie=E[F],re=w[F]=$?jn(w[F]):Yt(w[F]);if(Er(ie,re))k(ie,re,S,null,M,V,G,W,$);else break;F++}for(;F<=Q&&F<=ee;){const ie=E[Q],re=w[ee]=$?jn(w[ee]):Yt(w[ee]);if(Er(ie,re))k(ie,re,S,null,M,V,G,W,$);else break;Q--,ee--}if(F>Q){if(F<=ee){const ie=ee+1,re=ie<ne?w[ie].el:O;for(;F<=ee;)k(null,w[F]=$?jn(w[F]):Yt(w[F]),S,re,M,V,G,W,$),F++}}else if(F>ee)for(;F<=Q;)xe(E[F],M,V,!0),F++;else{const ie=F,re=F,de=new Map;for(F=re;F<=ee;F++){const Xe=w[F]=$?jn(w[F]):Yt(w[F]);Xe.key!=null&&de.set(Xe.key,F)}let ve,Je=0;const Ye=ee-re+1;let kt=!1,st=0;const Dn=new Array(Ye);for(F=0;F<Ye;F++)Dn[F]=0;for(F=ie;F<=Q;F++){const Xe=E[F];if(Je>=Ye){xe(Xe,M,V,!0);continue}let Dt;if(Xe.key!=null)Dt=de.get(Xe.key);else for(ve=re;ve<=ee;ve++)if(Dn[ve-re]===0&&Er(Xe,w[ve])){Dt=ve;break}Dt===void 0?xe(Xe,M,V,!0):(Dn[Dt-re]=F+1,Dt>=st?st=Dt:kt=!0,k(Xe,w[Dt],S,null,M,V,G,W,$),Je++)}const ws=kt?Uv(Dn):Gr;for(ve=ws.length-1,F=Ye-1;F>=0;F--){const Xe=re+F,Dt=w[Xe],Ui=w[Xe+1],Vr=Xe+1<ne?Ui.el||Ui.placeholder:O;Dn[F]===0?k(null,Dt,S,Vr,M,V,G,W,$):kt&&(ve<0||F!==ws[ve]?Nt(Dt,S,Vr,2):ve--)}}},Nt=(E,w,S,O,M=null)=>{const{el:V,type:G,transition:W,children:$,shapeFlag:F}=E;if(F&6){Nt(E.component.subTree,w,S,O);return}if(F&128){E.suspense.move(w,S,O);return}if(F&64){G.move(E,w,S,Z);return}if(G===Jt){r(V,w,S);for(let Q=0;Q<$.length;Q++)Nt($[Q],w,S,O);r(E.anchor,w,S);return}if(G===el){q(E,w,S);return}if(O!==2&&F&1&&W)if(O===0)W.beforeEnter(V),r(V,w,S),bt(()=>W.enter(V),M);else{const{leave:Q,delayLeave:ee,afterLeave:ie}=W,re=()=>{E.ctx.isUnmounted?s(V):r(V,w,S)},de=()=>{V._isLeaving&&V[pn](!0),Q(V,()=>{re(),ie&&ie()})};ee?ee(V,re,de):de()}else r(V,w,S)},xe=(E,w,S,O=!1,M=!1)=>{const{type:V,props:G,ref:W,children:$,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:ie}=E;if(Q===-2&&(M=!1),W!=null&&(In(),Ys(W,null,S,E,!0),wn()),ie!=null&&(w.renderCache[ie]=void 0),ne&256){w.ctx.deactivate(E);return}const re=ne&1&&ee,de=!Xs(E);let ve;if(de&&(ve=G&&G.onVnodeBeforeUnmount)&&zt(ve,w,E),ne&6)At(E.component,S,O);else{if(ne&128){E.suspense.unmount(S,O);return}re&&fr(E,null,w,"beforeUnmount"),ne&64?E.type.remove(E,w,S,Z,O):F&&!F.hasOnce&&(V!==Jt||Q>0&&Q&64)?Et(F,w,S,!1,!0):(V===Jt&&Q&384||!M&&ne&16)&&Et($,w,S),O&&Le(E)}(de&&(ve=G&&G.onVnodeUnmounted)||re)&&bt(()=>{ve&&zt(ve,w,E),re&&fr(E,null,w,"unmounted")},S)},Le=E=>{const{type:w,el:S,anchor:O,transition:M}=E;if(w===Jt){kn(S,O);return}if(w===el){H(E);return}const V=()=>{s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:W}=M,$=()=>G(S,V);W?W(E.el,V,$):$()}else V()},kn=(E,w)=>{let S;for(;E!==w;)S=m(E),s(E),E=S;s(w)},At=(E,w,S)=>{const{bum:O,scope:M,job:V,subTree:G,um:W,m:$,a:F}=E;Vh($),Vh(F),O&&uo(O),M.stop(),V&&(V.flags|=8,xe(G,E,w,S)),W&&bt(W,w),bt(()=>{E.isUnmounted=!0},w)},Et=(E,w,S,O=!1,M=!1,V=0)=>{for(let G=V;G<E.length;G++)xe(E[G],w,S,O,M)},D=E=>{if(E.shapeFlag&6)return D(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),S=w&&w[Yy];return S?m(S):w};let Y=!1;const z=(E,w,S)=>{E==null?w._vnode&&xe(w._vnode,null,null,!0):k(w._vnode||null,E,w,null,null,null,S),w._vnode=E,Y||(Y=!0,Th(),Ip(),Y=!1)},Z={p:k,um:xe,m:Nt,r:Le,mt:Se,mc:v,pc:ge,pbc:A,n:D,o:t};return{render:z,hydrate:void 0,createApp:vv(z)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=jn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&eg(o,l)),l.type===la&&l.patchFlag!==-1&&(l.el=o.el),l.type===vt&&!l.el&&(l.el=o.el)}}function Uv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function Vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ng=t=>t.__isSuspense;function Bv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Jy(t)}const Jt=Symbol.for("v-fgt"),la=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),el=Symbol.for("v-stc"),ei=[];let Ct=null;function js(t=!1){ei.push(Ct=t?null:[])}function jv(){ei.pop(),Ct=ei[ei.length-1]||null}let hi=1;function ko(t,e=!1){hi+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function rg(t){return t.dynamicChildren=hi>0?Ct||Gr:null,jv(),hi>0&&Ct&&Ct.push(t),t}function tl(t,e,n,r,s,i){return rg(St(t,e,n,r,s,i,!0))}function sg(t,e,n,r,s){return rg(Ke(t,e,n,r,s,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function Er(t,e){return t.type===e.type&&t.key===e.key}const ig=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||ft(t)||he(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function St(t,e=null,n=null,r=0,s=null,i=t===Jt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ig(e),ref:e&&po(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return l?(Rc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),hi>0&&!o&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const Ke=qv;function qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fp)&&(t=vt),Do(t)){const l=Zn(t,e,!0);return n&&Rc(l,n),hi>0&&!i&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(t)]=l:Ct.push(l)),l.patchFlag=-2,l}if(Zv(t)&&(t=t.__vccOpts),e){e=$v(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=pc(l)),ke(c)&&(Tc(c)&&!le(c)&&(c=Qe({},c)),e.style=dc(c))}const o=Be(t)?1:ng(t)?128:Rp(t)?64:ke(t)?4:he(t)?2:0;return St(t,e,n,r,s,o,i,!0)}function $v(t){return t?Tc(t)||zp(t)?Qe({},t):t:null}function Zn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Hv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ig(h),ref:e&&e.ref?n&&i?le(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Jt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ui(f,c.clone(f)),f}function go(t=" ",e=0){return Ke(la,null,t,e)}function xh(t="",e=!1){return e?(js(),sg(vt,null,t)):Ke(vt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Ke(vt):le(t)?Ke(Jt,null,t.slice()):Do(t)?jn(t):Ke(la,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zn(t)}function Rc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Rc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zp(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[go(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pc([e.class,r.class]));else if(s==="style")e.style=dc([e.style,r.style]);else if(Yo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Ht(t,e,7,[n,r])}const Wv=qp();let Kv=0;function Gv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Wv,i={uid:Kv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ey(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:Wp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Av.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const og=()=>ht||Pt;let Oo,Dl;{const t=ta(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Dl=e("__VUE_SSR_SETTERS__",n=>fi=n)}const Si=t=>{const e=ht;return Oo(t),t.scope.on(),()=>{t.scope.off(),Oo(e)}},Lh=()=>{ht&&ht.scope.off(),Oo(null)};function ag(t){return t.vnode.shapeFlag&4}let fi=!1;function zv(t,e=!1,n=!1){e&&Dl(e);const{props:r,children:s}=t.vnode,i=ag(t);Nv(t,r,i,e),Vv(t,s,n||e);const o=i?Qv(t,e):void 0;return e&&Dl(!1),o}function Qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fv);const{setup:r}=n;if(r){In();const s=t.setupContext=r.length>1?Yv(t):null,i=Si(t),o=bi(r,t,0,[t.props,s]),l=Qd(o);if(wn(),i(),(l||t.sp)&&!Xs(t)&&Dp(t),l){if(o.then(Lh,Lh),e)return o.then(c=>{Mh(t,c)}).catch(c=>{sa(c,t,0)});t.asyncDep=o}else Mh(t,o)}else lg(t)}function Mh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=yp(e)),lg(t)}function lg(t,e,n){const r=t.type;t.render||(t.render=r.render||Xt);{const s=Si(t);In();try{dv(t)}finally{wn(),s()}}}const Jv={get(t,e){return ct(t,"get",""),t[e]}};function Yv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jv),slots:t.slots,emit:t.emit,expose:e}}function ca(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(yp(By(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function Xv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Zv(t){return he(t)&&"__vccOpts"in t}const Ut=(t,e)=>Wy(t,e,fi);function bc(t,e,n){try{ko(-1);const r=arguments.length;return r===2?ke(e)&&!le(e)?Do(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Do(n)&&(n=[n]),Ke(t,e,n))}finally{ko(1)}}const eE="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ol;const Fh=typeof window<"u"&&window.trustedTypes;if(Fh)try{Ol=Fh.createPolicy("vue",{createHTML:t=>t})}catch{}const cg=Ol?t=>Ol.createHTML(t):t=>t,tE="http://www.w3.org/2000/svg",nE="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Uh=dn&&dn.createElement("template"),rE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dn.createElementNS(tE,t):e==="mathml"?dn.createElementNS(nE,t):n?dn.createElement(t,{is:n}):dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uh.innerHTML=cg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Uh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ln="transition",Ms="animation",di=Symbol("_vtc"),ug={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sE=Qe({},bp,ug),iE=t=>(t.displayName="Transition",t.props=sE,t),Bh=iE((t,{slots:e})=>bc(ev,oE(t),e)),pr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},jh=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function oE(t){const e={};for(const I in t)I in ug||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,C=aE(s),k=C&&C[0],x=C&&C[1],{onBeforeEnter:j,onEnter:B,onEnterCancelled:q,onLeave:H,onLeaveCancelled:ae,onBeforeAppear:se=j,onAppear:R=B,onAppearCancelled:v=q}=e,_=(I,T,Se,He)=>{I._enterCancelled=He,gr(I,T?f:l),gr(I,T?h:o),Se&&Se()},A=(I,T)=>{I._isLeaving=!1,gr(I,p),gr(I,y),gr(I,m),T&&T()},b=I=>(T,Se)=>{const He=I?R:B,Ve=()=>_(T,I,Se);pr(He,[T,Ve]),qh(()=>{gr(T,I?c:i),hn(T,I?f:l),jh(He)||$h(T,r,k,Ve)})};return Qe(e,{onBeforeEnter(I){pr(j,[I]),hn(I,i),hn(I,o)},onBeforeAppear(I){pr(se,[I]),hn(I,c),hn(I,h)},onEnter:b(!1),onAppear:b(!0),onLeave(I,T){I._isLeaving=!0;const Se=()=>A(I,T);hn(I,p),I._enterCancelled?(hn(I,m),Kh(I)):(Kh(I),hn(I,m)),qh(()=>{I._isLeaving&&(gr(I,p),hn(I,y),jh(H)||$h(I,r,x,Se))}),pr(H,[I,Se])},onEnterCancelled(I){_(I,!1,void 0,!0),pr(q,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),pr(v,[I])},onLeaveCancelled(I){A(I),pr(ae,[I])}})}function aE(t){if(t==null)return null;if(ke(t))return[nl(t.enter),nl(t.leave)];{const e=nl(t);return[e,e]}}function nl(t){return dy(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[di]||(t[di]=new Set)).add(e)}function gr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[di];n&&(n.delete(e),n.size||(t[di]=void 0))}function qh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lE=0;function $h(t,e,n,r){const s=t._endId=++lE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=cE(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,m),i()},m=y=>{y.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(h,m)}function cE(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Ln}Delay`),i=r(`${Ln}Duration`),o=Hh(s,i),l=r(`${Ms}Delay`),c=r(`${Ms}Duration`),h=Hh(l,c);let f=null,p=0,m=0;e===Ln?o>0&&(f=Ln,p=o,m=i.length):e===Ms?h>0&&(f=Ms,p=h,m=c.length):(p=Math.max(o,h),f=p>0?o>h?Ln:Ms:null,m=f?f===Ln?i.length:c.length:0);const y=f===Ln&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ln}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:y}}function Hh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Wh(n)+Wh(t[r])))}function Wh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kh(t){return(t?t.ownerDocument:document).body.offsetHeight}function uE(t,e,n){const r=t[di];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gh=Symbol("_vod"),hE=Symbol("_vsh"),fE=Symbol(""),dE=/(?:^|;)\s*display\s*:/;function pE(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&mo(r,l,"")}else for(const o in e)n[o]==null&&mo(r,o,"");for(const o in n)o==="display"&&(i=!0),mo(r,o,n[o])}else if(s){if(e!==n){const o=r[fE];o&&(n+=";"+o),r.cssText=n,i=dE.test(n)}}else e&&t.removeAttribute("style");Gh in t&&(t[Gh]=i?r.display:"",t[hE]&&(r.display="none"))}const zh=/\s*!important$/;function mo(t,e,n){if(le(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gE(t,e);zh.test(n)?t.setProperty(ir(r),n.replace(zh,""),"important"):t[r]=n}}const Qh=["Webkit","Moz","ms"],rl={};function gE(t,e){const n=rl[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return rl[e]=r;r=ea(r);for(let s=0;s<Qh.length;s++){const i=Qh[s]+r;if(i in t)return rl[e]=i}return e}const Jh="http://www.w3.org/1999/xlink";function Yh(t,e,n,r,s,i=vy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jh,e.slice(6,e.length)):t.setAttributeNS(Jh,e,n):n==null||i&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":sr(n)?String(n):n)}function Xh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zd(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function mE(t,e,n,r){t.removeEventListener(e,n,r)}const Zh=Symbol("_vei");function _E(t,e,n,r,s=null){const i=t[Zh]||(t[Zh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=yE(e);if(r){const h=i[e]=TE(r,s);jr(t,l,h,c)}else o&&(mE(t,l,o,c),i[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function yE(t){let e;if(ef.test(t)){e={};let r;for(;r=t.match(ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ir(t.slice(2)),e]}let sl=0;const vE=Promise.resolve(),EE=()=>sl||(vE.then(()=>sl=0),sl=Date.now());function TE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(IE(r,n.value),e,5,[r])};return n.value=t,n.attached=EE(),n}function IE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uE(t,r,o):e==="style"?pE(t,n,r):Yo(e)?cc(e)||_E(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):AE(t,e,r,o))?(Xh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Xh(t,Lt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yh(t,e,r,o))};function AE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tf(e)&&Be(n)?!1:e in t}const nf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>uo(e,n):e};function RE(t){t.target.composing=!0}function rf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const il=Symbol("_assign");function sf(t,e,n){return e&&(t=t.trim()),n&&(t=fc(t)),t}const of={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[il]=nf(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{o.target.composing||t[il](sf(t.value,n,i))}),(n||i)&&jr(t,"change",()=>{t.value=sf(t.value,n,i)}),e||(jr(t,"compositionstart",RE),jr(t,"compositionend",rf),jr(t,"change",rf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[il]=nf(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?fc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},bE=["ctrl","shift","alt","meta"],SE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bE.some(n=>t[`${n}Key`]&&!e.includes(n))},af=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=SE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},PE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lf=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ir(s.key);if(e.some(o=>o===i||PE[o]===i))return t(s)})},CE=Qe({patchProp:wE},rE);let cf;function NE(){return cf||(cf=Lv(CE))}const kE=(...t)=>{const e=NE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=OE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,DE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function DE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function OE(t){return Be(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const qr=typeof document<"u";function hg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function VE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hg(t.default)}const Ae=Object.assign;function ol(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const ti=()=>{},Wt=Array.isArray;function uf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const fg=/#/g,xE=/&/g,LE=/\//g,ME=/=/g,FE=/\?/g,dg=/\+/g,UE=/%5B/g,BE=/%5D/g,pg=/%5E/g,jE=/%60/g,gg=/%7B/g,qE=/%7C/g,mg=/%7D/g,$E=/%20/g;function Sc(t){return t==null?"":encodeURI(""+t).replace(qE,"|").replace(UE,"[").replace(BE,"]")}function HE(t){return Sc(t).replace(gg,"{").replace(mg,"}").replace(pg,"^")}function Vl(t){return Sc(t).replace(dg,"%2B").replace($E,"+").replace(fg,"%23").replace(xE,"%26").replace(jE,"`").replace(gg,"{").replace(mg,"}").replace(pg,"^")}function WE(t){return Vl(t).replace(ME,"%3D")}function KE(t){return Sc(t).replace(fg,"%23").replace(FE,"%3F")}function GE(t){return KE(t).replace(LE,"%2F")}function pi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const zE=/\/$/,QE=t=>t.replace(zE,"");function al(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=ZE(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:pi(o)}}function JE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],n.matched[s])&&_g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XE(t[n],e[n]))return!1;return!0}function XE(t,e){return Wt(t)?ff(t,e):Wt(e)?ff(e,t):t===e}function ff(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let xl=function(t){return t.pop="pop",t.push="push",t}({}),ll=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function eT(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QE(t)}const tT=/^[^#]+#/;function nT(t,e){return t.replace(tT,"#")+e}function rT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ua=()=>({left:window.scrollX,top:window.scrollY});function sT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function df(t,e){return(history.state?history.state.position-e:-1)+t}const Ll=new Map;function iT(t,e){Ll.set(t,e)}function oT(t){const e=Ll.get(t);return Ll.delete(t),e}function aT(t){return typeof t=="string"||t&&typeof t=="object"}function yg(t){return typeof t=="string"||typeof t=="symbol"}let Ue=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const vg=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function is(t,e){return Ae(new Error,{type:t,[vg]:!0},e)}function fn(t,e){return t instanceof Error&&vg in t&&(e==null||!!(t.type&e))}const lT=["params","query","hash"];function cT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of lT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function uT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(dg," "),i=s.indexOf("="),o=pi(i<0?s:s.slice(0,i)),l=i<0?null:pi(s.slice(i+1));if(o in e){let c=e[o];Wt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function pf(t){let e="";for(let n in t){const r=t[n];if(n=WE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(s=>s&&Vl(s)):[r&&Vl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fT=Symbol(""),gf=Symbol(""),ha=Symbol(""),Eg=Symbol(""),Ml=Symbol("");function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(is(Ue.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):aT(m)?c(is(Ue.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function cl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(hg(c)){const h=(c.__vccOpts||c)[e];h&&i.push(qn(h,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=VE(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&qn(m,n,r,o,l,s)()}))}}return i}function dT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>ss(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>ss(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pT=()=>location.protocol+"//"+location.host;function Tg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),hf(l,"")}return hf(n,t)+r+s}function gT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Tg(t,location),C=n.value,k=e.value;let x=0;if(m){if(n.value=y,e.value=m,o&&o===C){o=null;return}x=k?m.position-k.position:0}else r(y);s.forEach(j=>{j(n.value,C,{delta:x,type:xl.pop,direction:x?x>0?ll.forward:ll.back:ll.unknown})})};function c(){o=n.value}function h(m){s.push(m);const y=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ae({},m.state,{scroll:ua()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:h,destroy:p}}function mf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ua():null}}function mT(t){const{history:e,location:n}=window,r={value:Tg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:pT()+t+c;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(c,h){i(c,Ae({},e.state,mf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const f=Ae({},s.value,e.state,{forward:c,scroll:ua()});i(f.current,f,!0),i(c,Ae({},mf(r.value,c,null),{position:f.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function _T(t){t=eT(t);const e=mT(t),n=gT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:nT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Tr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var We=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(We||{});const yT={type:Tr.Static,value:""},vT=/[a-zA-Z0-9_]/;function ET(t){if(!t)return[[]];if(t==="/")return[[yT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=We.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===We.Static?i.push({type:Tr.Static,value:h}):n===We.Param||n===We.ParamRegExp||n===We.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Tr.Param,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==We.ParamRegExp){r=n,n=We.EscapeNext;continue}switch(n){case We.Static:c==="/"?(h&&p(),o()):c===":"?(p(),n=We.Param):m();break;case We.EscapeNext:m(),n=r;break;case We.Param:c==="("?n=We.ParamRegExp:vT.test(c)?m():(p(),n=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case We.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=We.ParamRegExpEnd:f+=c;break;case We.ParamRegExpEnd:p(),n=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===We.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const _f="[^/]+?",TT={sensitive:!1,strict:!1,start:!0,end:!0};var _t=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(_t||{});const IT=/[.+*?^${}()[\]/\\]/g;function wT(t,e){const n=Ae({},TT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[_t.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=_t.Segment+(n.sensitive?_t.BonusCaseSensitive:0);if(m.type===Tr.Static)p||(s+="/"),s+=m.value.replace(IT,"\\$&"),y+=_t.Static;else if(m.type===Tr.Param){const{value:C,repeatable:k,optional:x,regexp:j}=m;i.push({name:C,repeatable:k,optional:x});const B=j||_f;if(B!==_f){y+=_t.BonusCustomRegExp;try{`${B}`}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+H.message)}}let q=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=x&&h.length<2?`(?:/${q})`:"/"+q),x&&(q+="?"),s+=q,y+=_t.Dynamic,x&&(y+=_t.BonusOptional),k&&(y+=_t.BonusRepeatable),B===".*"&&(y+=_t.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=_t.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",C=i[m-1];p[C.name]=y&&C.repeatable?y.split("/"):y}return p}function c(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===Tr.Static)f+=y.value;else if(y.type===Tr.Param){const{value:C,repeatable:k,optional:x}=y,j=C in h?h[C]:"";if(Wt(j)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=Wt(j)?j.join("/"):j;if(!B)if(x)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function AT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===_t.Static+_t.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===_t.Static+_t.Segment?1:-1:0}function Ig(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=AT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yf(r))return 1;if(yf(s))return-1}return s.length-r.length}function yf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RT={strict:!1,end:!0,sensitive:!1};function bT(t,e,n){const r=wT(ET(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ST(t,e){const n=[],r=new Map;e=uf(RT,e);function s(p){return r.get(p)}function i(p,m,y){const C=!y,k=Ef(p);k.aliasOf=y&&y.record;const x=uf(e,p),j=[k];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of H)j.push(Ef(Ae({},k,{components:y?y.record.components:k.components,path:ae,aliasOf:y?y.record:k})))}let B,q;for(const H of j){const{path:ae}=H;if(m&&ae[0]!=="/"){const se=m.record.path,R=se[se.length-1]==="/"?"":"/";H.path=m.record.path+(ae&&R+ae)}if(B=bT(H,m,x),y?y.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),C&&p.name&&!Tf(B)&&o(p.name)),wg(B)&&c(B),k.children){const se=k.children;for(let R=0;R<se.length;R++)i(se[R],B,y&&y.children[R])}y=y||B}return q?()=>{o(q)}:ti}function o(p){if(yg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=NT(p,n);n.splice(m,0,p),p.record.name&&!Tf(p)&&r.set(p.record.name,p)}function h(p,m){let y,C={},k,x;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw is(Ue.MATCHER_NOT_FOUND,{location:p});x=y.record.name,C=Ae(vf(m.params,y.keys.filter(q=>!q.optional).concat(y.parent?y.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&vf(p.params,y.keys.map(q=>q.name))),k=y.stringify(C)}else if(p.path!=null)k=p.path,y=n.find(q=>q.re.test(k)),y&&(C=y.parse(k),x=y.record.name);else{if(y=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!y)throw is(Ue.MATCHER_NOT_FOUND,{location:p,currentLocation:m});x=y.record.name,C=Ae({},m.params,p.params),k=y.stringify(C)}const j=[];let B=y;for(;B;)j.unshift(B.record),B=B.parent;return{name:x,path:k,params:C,matched:j,meta:CT(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function vf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ef(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:PT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function PT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CT(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function NT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ig(t,e[i])<0?r=i:n=i+1}const s=kT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function kT(t){let e=t;for(;e=e.parent;)if(wg(e)&&Ig(t,e)===0)return e}function wg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function If(t){const e=Zt(ha),n=Zt(Eg),r=Ut(()=>{const c=Qr(t.to);return e.resolve(c)}),s=Ut(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ss.bind(null,f));if(m>-1)return m;const y=wf(c[h-2]);return h>1&&wf(f)===y&&p[p.length-1].path!==y?p.findIndex(ss.bind(null,c[h-2])):m}),i=Ut(()=>s.value>-1&&LT(n.params,r.value.params)),o=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&_g(n.params,r.value.params));function l(c={}){if(xT(c)){const h=e[Qr(t.replace)?"replace":"push"](Qr(t.to)).catch(ti);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function DT(t){return t.length===1?t[0]:t}const OT=kp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:If,setup(t,{slots:e}){const n=ra(If(t)),{options:r}=Zt(ha),s=Ut(()=>({[Af(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Af(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&DT(e.default(n));return t.custom?i:bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),VT=OT;function xT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function wf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Af=(t,e,n)=>t??e??n,MT=kp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Ml),s=Ut(()=>t.route||r.value),i=Zt(gf,0),o=Ut(()=>{let h=Qr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Ut(()=>s.value.matched[o.value]);ho(gf,Ut(()=>o.value+1)),ho(fT,l),ho(Ml,s);const c=mr();return fo(()=>[c.value,l.value,t.name],([h,f,p],[m,y,C])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!ss(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Rf(n.default,{Component:m,route:h});const y=p.props[f],C=y?y===!0?h.params:typeof y=="function"?y(h):y:null,x=bc(m,Ae({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Rf(n.default,{Component:x,route:h})||x}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const FT=MT;function UT(t){const e=ST(t.routes,t),n=t.parseQuery||uT,r=t.stringifyQuery||pf,s=t.history,i=Fs(),o=Fs(),l=Fs(),c=jy(Mn);let h=Mn;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ol.bind(null,D=>""+D),p=ol.bind(null,GE),m=ol.bind(null,pi);function y(D,Y){let z,Z;return yg(D)?(z=e.getRecordMatcher(D),Z=Y):Z=D,e.addRoute(Z,z)}function C(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(D=>D.record)}function x(D){return!!e.getRecordMatcher(D)}function j(D,Y){if(Y=Ae({},Y||c.value),typeof D=="string"){const S=al(n,D,Y.path),O=e.resolve({path:S.path},Y),M=s.createHref(S.fullPath);return Ae(S,O,{params:m(O.params),hash:pi(S.hash),redirectedFrom:void 0,href:M})}let z;if(D.path!=null)z=Ae({},D,{path:al(n,D.path,Y.path).path});else{const S=Ae({},D.params);for(const O in S)S[O]==null&&delete S[O];z=Ae({},D,{params:p(S)}),Y.params=p(Y.params)}const Z=e.resolve(z,Y),pe=D.hash||"";Z.params=f(m(Z.params));const E=JE(r,Ae({},D,{hash:HE(pe),path:Z.path})),w=s.createHref(E);return Ae({fullPath:E,hash:pe,query:r===pf?hT(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:w})}function B(D){return typeof D=="string"?al(n,D,c.value.path):Ae({},D)}function q(D,Y){if(h!==D)return is(Ue.NAVIGATION_CANCELLED,{from:Y,to:D})}function H(D){return R(D)}function ae(D){return H(Ae(B(D),{replace:!0}))}function se(D,Y){const z=D.matched[D.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(D,Y):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Ae({query:D.query,hash:D.hash,params:pe.path!=null?{}:D.params},pe)}}function R(D,Y){const z=h=j(D),Z=c.value,pe=D.state,E=D.force,w=D.replace===!0,S=se(z,Z);if(S)return R(Ae(B(S),{state:typeof S=="object"?Ae({},pe,S.state):pe,force:E,replace:w}),Y||z);const O=z;O.redirectedFrom=Y;let M;return!E&&YE(r,Z,z)&&(M=is(Ue.NAVIGATION_DUPLICATED,{to:O,from:Z}),Nt(Z,Z,!0,!1)),(M?Promise.resolve(M):A(O,Z)).catch(V=>fn(V)?fn(V,Ue.NAVIGATION_GUARD_REDIRECT)?V:Mt(V):ge(V,O,Z)).then(V=>{if(V){if(fn(V,Ue.NAVIGATION_GUARD_REDIRECT))return R(Ae({replace:w},B(V.to),{state:typeof V.to=="object"?Ae({},pe,V.to.state):pe,force:E}),Y||O)}else V=I(O,Z,!0,w,pe);return b(O,Z,V),V})}function v(D,Y){const z=q(D,Y);return z?Promise.reject(z):Promise.resolve()}function _(D){const Y=kn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function A(D,Y){let z;const[Z,pe,E]=dT(D,Y);z=cl(Z.reverse(),"beforeRouteLeave",D,Y);for(const S of Z)S.leaveGuards.forEach(O=>{z.push(qn(O,D,Y))});const w=v.bind(null,D,Y);return z.push(w),Et(z).then(()=>{z=[];for(const S of i.list())z.push(qn(S,D,Y));return z.push(w),Et(z)}).then(()=>{z=cl(pe,"beforeRouteUpdate",D,Y);for(const S of pe)S.updateGuards.forEach(O=>{z.push(qn(O,D,Y))});return z.push(w),Et(z)}).then(()=>{z=[];for(const S of E)if(S.beforeEnter)if(Wt(S.beforeEnter))for(const O of S.beforeEnter)z.push(qn(O,D,Y));else z.push(qn(S.beforeEnter,D,Y));return z.push(w),Et(z)}).then(()=>(D.matched.forEach(S=>S.enterCallbacks={}),z=cl(E,"beforeRouteEnter",D,Y,_),z.push(w),Et(z))).then(()=>{z=[];for(const S of o.list())z.push(qn(S,D,Y));return z.push(w),Et(z)}).catch(S=>fn(S,Ue.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(D,Y,z){l.list().forEach(Z=>_(()=>Z(D,Y,z)))}function I(D,Y,z,Z,pe){const E=q(D,Y);if(E)return E;const w=Y===Mn,S=qr?history.state:{};z&&(Z||w?s.replace(D.fullPath,Ae({scroll:w&&S&&S.scroll},pe)):s.push(D.fullPath,pe)),c.value=D,Nt(D,Y,z,w),Mt()}let T;function Se(){T||(T=s.listen((D,Y,z)=>{if(!At.listening)return;const Z=j(D),pe=se(Z,At.currentRoute.value);if(pe){R(Ae(pe,{replace:!0,force:!0}),Z).catch(ti);return}h=Z;const E=c.value;qr&&iT(df(E.fullPath,z.delta),ua()),A(Z,E).catch(w=>fn(w,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?w:fn(w,Ue.NAVIGATION_GUARD_REDIRECT)?(R(Ae(B(w.to),{force:!0}),Z).then(S=>{fn(S,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===xl.pop&&s.go(-1,!1)}).catch(ti),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(w,Z,E))).then(w=>{w=w||I(Z,E,!1),w&&(z.delta&&!fn(w,Ue.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===xl.pop&&fn(w,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(Z,E,w)}).catch(ti)}))}let He=Fs(),Ve=Fs(),ye;function ge(D,Y,z){Mt(D);const Z=Ve.list();return Z.length?Z.forEach(pe=>pe(D,Y,z)):console.error(D),Promise.reject(D)}function wt(){return ye&&c.value!==Mn?Promise.resolve():new Promise((D,Y)=>{He.add([D,Y])})}function Mt(D){return ye||(ye=!D,Se(),He.list().forEach(([Y,z])=>D?z(D):Y()),He.reset()),D}function Nt(D,Y,z,Z){const{scrollBehavior:pe}=t;if(!qr||!pe)return Promise.resolve();const E=!z&&oT(df(D.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return Ep().then(()=>pe(D,Y,E)).then(w=>w&&sT(w)).catch(w=>ge(w,D,Y))}const xe=D=>s.go(D);let Le;const kn=new Set,At={currentRoute:c,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:j,options:t,push:H,replace:ae,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ve.add,isReady:wt,install(D){D.component("RouterLink",VT),D.component("RouterView",FT),D.config.globalProperties.$router=At,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Qr(c)}),qr&&!Le&&c.value===Mn&&(Le=!0,H(s.location).catch(Z=>{}));const Y={};for(const Z in Mn)Object.defineProperty(Y,Z,{get:()=>c.value[Z],enumerable:!0});D.provide(ha,At),D.provide(Eg,mp(Y)),D.provide(Ml,c);const z=D.unmount;kn.add(D),D.unmount=function(){kn.delete(D),kn.size<1&&(h=Mn,T&&T(),T=null,c.value=Mn,Le=!1,ye=!1),z()}}};function Et(D){return D.reduce((Y,z)=>Y.then(()=>_(z)),Promise.resolve())}return At}function BT(){return Zt(ha)}var bf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,y=h&63;c||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new qT;const m=i<<2|l>>4;if(r.push(m),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(t){const e=Ag(t);return Rg.encodeByteArray(e,!0)},Vo=function(t){return $T(t).replace(/\./g,"")},bg=function(t){try{return Rg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=()=>HT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof bf>"u")return;const t=bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bg(t[1]);return e&&JSON.parse(e)},fa=()=>{try{return WT()||KT()||GT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sg=t=>{var e,n;return(n=(e=fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pg=t=>{const e=Sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cg=()=>{var t;return(t=fa())===null||t===void 0?void 0:t.config},Ng=t=>{var e;return(e=fa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function YT(){var t;const e=(t=fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tI(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nI(){return!YT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rI(){try{return typeof indexedDB=="object"}catch{return!1}}function sI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iI,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new an(s,l,r)}}function oI(t,e){return t.replace(aI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aI=/\{\$([^}]+)}/g;function lI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sf(i)&&Sf(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cI(t,e){const n=new uI(t,e);return n.subscribe.bind(n)}class uI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ul),s.error===void 0&&(s.error=ul),s.complete===void 0&&(s.complete=ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ul(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pI(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dI(t){return t===vr?void 0:t}function pI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const mI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},_I=_e.INFO,yI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},vI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=_I,this._logHandler=vI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const EI=(t,e)=>e.some(n=>t instanceof n);let Pf,Cf;function TI(){return Pf||(Pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function II(){return Cf||(Cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kg=new WeakMap,Fl=new WeakMap,Dg=new WeakMap,hl=new WeakMap,Cc=new WeakMap;function wI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kg.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function AI(t){if(Fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fl.set(t,e)}let Ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RI(t){Ul=t(Ul)}function bI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return Dg.set(r,e.sort?e.sort():[e]),Qn(r)}:II().includes(t)?function(...e){return t.apply(fl(this),e),Qn(kg.get(this))}:function(...e){return Qn(t.apply(fl(this),e))}}function SI(t){return typeof t=="function"?bI(t):(t instanceof IDBTransaction&&AI(t),EI(t,TI())?new Proxy(t,Ul):t)}function Qn(t){if(t instanceof IDBRequest)return wI(t);if(hl.has(t))return hl.get(t);const e=SI(t);return e!==t&&(hl.set(t,e),Cc.set(e,t)),e}const fl=t=>Cc.get(t);function PI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qn(o.result),c.oldVersion,c.newVersion,Qn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const CI=["get","getKey","getAll","getAllKeys","count"],NI=["put","add","delete","clear"],dl=new Map;function Nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dl.get(e))return dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=NI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return dl.set(e,i),i}RI(t=>({...t,get:(e,n,r)=>Nf(e,n)||t.get(e,n,r),has:(e,n)=>!!Nf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bl="@firebase/app",kf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Pc("@firebase/app"),OI="@firebase/app-compat",VI="@firebase/analytics-compat",xI="@firebase/analytics",LI="@firebase/app-check-compat",MI="@firebase/app-check",FI="@firebase/auth",UI="@firebase/auth-compat",BI="@firebase/database",jI="@firebase/data-connect",qI="@firebase/database-compat",$I="@firebase/functions",HI="@firebase/functions-compat",WI="@firebase/installations",KI="@firebase/installations-compat",GI="@firebase/messaging",zI="@firebase/messaging-compat",QI="@firebase/performance",JI="@firebase/performance-compat",YI="@firebase/remote-config",XI="@firebase/remote-config-compat",ZI="@firebase/storage",ew="@firebase/storage-compat",tw="@firebase/firestore",nw="@firebase/vertexai-preview",rw="@firebase/firestore-compat",sw="firebase",iw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="[DEFAULT]",ow={[Bl]:"fire-core",[OI]:"fire-core-compat",[xI]:"fire-analytics",[VI]:"fire-analytics-compat",[MI]:"fire-app-check",[LI]:"fire-app-check-compat",[FI]:"fire-auth",[UI]:"fire-auth-compat",[BI]:"fire-rtdb",[jI]:"fire-data-connect",[qI]:"fire-rtdb-compat",[$I]:"fire-fn",[HI]:"fire-fn-compat",[WI]:"fire-iid",[KI]:"fire-iid-compat",[GI]:"fire-fcm",[zI]:"fire-fcm-compat",[QI]:"fire-perf",[JI]:"fire-perf-compat",[YI]:"fire-rc",[XI]:"fire-rc-compat",[ZI]:"fire-gcs",[ew]:"fire-gcs-compat",[tw]:"fire-fst",[rw]:"fire-fst-compat",[nw]:"fire-vertex","fire-js":"fire-js",[sw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,aw=new Map,ql=new Map;function Df(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function br(t){const e=t.name;if(ql.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,t);for(const n of Lo.values())Df(n,t);for(const n of aw.values())Df(n,t);return!0}function da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Pi("app","Firebase",lw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=iw;function Og(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=Cg()),!n)throw Jn.create("no-options");const i=Lo.get(s);if(i){if(xo(n,i.options)&&xo(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const o=new gI(s);for(const c of ql.values())o.addComponent(c);const l=new cw(n,r,o);return Lo.set(s,l),l}function Nc(t=jl){const e=Lo.get(t);if(!e&&t===jl&&Cg())return Og();if(!e)throw Jn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=ow[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(l.join(" "));return}br(new er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="firebase-heartbeat-database",hw=1,gi="firebase-heartbeat-store";let pl=null;function Vg(){return pl||(pl=PI(uw,hw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),pl}async function fw(t){try{const n=(await Vg()).transaction(gi),r=await n.objectStore(gi).get(xg(t));return await n.done,r}catch(e){if(e instanceof an)Rn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function Of(t,e){try{const r=(await Vg()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,xg(t)),await r.done}catch(n){if(n instanceof an)Rn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function xg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=1024,pw=30*24*60*60*1e3;class gw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _w(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=pw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vf(),{heartbeatsToSend:r,unsentEntries:s}=mw(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Rn.warn(n),""}}}function Vf(){return new Date().toISOString().substring(0,10)}function mw(t,e=dw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _w{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rI()?sI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xf(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){br(new er("platform-logger",e=>new kI(e),"PRIVATE")),br(new er("heartbeat",e=>new gw(e),"PRIVATE")),en(Bl,kf,t),en(Bl,kf,"esm2017"),en("fire-js","")}yw("");function kc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vw=Lg,Mg=new Pi("auth","Firebase",Lg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Pc("@firebase/auth");function Ew(t,...e){Mo.logLevel<=_e.WARN&&Mo.warn(`Auth (${ps}): ${t}`,...e)}function _o(t,...e){Mo.logLevel<=_e.ERROR&&Mo.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Dc(t,...e)}function tn(t,...e){return Dc(t,...e)}function Fg(t,e,n){const r=Object.assign(Object.assign({},vw()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function Yn(t){return Fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mg.create(t,...e)}function oe(t,e,...n){if(!t)throw Dc(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function bn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Tw(){return Lf()==="http:"||Lf()==="https:"}function Lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tw()||ZT()||"connection"in navigator)?navigator.onLine:!0}function ww(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=JT()||eI()}get(){return Iw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Ni(3e4,6e4);function kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,s={}){return Bg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return XT()||(h.referrerPolicy="no-referrer"),Ug.fetch()(jg(t,t.config.apiHost,n,l),h)})}async function Bg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Aw),e);try{const s=new Sw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw io(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Fg(t,f,h);Kt(t,f)}}catch(s){if(s instanceof an)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function pa(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Oc(t.config,s):`${t.config.apiScheme}://${s}`}function bw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Rw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function Mf(t){return t!==void 0&&t.enterprise!==void 0}class Pw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Cw(t,e){return or(t,"GET","/v2/recaptchaConfig",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function qg(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kw(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=Vc(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(gl(s.auth_time)),issuedAtTime:ni(gl(s.iat)),expirationTime:ni(gl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gl(t){return Number(t)*1e3}function Vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=bg(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ff(t){const e=Vc(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&Dw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Dw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mi(t,qg(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$g(i.providerUserInfo):[],l=xw(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Hl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Vw(t){const e=pt(t);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $g(t){return t.map(e=>{var{providerId:n}=e,r=kc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e){const n=await Bg(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=jg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ug.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mw(t,e){return or(t,"POST","/v2/accounts:revokeToken",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ff(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Ff(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ow(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kw(this,e)}reload(){return Vw(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await mi(this,Nw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:H,isAnonymous:ae,providerData:se,stsTokenManager:R}=n;oe(q&&R,e,"internal-error");const v=Xr.fromJSON(this.name,R);oe(typeof q=="string",e,"internal-error"),Fn(p,e.name),Fn(m,e.name),oe(typeof H=="boolean",e,"internal-error"),oe(typeof ae=="boolean",e,"internal-error"),Fn(y,e.name),Fn(C,e.name),Fn(k,e.name),Fn(x,e.name),Fn(j,e.name),Fn(B,e.name);const _=new vn({uid:q,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:ae,photoURL:C,phoneNumber:y,tenantId:k,stsTokenManager:v,createdAt:j,lastLoginAt:B});return se&&Array.isArray(se)&&(_.providerData=se.map(A=>Object.assign({},A))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xr;s.updateFromServerResponse(n);const i=new vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$g(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Xr;l.updateFromIdToken(r);const c=new vn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;function En(t){bn(t instanceof Function,"Expected a class definition");let e=Uf.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hg.type="NONE";const Bf=Hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(En(Bf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(Bf);const o=yo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=vn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jg(e))return"Blackberry";if(Yg(e))return"Webos";if(Kg(e))return"Safari";if((e.includes("chrome/")||Gg(e))&&!e.includes("edge/"))return"Chrome";if(Qg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wg(t=dt()){return/firefox\//i.test(t)}function Kg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gg(t=dt()){return/crios\//i.test(t)}function zg(t=dt()){return/iemobile/i.test(t)}function Qg(t=dt()){return/android/i.test(t)}function Jg(t=dt()){return/blackberry/i.test(t)}function Yg(t=dt()){return/webos/i.test(t)}function xc(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fw(t=dt()){var e;return xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uw(){return tI()&&document.documentMode===10}function Xg(t=dt()){return xc(t)||Qg(t)||Yg(t)||Jg(t)||/windows phone/i.test(t)||zg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e=[]){let n;switch(t){case"Browser":n=jf(dt());break;case"Worker":n=`${jf(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(t,e={}){return or(t,"GET","/v2/passwordPolicy",kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=6;class $w{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new Bw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qg(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ww()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Yn(this));const n=e?pt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jw(this),n=new $w(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ew(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gs(t){return pt(t)}class qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=cI(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ww(t){ga=t}function em(t){return ga.loadJS(t)}function Kw(){return ga.recaptchaEnterpriseScript}function Gw(){return ga.gapiScript}function zw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qw="recaptcha-enterprise",Jw="NO_RECAPTCHA";class Yw{constructor(e){this.type=Qw,this.auth=gs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Cw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Pw(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Mf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Jw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Mf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Kw();c.length!==0&&(c+=l),em(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function $f(t,e,n,r=!1){const s=new Yw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $f(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $f(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){const n=da(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function Zw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eA(t,e,n){const r=gs(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=tm(e),{host:o,port:l}=tA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),nA()}function tm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tA(t){const e=tm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wf(o)}}}function Wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function rA(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}async function oA(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Lc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,n,"signInWithPassword",sA);case"emailLink":return iA(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,r,"signUpPassword",rA);case"emailLink":return oA(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class Sr extends Lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cA(t){const e=qs($s(t)).link,n=e?qs($s(e)).deep_link_id:null,r=qs($s(t)).deep_link_id;return(r?qs($s(r)).link:null)||r||n||e||t}class Mc{constructor(e){var n,r,s,i,o,l;const c=qs($s(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=lA((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=cA(e);try{return new Mc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return _i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mc.parseLink(n);return oe(r,"argument-error"),_i._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ki{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ki{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ki{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vn._fromIdTokenResponse(e,r,s),o=Kf(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kf(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function rm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function uA(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e,n=!1){const{auth:r}=t;if(_n(r.app))return Promise.reject(Yn(r));const s="reauthenticate";try{const i=await mi(t,rm(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Vc(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e,n=!1){if(_n(t.app))return Promise.reject(Yn(t));const r="signIn",s=await rm(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fA(t,e){return sm(gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pA(t,e,n){return _n(t.app)?Promise.reject(Yn(t)):fA(pt(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dA(t),r})}function gA(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function mA(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}const Bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=1e3,yA=10;class om extends im{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Uw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}om.type="LOCAL";const vA=om;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends im{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}am.type="SESSION";const lm=am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await EA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Fc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function IA(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function wA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RA(){return cm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firebaseLocalStorageDb",bA=1,jo="firebaseLocalStorage",hm="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function SA(){const t=indexedDB.deleteDatabase(um);return new Di(t).toPromise()}function Wl(){const t=indexedDB.open(um,bA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:hm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await SA(),e(await Wl()))})})}async function Gf(t,e,n){const r=_a(t,!0).put({[hm]:e,value:n});return new Di(r).toPromise()}async function PA(t,e){const n=_a(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function zf(t,e){const n=_a(t,!0).delete(e);return new Di(n).toPromise()}const CA=800,NA=3;class fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(RA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wA(),!this.activeServiceWorker)return;this.sender=new TA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wl();return await Gf(e,Bo,"1"),await zf(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_a(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fm.type="LOCAL";const kA=fm;new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t,e){return e?En(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Lc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OA(t){return sm(t.auth,new Uc(t),t.bypassAuthState)}function VA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),hA(n,new Uc(t),t.bypassAuthState)}async function xA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),uA(n,new Uc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OA;case"linkViaPopup":case"linkViaRedirect":return xA;case"reauthViaPopup":case"reauthViaRedirect":return VA;default:Kt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new Ni(2e3,1e4);class Kr extends dm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LA.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="pendingRedirect",vo=new Map;class FA extends dm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await UA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UA(t,e){const n=qA(e),r=jA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function BA(t,e){vo.set(t._key(),e)}function jA(t){return En(t._redirectPersistence)}function qA(t){return yo(MA,t.config.apiKey,t.name)}async function $A(t,e,n=!1){if(_n(t.app))return Promise.reject(Yn(t));const r=gs(t),s=DA(r,e),o=await new FA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=10*60*1e3;class WA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QA=/^https?/;async function JA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GA(t);for(const n of e)try{if(YA(n))return}catch{}Kt(t,"unauthorized-domain")}function YA(t){const e=$l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QA.test(n))return!1;if(zA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Ni(3e4,6e4);function Jf(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZA(t){return new Promise((e,n)=>{var r,s,i;function o(){Jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jf(),n(tn(t,"network-request-failed"))},timeout:XA.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const l=zw("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},em(`${Gw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function eR(t){return Eo=Eo||ZA(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new Ni(5e3,15e3),nR="__/auth/iframe",rR="emulator/auth/iframe",sR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oR(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oc(e,rR):`https://${t.config.authDomain}/${nR}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=iR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function aR(t){const e=await eR(t),n=nn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:oR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{i(o)},tR.get());function c(){nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,uR=600,hR="_blank",fR="http://localhost";class Yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(t,e,n,r=cR,s=uR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},lR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=dt().toLowerCase();n&&(l=Gg(h)?hR:n),Wg(h)&&(e=e||fR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[y,C])=>`${m}${y}=${C},`,"");if(Fw(h)&&l!=="_self")return pR(e||"",l),new Yf(null);const p=window.open(e||"",l,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Yf(p)}function pR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="__/auth/handler",mR="emulator/auth/handler",_R=encodeURIComponent("fac");async function Xf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ki){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${_R}=${encodeURIComponent(c)}`:"";return`${yR(t)}?${Ci(l).slice(1)}${h}`}function yR({config:t}){return t.emulator?Oc(t,mR):`https://${t.authDomain}/${gR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="webStorageSupport";class vR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lm,this._completeRedirectFn=$A,this._overrideRedirectResult=BA}async _openPopup(e,n,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xf(e,n,r,$l(),s);return dR(e,o,Fc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xf(e,n,r,$l(),s);return IA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aR(e),r=new WA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ml,{type:ml},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ml];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xg()||Kg()||xc()}}const ER=vR;var Zf="@firebase/auth",ed="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wR(t){br(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zg(t)},h=new Hw(r,s,i,c);return Zw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),br(new er("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(r=>new TR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Zf,ed,IR(t)),en(Zf,ed,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=5*60,RR=Ng("authIdTokenMaxAge")||AR;let td=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const s=n==null?void 0:n.token;td!==s&&(td=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function SR(t=Nc()){const e=da(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xw(t,{popupRedirectResolver:ER,persistence:[kA,vA,lm]}),r=Ng("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bR(i.toString());mA(n,o,()=>o(n.currentUser)),gA(n,l=>o(l))}}const s=Sg("auth");return s&&eA(n,`http://${s}`),n}function PR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ww({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",PR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wR("Browser");var CR="firebase",NR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(CR,NR,"app");var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function _(){}_.prototype=v.prototype,R.D=v.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(A,b,I){for(var T=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)T[Se-2]=arguments[Se];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,_){_||(_=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(b=0;16>b;++b)A[b]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=R.g[0],_=R.g[1],b=R.g[2];var I=R.g[3],T=v+(I^_&(b^I))+A[0]+3614090360&4294967295;v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[1]+3905402710&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[2]+606105819&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(I^_&(b^I))+A[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[5]+1200080426&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[6]+2821735955&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(I^_&(b^I))+A[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[9]+2336552879&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[10]+4294925233&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(I^_&(b^I))+A[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[13]+4254626195&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[14]+2792965006&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(b^I&(_^b))+A[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[6]+3225465664&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[11]+643717713&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^I&(_^b))+A[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[10]+38016083&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[15]+3634488961&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^I&(_^b))+A[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[14]+3275163606&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[3]+4107603335&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^I&(_^b))+A[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[2]+4243563512&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[7]+1735328473&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(_^b^I)+A[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[8]+2272392833&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[11]+1839030562&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^I)+A[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[4]+1272893353&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[7]+4139469664&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^I)+A[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[0]+3936430074&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[3]+3572445317&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^I)+A[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[12]+3873151461&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[15]+530742520&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(b^(_|~I))+A[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[7]+1126891415&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[14]+2878612391&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~I))+A[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[3]+2399980690&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[10]+4293915773&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~I))+A[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[15]+4264355552&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[6]+2734768916&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~I))+A[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[11]+3174756917&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[2]+718787259&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+I&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var _=v-this.blockSize,A=this.B,b=this.h,I=0;I<v;){if(b==0)for(;I<=_;)s(this,R,I),I+=this.blockSize;if(typeof R=="string"){for(;I<v;)if(A[b++]=R.charCodeAt(I++),b==this.blockSize){s(this,A),b=0;break}}else for(;I<v;)if(A[b++]=R[I++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var _=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=_&255,_/=256;for(this.u(R),R=Array(16),v=_=0;4>v;++v)for(var A=0;32>A;A+=8)R[_++]=this.g[v]>>>A&255;return R};function i(R,v){var _=l;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=v(R)}function o(R,v){this.h=v;for(var _=[],A=!0,b=R.length-1;0<=b;b--){var I=R[b]|0;A&&I==v||(_[b]=I,A=!1)}this.g=_}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return x(h(-R));for(var v=[],_=1,A=0;R>=_;A++)v[A]=R/_|0,_*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return x(f(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(v,8)),A=p,b=0;b<R.length;b+=8){var I=Math.min(8,R.length-b),T=parseInt(R.substring(b,b+I),v);8>I?(I=h(Math.pow(v,I)),A=A.j(I).add(h(T))):(A=A.j(_),A=A.add(h(T)))}return A}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var R=0,v=1,_=0;_<this.g.length;_++){var A=this.i(_);R+=(0<=A?A:4294967296+A)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(k(this))return"-"+x(this).toString(R);for(var v=h(Math.pow(R,6)),_=this,A="";;){var b=H(_,v).g;_=j(_,b.j(v));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=b,C(_))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=j(this,R),k(R)?-1:C(R)?0:1};function x(R){for(var v=R.g.length,_=[],A=0;A<v;A++)_[A]=~R.g[A];return new o(_,~R.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0,b=0;b<=v;b++){var I=A+(this.i(b)&65535)+(R.i(b)&65535),T=(I>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);A=T>>>16,I&=65535,T&=65535,_[b]=T<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function j(R,v){return R.add(x(v))}t.j=function(R){if(C(this)||C(R))return p;if(k(this))return k(R)?x(this).j(x(R)):x(x(this).j(R));if(k(R))return x(this.j(x(R)));if(0>this.l(y)&&0>R.l(y))return h(this.m()*R.m());for(var v=this.g.length+R.g.length,_=[],A=0;A<2*v;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<R.g.length;b++){var I=this.i(A)>>>16,T=this.i(A)&65535,Se=R.i(b)>>>16,He=R.i(b)&65535;_[2*A+2*b]+=T*He,B(_,2*A+2*b),_[2*A+2*b+1]+=I*He,B(_,2*A+2*b+1),_[2*A+2*b+1]+=T*Se,B(_,2*A+2*b+1),_[2*A+2*b+2]+=I*Se,B(_,2*A+2*b+2)}for(A=0;A<v;A++)_[A]=_[2*A+1]<<16|_[2*A];for(A=v;A<2*v;A++)_[A]=0;return new o(_,0)};function B(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function q(R,v){this.g=R,this.h=v}function H(R,v){if(C(v))throw Error("division by zero");if(C(R))return new q(p,p);if(k(R))return v=H(x(R),v),new q(x(v.g),x(v.h));if(k(v))return v=H(R,x(v)),new q(x(v.g),v.h);if(30<R.g.length){if(k(R)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,A=v;0>=A.l(R);)_=ae(_),A=ae(A);var b=se(_,1),I=se(A,1);for(A=se(A,2),_=se(_,2);!C(A);){var T=I.add(A);0>=T.l(R)&&(b=b.add(_),I=T),A=se(A,1),_=se(_,1)}return v=j(R,b.j(v)),new q(b,v)}for(b=p;0<=R.l(v);){for(_=Math.max(1,Math.floor(R.m()/v.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=h(_),T=I.j(v);k(T)||0<T.l(R);)_-=A,I=h(_),T=I.j(v);C(I)&&(I=m),b=b.add(I),R=j(R,T)}return new q(b,R)}t.A=function(R){return H(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)&R.i(A);return new o(_,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)|R.i(A);return new o(_,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)^R.i(A);return new o(_,this.h^R.h)};function ae(R){for(var v=R.g.length+1,_=[],A=0;A<v;A++)_[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(_,R.h)}function se(R,v){var _=v>>5;v%=32;for(var A=R.g.length-_,b=[],I=0;I<A;I++)b[I]=0<v?R.i(I+_)>>>v|R.i(I+_+1)<<32-v:R.i(I+_);return new o(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Rr=o}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mm,Hs,_m,To,Kl,ym,vm,Em;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var N=d++;return{value:u(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,N){for(var K=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)K[Pe-2]=arguments[Pe];return u.prototype[P].apply(g,K)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function x(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const P=a.length||0,N=g.length||0;a.length=P+N;for(let K=0;K<N;K++)a[P+K]=g[K]}else a.push(g)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ae=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function se(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function R(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function I(a){l.setTimeout(()=>{throw a},0)}function T(){var a=wt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,d){const g=He.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var He=new j(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,wt=new Se,Mt=()=>{const a=l.Promise.resolve(void 0);ye=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){I(d)}var u=He;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function At(a,u){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ae){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&At.aa.h.call(this)}}C(At,Le);var Et={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,u,d,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,g,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=w(a,u,g,P);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new z(u,this.src,N,!!g,P),u.fa=d,a.push(u)),u};function E(a,u){var d=u.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,u,void 0),N;(N=0<=P)&&Array.prototype.splice.call(g,P,1),N&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,u,d,g){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==g)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),O={};function M(a,u,d,g,P){if(Array.isArray(u)){for(var N=0;N<u.length;N++)M(a,u[N],d,g,P);return null}return d=ie(d),a&&a[D]?a.K(u,d,h(g)?!!g.capture:!1,P):V(a,u,d,!1,g,P)}function V(a,u,d,g,P,N){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[S]=Pe=new pe(a)),d=Pe.add(u,d,g,K,N),d.proxy)return d;if(g=G(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)kn||(P=K),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(F(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function W(a,u,d,g,P){if(Array.isArray(u))for(var N=0;N<u.length;N++)W(a,u[N],d,g,P);else g=h(g)?!!g.capture:!!g,d=ie(d),a&&a[D]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],d=w(N,d,g,P),-1<d&&(Z(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=w(u,d,g,P)),(d=-1<a?u[a]:null)&&$(d))}function $(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[D])E(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(F(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(E(d,a),d.h==0&&(d.src=null,u[S]=null)):Z(a)}}}function F(a){return a in O?O[a]:O[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new At(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&$(a),a=d.call(g,u)}return a}function Q(a){return a=a[S],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){xe.call(this),this.i=new pe(this),this.M=this,this.F=null}C(re,xe),re.prototype[D]=!0,re.prototype.removeEventListener=function(a,u,d,g){W(this,a,u,d,g)};function de(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Le(u,a);else if(u instanceof Le)u.target=u.target||a;else{var P=u;u=new Le(g,a),A(u,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var K=u.g=d[N];P=ve(K,g,!0,u)&&P}if(K=u.g=a,P=ve(K,g,!0,u)&&P,P=ve(K,g,!1,u)&&P,d)for(N=0;N<d.length;N++)K=u.g=d[N],P=ve(K,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)Z(d[g]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},re.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function ve(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,N=0;N<u.length;++N){var K=u[N];if(K&&!K.da&&K.capture==d){var Pe=K.listener,Ze=K.ha||K.src;K.fa&&E(a.i,K),P=Pe.call(Ze,g)!==!1&&P}}return P&&!g.defaultPrevented}function Je(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=Je(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class kt extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){xe.call(this),this.h=a,this.g={}}C(st,xe);var Dn=[];function ws(a){se(a.g,function(u,d){this.g.hasOwnProperty(d)&&$(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),ws(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Dt=l.JSON.parse,Ui=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Vr(){}Vr.prototype.h=null;function Su(a){return a.h||(a.h=a.i())}function Pu(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){Le.call(this,"d")}C(Da,Le);function Oa(){Le.call(this,"c")}C(Oa,Le);var lr={},Cu=null;function Bi(){return Cu=Cu||new re}lr.La="serverreachability";function Nu(a){Le.call(this,lr.La,a)}C(Nu,Le);function Rs(a){const u=Bi();de(u,new Nu(u))}lr.STAT_EVENT="statevent";function ku(a,u){Le.call(this,lr.STAT_EVENT,a),this.stat=u}C(ku,Le);function gt(a){const u=Bi();de(u,new ku(u,a))}lr.Ma="timingevent";function Du(a,u){Le.call(this,lr.Ma,a),this.size=u}C(Du,Le);function bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ss(){this.g=!0}Ss.prototype.xa=function(){this.g=!1};function B_(a,u,d,g,P,N){a.info(function(){if(a.g)if(N)for(var K="",Pe=N.split("&"),Ze=0;Ze<Pe.length;Ze++){var Te=Pe[Ze].split("=");if(1<Te.length){var it=Te[0];Te=Te[1];var ot=it.split("_");K=2<=ot.length&&ot[1]=="type"?K+(it+"="+Te+"&"):K+(it+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+K})}function j_(a,u,d,g,P,N,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+N+" "+K})}function xr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+$_(a,d)+(g?" "+g:"")})}function q_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ss.prototype.info=function(){};function $_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Xe(d)}catch{return u}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function qi(){}C(qi,Vr),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},Va=new qi;function On(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var xu={},xa={};function La(a,u,d){a.L=1,a.v=Ki(ln(u)),a.m=d,a.P=!0,Lu(a,null)}function Lu(a,u){a.F=Date.now(),$i(a),a.A=ln(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Ju(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Vu,a.g=ph(a.j,d?u:null,!a.m),0<a.O&&(a.M=new kt(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Dn[0]=P.toString()),P=Dn);for(var N=0;N<P.length;N++){var K=M(d,P[N],g||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Rs(),B_(a.i,a.u,a.A,a.l,a.R,a.m)}On.prototype.ca=function(a){a=a.target;const u=this.M;u&&cn(a)==3?u.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const ot=cn(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||rh(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Fr?Rs(3):Rs(2)),Ma(this);var d=this.g.Z();this.X=d;t:if(Mu(this)){var g=rh(this.g);a="";var P=g.length,N=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),Ps(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(N&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,j_(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ze=this.g;if((Pe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Pe)){var Te=Pe;break t}}Te=null}if(d=Te)xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,d);else{this.o=!1,this.s=3,gt(12),cr(this),Ps(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<K.length;)if(Ft=H_(this,K),Ft==xa){ot==4&&(this.s=4,gt(14),d=!1),xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==xu){this.s=4,gt(15),xr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else xr(this.i,this.l,Ft,null),Fa(this,Ft);if(Mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||K.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)xr(this.i,this.l,K,"[Invalid Chunked Response]"),cr(this),Ps(this);else if(0<K.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Ha(it),it.M=!0,gt(11))}}else xr(this.i,this.l,K,null),Fa(this,K);ot==4&&cr(this),this.o&&!this.J&&(ot==4?uh(this.j,this):(this.o=!1,$i(this)))}else ay(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),cr(this),Ps(this)}}}catch{}finally{}};function Mu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function H_(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?xa:(d=Number(u.substring(d,g)),isNaN(d)?xu:(g+=1,g+d>u.length?xa:(u=u.slice(g,g+d),a.C=g+d,u)))}On.prototype.cancel=function(){this.J=!0,cr(this)};function $i(a){a.S=Date.now()+a.I,Fu(a,a.I)}function Fu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=bs(m(a.ba,a),u)}function Ma(a){a.B&&(l.clearTimeout(a.B),a.B=null)}On.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(q_(this.i,this.A),this.L!=2&&(Rs(),gt(17)),cr(this),this.s=2,Ps(this)):Fu(this,this.S-a)};function Ps(a){a.j.G==0||a.J||uh(a.j,a)}function cr(a){Ma(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,ws(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Fa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ua(d.h,a))){if(!a.K&&Ua(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xi(d),Ji(d);else break e;$a(d),gt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=bs(m(d.Za,d),6e3));if(1>=ju(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hr(d,11)}else if((a.K||d.g==a)&&Xi(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const it=Te[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const ot=Te[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const Fr=Te[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(g=1.5*Fr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ft=a.g;if(Ft){const eo=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var N=g.h;N.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ba(N,N.h),N.h=null))}if(g.D){const Wa=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Wa&&(g.ya=Wa,De(g.I,g.D,Wa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var K=a;if(g.qa=dh(g,g.J?g.ia:null,g.W),K.K){qu(g.h,K);var Pe=K,Ze=g.L;Ze&&(Pe.I=Ze),Pe.B&&(Ma(Pe),$i(Pe)),g.g=K}else lh(g);0<d.i.length&&Yi(d)}else Te[0]!="stop"&&Te[0]!="close"||hr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?hr(d,7):qa(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Rs(4)}catch{}}var W_=class{constructor(a,u){this.g=a,this.map=u}};function Uu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ju(a){return a.h?1:a.g?a.g.size:0}function Ua(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ba(a,u){a.g?a.g.add(u):a.h=u}function qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Uu.prototype.cancel=function(){if(this.i=$u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $u(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function K_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function G_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Hu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=G_(a),g=K_(a),P=g.length,N=0;N<P;N++)u.call(void 0,g[N],d&&d[N],a)}var Wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var N=a[d].substring(0,g);P=a[d].substring(g+1)}else N=a[d];u(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ur){this.h=a.h,Hi(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.s),this.l=a.l;var u=a.i,d=new ks;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ku(this,d),this.m=a.m}else a&&(u=String(a).match(Wu))?(this.h=!1,Hi(this,u[1]||"",!0),this.o=Cs(u[2]||""),this.g=Cs(u[3]||"",!0),Wi(this,u[4]),this.l=Cs(u[5]||"",!0),Ku(this,u[6]||"",!0),this.m=Cs(u[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}ur.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ns(u,Gu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ns(u,Gu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?Y_:J_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,Z_)),a.join("")};function ln(a){return new ur(a)}function Hi(a,u,d){a.j=d?Cs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ku(a,u,d){u instanceof ks?(a.i=u,ey(a.i,a.h)):(d||(u=Ns(u,X_)),a.i=new ks(u,a.h))}function De(a,u,d){a.i.set(u,d)}function Ki(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Cs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Q_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Q_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gu=/[#\/\?@]/g,J_=/[#\?:]/g,Y_=/[#\?]/g,X_=/[#\?@]/g,Z_=/#/g;function ks(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&z_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(a,u){Vn(this),this.i=null,a=Lr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function zu(a,u){Vn(a),u=Lr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Qu(a,u){return Vn(a),u=Lr(a,u),a.g.has(u)}t.forEach=function(a,u){Vn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=a[g];for(let N=0;N<P.length;N++)d.push(u[g])}return d},t.V=function(a){Vn(this);let u=[];if(typeof a=="string")Qu(this,a)&&(u=u.concat(this.g.get(Lr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Vn(this),this.i=null,a=Lr(this,a),Qu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ju(a,u,d){zu(a,u),0<d.length&&(a.i=null,a.g.set(Lr(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const N=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var P=N;K[g]!==""&&(P+="="+encodeURIComponent(String(K[g]))),a.push(P)}}return this.i=a.join("&")};function Lr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ey(a,u){u&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(zu(this,g),Ju(this,P,d))},a)),a.j=u}function ty(a,u){const d=new Ss;if(l.Image){const g=new Image;g.onload=y(xn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=y(xn,d,"TestLoadImage: error",!1,u,g),g.onabort=y(xn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=y(xn,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function ny(a,u){const d=new Ss,g=new AbortController,P=setTimeout(()=>{g.abort(),xn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?xn(d,"TestPingServer: ok",!0,u):xn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),xn(d,"TestPingServer: error",!1,u)})}function xn(a,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function ry(){this.g=new Ui}function sy(a,u,d){const g=d||"";try{Hu(a,function(P,N){let K=P;h(P)&&(K=Xe(P)),u.push(g+N+"="+encodeURIComponent(K))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Gi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Gi,Vr),Gi.prototype.g=function(){return new zi(this.l,this.j)},Gi.prototype.i=function(a){return function(){return a}}({});function zi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zi,re),t=zi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ds(this):Os(this),this.readyState==3&&Yu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ds(this))},t.Qa=function(a){this.g&&(this.response=a,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Os(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xu(a){let u="";return se(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function ja(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Xu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,u,d))}function Fe(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Fe,re);var iy=/^https?$/i,oy=["POST","PUT"];t=Fe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?Su(this.o):Su(Va),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){Zu(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(oy,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of d)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Zu(this,N)}};function Zu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,eh(a),Qi(a)}function eh(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?th(this):this.bb())},t.bb=function(){th(this)};function th(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cn(a)!=4||a.Z()!=2)){if(a.u&&cn(a)==4)Je(a.Ea,0,a);else if(de(a,"readystatechange"),cn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=K===0){var P=String(a.D).match(Wu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!iy.test(P?P.toLowerCase():"")}d=g}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var N=2<cn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",eh(a)}}finally{Qi(a)}}}}function Qi(a,u){if(a.g){nh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=g}catch{}}}function nh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Dt(u)}};function rh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ay(a){const u={};a=(a.g&&2<=cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var d=b(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[P]||[];u[P]=N,N.push(d)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function sh(a){this.Aa=0,this.i=[],this.j=new Ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,a),this.cb=Vs("retryDelaySeedMs",1e4,a),this.Wa=Vs("forwardChannelMaxRetries",2,a),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Uu(a&&a.concurrentRequestLimit),this.Da=new ry,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){gt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=dh(this,null,this.W),Yi(this)};function qa(a){if(ih(a),a.G==3){var u=a.U++,d=ln(a.I);if(De(d,"SID",a.K),De(d,"RID",u),De(d,"TYPE","terminate"),xs(a,d),u=new On(a,a.j,u),u.L=2,u.v=Ki(ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ph(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$i(u)}fh(a)}function Ji(a){a.g&&(Ha(a),a.g.cancel(),a.g=null)}function ih(a){Ji(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Yi(a){if(!Bu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Mt(),ge||(ye(),ge=!0),wt.add(u,a),a.B=0}}function ly(a,u){return ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=bs(m(a.Ga,a,u),hh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new On(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ah(this,P,u),d=ln(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),xs(this,d),N&&(this.O?u="headers="+encodeURIComponent(String(Xu(N)))+"&"+u:this.m&&ja(d,this.m,N)),Ba(this.h,P),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),P.T=!0,La(P,d,null)):La(P,d,u),this.G=2}}else this.G==3&&(a?oh(this,a):this.i.length==0||Bu(this.h)||oh(this))};function oh(a,u){var d;u?d=u.l:d=a.U++;const g=ln(a.I);De(g,"SID",a.K),De(g,"RID",d),De(g,"AID",a.T),xs(a,g),a.m&&a.o&&ja(g,a.m,a.o),d=new On(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ah(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ba(a.h,d),La(d,g,u)}function xs(a,u){a.H&&se(a.H,function(d,g){De(u,g,d)}),a.l&&Hu({},function(d,g){De(u,g,d)})}function ah(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const K=["count="+d];N==-1?0<d?(N=P[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Pe=!0;for(let Ze=0;Ze<d;Ze++){let Te=P[Ze].g;const it=P[Ze].map;if(Te-=N,0>Te)N=Math.max(0,P[Ze].g-100),Pe=!1;else try{sy(it,K,"req"+Te+"_")}catch{g&&g(it)}}if(Pe){g=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function lh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Mt(),ge||(ye(),ge=!0),wt.add(u,a),a.v=0}}function $a(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=bs(m(a.Fa,a),hh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ch(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ji(this),ch(this))};function Ha(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ch(a){a.g=new On(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);De(u,"RID","rpc"),De(u,"SID",a.K),De(u,"AID",a.T),De(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(u,"TO",a.ja),De(u,"TYPE","xmlhttp"),xs(a,u),a.m&&a.o&&ja(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ki(ln(u)),d.m=null,d.P=!0,Lu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ji(this),$a(this),gt(19))};function Xi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function uh(a,u){var d=null;if(a.g==u){Xi(a),Ha(a),a.g=null;var g=2}else if(Ua(a.h,u))d=u.D,qu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=Bi(),de(g,new Du(g,d)),Yi(a)}else lh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&ly(a,u)||g==2&&$a(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:hr(a,5);break;case 4:hr(a,10);break;case 3:hr(a,6);break;default:hr(a,2)}}}function hh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function hr(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new ur(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Hi(g,"https"),Ki(g),P?ty(g.toString(),d):ny(g.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(u),fh(a),ih(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function fh(a){if(a.G=0,a.ka=[],a.l){const u=$u(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function dh(a,u,d){var g=d instanceof ur?ln(d):new ur(d);if(g.g!="")u&&(g.g=u+"."+g.g),Wi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var N=new ur(null);g&&Hi(N,g),u&&(N.g=u),P&&Wi(N,P),d&&(N.l=d),g=N}return d=a.D,u=a.ya,d&&u&&De(g,d,u),De(g,"VER",a.la),xs(a,g),g}function ph(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Fe(new Gi({eb:d})):new Fe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gh(){}t=gh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){re.call(this),this.g=new sh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Mr(this)}C(Rt,re),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){qa(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Xe(a),a=d);u.i.push(new W_(u.Ya++,a)),u.G==3&&Yi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,qa(this.g),delete this.g,Rt.aa.N.call(this)};function mh(a){Da.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(mh,Da);function _h(){Oa.call(this),this.status=1}C(_h,Oa);function Mr(a){this.g=a}C(Mr,gh),Mr.prototype.ua=function(){de(this.g,"a")},Mr.prototype.ta=function(a){de(this.g,new mh(a))},Mr.prototype.sa=function(a){de(this.g,new _h)},Mr.prototype.ra=function(){de(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Em=function(){return new Zi},vm=function(){return Bi()},ym=lr,Kl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,To=ji,Ou.COMPLETE="complete",_m=Ou,Pu.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",re.prototype.listen=re.prototype.K,Hs=Pu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,mm=Fe}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const rd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Pc("@firebase/firestore");function Us(){return Pr.logLevel}function X(t,...e){if(Pr.logLevel<=_e.DEBUG){const n=e.map(Bc);Pr.debug(`Firestore (${_s}): ${t}`,...n)}}function Sn(t,...e){if(Pr.logLevel<=_e.ERROR){const n=e.map(Bc);Pr.error(`Firestore (${_s}): ${t}`,...n)}}function as(t,...e){if(Pr.logLevel<=_e.WARN){const n=e.map(Bc);Pr.warn(`Firestore (${_s}): ${t}`,...n)}}function Bc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function be(t,e){t||ce()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class DR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new Tm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new lt(e)}}class VR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new VR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new LR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=FR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ge(0,0))}static max(){return new ue(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends yi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends yi{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Oe.fromString(e))}static fromName(e){return new te(Oe.fromString(e).popFirst(5))}static empty(){return new te(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Oe(e.slice()))}}function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new tr(s,te.empty(),e)}function jR(t){return new tr(t.readTime,t.key,-1)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(ue.min(),te.empty(),-1)}static max(){return new tr(ue.max(),te.empty(),-1)}}function qR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==$R)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function WR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jc.oe=-1;function ya(t){return t==null}function qo(t){return t===0&&1/t==-1/0}function KR(t){return typeof t=="number"&&Number.isInteger(t)&&!qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new id(this.data.getIterator())}getIteratorFrom(e){return new id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new nt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Am("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const GR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(be(!!t),typeof t=="string"){let e=0;const n=GR.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $c(t){const e=t.mapValue.fields.__previous_value__;return qc(e)?$c(e):e}function vi(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={mapValue:{}};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qc(t)?4:JR(t)?9007199254740991:QR(t)?10:11:ce()}function on(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=nr(s.timestampValue),l=nr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Cr(s.bytesValue).isEqual(Cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?qo(o)===qo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(sd(o)!==sd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!on(o[c],l[c])))return!1;return!0}(t,e);default:return ce()}}function Ti(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),c=je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return od(t.timestampValue,e.timestampValue);case 4:return od(vi(t),vi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Cr(i),c=Cr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ie(l[h],c[h]);if(f!==0)return f}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(je(i.latitude),je(o.latitude));return l!==0?l:Ie(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ad(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},m=o.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=Ie(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ad(y,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===lo.mapValue&&o===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(o===lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ie(c[p],f[p]);if(m!==0)return m;const y=cs(l[c[p]],h[f[p]]);if(y!==0)return y}return Ie(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ce()}}function od(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=nr(t),r=nr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function ad(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=cs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function us(t){return Gl(t)}function Gl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gl(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function ld(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zl(t){return!!t&&"integerValue"in t}function Hc(t){return!!t&&"arrayValue"in t}function cd(t){return!!t&&"nullValue"in t}function ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function QR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ri(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ri(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ri(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(ri(this.value))}}function Rm(t){const e=[];return ys(t.fields,(n,r)=>{const s=new tt([n]);if(Io(r)){const i=Rm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ue.min(),ue.min(),ue.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ue.min(),ue.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ue.min(),ue.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function hd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function YR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{}class $e extends bm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZR(e,n,r):n==="array-contains"?new n0(e,r):n==="in"?new r0(e,r):n==="not-in"?new s0(e,r):n==="array-contains-any"?new i0(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e0(e,r):new t0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends bm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Gt(e,n)}matches(e){return Sm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sm(t){return t.op==="and"}function Pm(t){return XR(t)&&Sm(t)}function XR(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function Ql(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+us(t.value);if(Pm(t))return t.filters.map(e=>Ql(e)).join(",");{const e=t.filters.map(n=>Ql(n)).join(",");return`${t.op}(${e})`}}function Cm(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Cm(o,s.filters[l]),!0):!1}(t,e):void ce()}function Nm(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(Nm).join(" ,")+"}"}(t):"Filter"}class ZR extends $e{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class e0 extends $e{constructor(e,n){super(e,"in",n),this.keys=km("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t0 extends $e{constructor(e,n){super(e,"not-in",n),this.keys=km("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function km(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class n0 extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hc(n)&&Ti(n.arrayValue,this.value)}}class r0 extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class s0 extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class i0 extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function dd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new o0(t,e,n,r,s,i,o)}function Wc(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ql(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.ue=n}return e.ue}function Kc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fd(t.startAt,e.startAt)&&fd(t.endAt,e.endAt)}function Jl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a0(t,e,n,r,s,i,o,l){return new vs(t,e,n,r,s,i,o,l)}function Gc(t){return new vs(t)}function pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dm(t){return t.collectionGroup!==null}function si(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ii(i,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Ii(tt.keyField(),r))}return e.ce}function rn(t){const e=fe(t);return e.le||(e.le=l0(e,si(t))),e.le}function l0(t,e){if(t.limitType==="F")return dd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return dd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yl(t,e){const n=t.filters.concat([e]);return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ho(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function va(t,e){return Kc(rn(t),rn(e))&&t.limitType===e.limitType}function Om(t){return`${Wc(rn(t))}|lt:${t.limitType}`}function $r(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Nm(s)).join(", ")}]`),ya(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>us(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>us(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of si(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=hd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,si(r),s)||r.endAt&&!function(o,l,c){const h=hd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,si(r),s))}(t,e)}function c0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vm(t){return(e,n)=>{let r=!1;for(const s of si(t)){const i=u0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function u0(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?cs(c,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new Me(te.comparator);function Pn(){return h0}const xm=new Me(te.comparator);function Ws(...t){let e=xm;for(const n of t)e=e.insert(n.key,n);return e}function Lm(t){let e=xm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return ii()}function Mm(){return ii()}function ii(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const f0=new Me(te.comparator),d0=new nt(te.comparator);function me(...t){let e=d0;for(const n of t)e=e.add(n);return e}const p0=new nt(Ie);function g0(){return p0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(e)?"-0":e}}function Fm(t){return{integerValue:""+t}}function m0(t,e){return KR(e)?Fm(e):zc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this._=void 0}}function _0(t,e,n){return t instanceof wi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qc(i)&&(i=$c(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ai?Bm(t,e):t instanceof Ri?jm(t,e):function(s,i){const o=Um(s,i),l=gd(o)+gd(s.Pe);return zl(o)&&zl(s.Pe)?Fm(l):zc(s.serializer,l)}(t,e)}function y0(t,e,n){return t instanceof Ai?Bm(t,e):t instanceof Ri?jm(t,e):n}function Um(t,e){return t instanceof Wo?function(r){return zl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wi extends Ta{}class Ai extends Ta{constructor(e){super(),this.elements=e}}function Bm(t,e){const n=qm(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ri extends Ta{constructor(e){super(),this.elements=e}}function jm(t,e){let n=qm(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class Wo extends Ta{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gd(t){return je(t.integerValue||t.doubleValue)}function qm(t){return Hc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.field=e,this.transform=n}}function E0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ai&&s instanceof Ai||r instanceof Ri&&s instanceof Ri?ls(r.elements,s.elements,on):r instanceof Wo&&s instanceof Wo?on(r.Pe,s.Pe):r instanceof wi&&s instanceof wi}(t.transform,e.transform)}class T0{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ia{}function $m(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qc(t.key,qt.none()):new xi(t.key,t.data,qt.none());{const n=t.data,r=Vt.empty();let s=new nt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new Bt(s.toArray()),qt.none())}}function I0(t,e,n){t instanceof xi?function(s,i,o){const l=s.value.clone(),c=_d(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=_d(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Hm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oi(t,e,n,r){return t instanceof xi?function(i,o,l,c){if(!wo(i.precondition,o))return l;const h=i.value.clone(),f=yd(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,o,l,c){if(!wo(i.precondition,o))return l;const h=yd(i.fieldTransforms,c,o),f=o.data;return f.setAll(Hm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function w0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Um(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,(i,o)=>E0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xi extends Ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends Ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _d(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,y0(o,l,n[s]))}return r}function yd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_0(i,o,e))}return r}class Qc extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class A0 extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&I0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=$m(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>md(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>md(n,r))}}class Jc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return f0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,Ee;function P0(t){switch(t){default:return ce();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Wm(t){if(t===void 0)return Sn("GRPC error has no .code"),L.UNKNOWN;switch(t){case qe.OK:return L.OK;case qe.CANCELLED:return L.CANCELLED;case qe.UNKNOWN:return L.UNKNOWN;case qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case qe.INTERNAL:return L.INTERNAL;case qe.UNAVAILABLE:return L.UNAVAILABLE;case qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case qe.NOT_FOUND:return L.NOT_FOUND;case qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case qe.ABORTED:return L.ABORTED;case qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case qe.DATA_LOSS:return L.DATA_LOSS;default:return ce()}}(Ee=qe||(qe={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Rr([4294967295,4294967295],0);function vd(t){const e=C0().encode(t),n=new gm;return n.update(e),new Uint8Array(n.digest())}function Ed(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class Yc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Rr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(N0)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vd(e),[r,s]=Ed(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vd(e),[r,s]=Ed(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Li.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(ue.min(),s,new Me(Ie),Pn(),me())}}class Li{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Li(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Km{constructor(e,n){this.targetId=e,this.me=n}}class Gm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Td{constructor(){this.fe=0,this.ge=wd(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Li(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=wd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class k0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=Id(),this.Qe=new Me(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Jl(i))if(r===0){const o=new te(i.path);this.Ue(n,o,ut.newNoDocument(o,ue.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Cr(r).toUint8Array()}catch(c){if(c instanceof Am)return as("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Yc(o,s,i)}catch(c){return as(c instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Jl(l.target)){const c=new te(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ut.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=Id(),this.Qe=new Me(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Td,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Td),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Id(){return new Me(te.comparator)}function wd(){return new Me(te.comparator)}const D0={asc:"ASCENDING",desc:"DESCENDING"},O0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V0={and:"AND",or:"OR"};class x0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xl(t,e){return t.useProto3Json||ya(e)?e:{value:e}}function Ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function L0(t,e){return Ko(t,e.toTimestamp())}function sn(t){return be(!!t),ue.fromTimestamp(function(n){const r=nr(n);return new Ge(r.seconds,r.nanos)}(t))}function Xc(t,e){return Zl(t,e).canonicalString()}function Zl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qm(t){const e=Oe.fromString(t);return be(e_(e)),e}function ec(t,e){return Xc(t.databaseId,e.path)}function _l(t,e){const n=Qm(e);if(n.get(1)!==t.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Ym(n))}function Jm(t,e){return Xc(t.databaseId,e)}function M0(t){const e=Qm(t);return e.length===4?Oe.emptyPath():Ym(e)}function tc(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ym(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ad(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function F0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:Wm(h.code);return new J(f,h.message||"")}(o);n=new Gm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_l(t,r.document.name),i=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):ue.min(),l=new Vt({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ao(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_l(t,r.document),i=r.readTime?sn(r.readTime):ue.min(),o=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ao([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_l(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new S0(s,i),l=r.targetId;n=new Km(l,o)}}return n}function U0(t,e){let n;if(e instanceof xi)n={update:Ad(t,e.key,e.value)};else if(e instanceof Qc)n={delete:ec(t,e.key)};else if(e instanceof Dr)n={update:Ad(t,e.key,e.data),updateMask:z0(e.fieldMask)};else{if(!(e instanceof A0))return ce();n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:L0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function B0(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?sn(s.updateTime):sn(i);return o.isEqual(ue.min())&&(o=sn(i)),new T0(o,s.transformResults||[])}(n,e))):[]}function j0(t,e){return{documents:[Jm(t,e.path)]}}function q0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jm(t,s);const i=function(h){if(h.length!==0)return Zm(Gt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Hr(m.field),direction:W0(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Xl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function $0(t){let e=M0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=Xm(p);return m instanceof Gt&&Pm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Ii(Wr(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ya(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new $o(y,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,y=p.values||[];return new $o(y,m)}(n.endAt)),a0(e,s,o,i,l,"F",c,h)}function H0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>Xm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function W0(t){return D0[t]}function K0(t){return O0[t]}function G0(t){return V0[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return tt.fromServerFormat(t.fieldPath)}function Zm(t){return t instanceof $e?function(n){if(n.op==="=="){if(ud(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(cd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ud(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(cd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:K0(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(s=>Zm(s));return r.length===1?r[0]:{compositeFilter:{op:G0(n.op),filters:r}}}(t):ce()}function z0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function e_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.ct=e}}function J0(t){const e=$0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.un=new X0}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(tr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class X0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new hs(0)}static kn(){return new hs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&oi(r.mutation,s,Bt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ws();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Pn();const o=ii(),l=function(){return ii()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Dr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),oi(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new eb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ii();let s=new Me((o,l)=>o-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Bt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Mm();f.forEach(m=>{if(!i.has(m)){const y=$m(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ir());let l=-1,c=i;return o.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,me())).next(f=>({batchId:l,changes:Lm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,m){return new vs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=Ws();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&oi(f.mutation,h,Bt.empty(),Ge.now()),Ea(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:J0(s.bundledQuery),readTime:sn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.overlays=new Me(te.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ir(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Ir(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ir(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new b0(n,r));let i=this.Ir.get(n);i===void 0&&(i=me(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.Tr=new nt(ze.Er),this.dr=new nt(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Oe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Oe([])),r=new ze(n,e),s=new ze(n,e+1);let i=me();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new R0(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(Ie);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new ze(new te(i),0);let l=new nt(Ie);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.Mr=e,this.docs=function(){return new Me(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pn();const o=n.path,l=new te(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||qR(jR(f),r)<=0||(s.has(f.key)||Ea(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ab(this)}getSize(e){return U.resolve(this.size)}}class ab extends Z0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.persistence=e,this.Nr=new Es(n=>Wc(n),Kc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zc,this.targetCount=0,this.kr=hs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jc(0),this.Kr=!1,this.Kr=!0,this.$r=new sb,this.referenceDelegate=e(this),this.Ur=new lb(this),this.indexManager=new Y0,this.remoteDocumentCache=function(s){return new ob(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Q0(n),this.Gr=new nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ib(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new ub(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ub extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class eu{constructor(e){this.persistence=e,this.Jr=new Zc,this.Yr=null}static Zr(e){return new eu(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nI()?8:WR(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hb;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Us()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",$r(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Us()<=_e.DEBUG&&X("QueryEngine","Query:",$r(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Us()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",$r(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):U.resolve())}Yi(e,n){if(pd(n))return U.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ho(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,Ho(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return pd(n)||s.isEqual(ue.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Us()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$r(n)),this.rs(e,o,n,BR(s,-1)).next(l=>l))})}ts(e,n){let r=new nt(Vm(e));return n.forEach((s,i)=>{Ea(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Us()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",$r(n)),this.Ji.getDocumentsMatchingQuery(e,n,tr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Me(Ie),this._s=new Es(i=>Wc(i),Kc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pb(t,e,n,r){return new db(t,e,n,r)}async function t_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function gb(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,m=p.keys();let y=U.resolve();return m.forEach(C=>{y=y.next(()=>f.getEntry(c,C)).next(k=>{const x=h.docVersions.get(C);be(x!==null),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function n_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mb(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(k,x,j){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,y,f)&&l.push(n.Ur.updateTargetData(i,y))});let c=Pn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(_b(i,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function _b(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function yb(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vb(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function nc(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vi(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Rd(t,e,n){const r=fe(t);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=fe(c),m=p._s.get(f);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(h,f)}(r,o,rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:me())).next(l=>(Eb(r,c0(e),l),{documents:l,Ts:i})))}function Eb(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class bd{constructor(){this.activeTargetIds=g0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tb{constructor(){this.so=new bd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=null;function yl(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class Rb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=yl(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw as("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=wb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=yl();return new Promise((o,l)=>{const c=new mm;c.setWithCredentials(!0),c.listenOnce(_m.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case To.NO_ERROR:const f=c.getResponseJson();X(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case To.TIMEOUT:X(at,`RPC '${e}' ${i} timed out`),l(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const p=c.getStatus();if(X(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const C=function(x){const j=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(j)>=0?j:L.UNKNOWN}(y.status);l(new J(C,y.message))}else l(new J(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J(L.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{X(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=yl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Em(),l=vm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,y=!1;const C=new Ab({Io:x=>{y?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(at,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},To:()=>p.close()}),k=(x,j,B)=>{x.listen(j,q=>{try{B(q)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,Hs.EventType.OPEN,()=>{y||(X(at,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),k(p,Hs.EventType.CLOSE,()=>{y||(y=!0,X(at,`RPC '${e}' stream ${s} transport closed`),C.So())}),k(p,Hs.EventType.ERROR,x=>{y||(y=!0,as(at,`RPC '${e}' stream ${s} transport errored:`,x),C.So(new J(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,Hs.EventType.MESSAGE,x=>{var j;if(!y){const B=x.data[0];be(!!B);const q=B,H=q.error||((j=q[0])===null||j===void 0?void 0:j.error);if(H){X(at,`RPC '${e}' stream ${s} received error:`,H);const ae=H.status;let se=function(_){const A=qe[_];if(A!==void 0)return Wm(A)}(ae),R=H.message;se===void 0&&(se=L.INTERNAL,R="Unknown error status: "+ae+" with message "+H.message),y=!0,C.So(new J(se,R)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),k(l,ym.STAT_EVENT,x=>{x.stat===Kl.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Kl.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function vl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){return new x0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new r_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bb extends s_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=F0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?sn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=tc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Jl(c)?{documents:j0(i,c)}:{query:q0(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=zm(i,o.resumeToken);const h=Xl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=Ko(i,o.snapshotVersion.toTimestamp());const h=Xl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=H0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=tc(this.serializer),n.removeTarget=e,this.a_(n)}}class Sb extends s_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=B0(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=tc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>U0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Zl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Zl(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Or(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.L_.add(4),await Mi(h),h.q_.set("Unknown"),h.L_.delete(4),await Ra(h)}(this))})}),this.q_=new Cb(r,s)}}async function Ra(t){if(Or(t))for(const e of t.B_)await e(!0)}async function Mi(t){for(const e of t.B_)await e(!1)}function i_(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),iu(n)?su(n):Ts(n).r_()&&ru(n,e))}function nu(t,e){const n=fe(t),r=Ts(n);n.N_.delete(e),r.r_()&&o_(n,e),n.N_.size===0&&(r.r_()?r.o_():Or(n)&&n.q_.set("Unknown"))}function ru(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ts(t).A_(e)}function o_(t,e){t.Q_.xe(e),Ts(t).R_(e)}function su(t){t.Q_=new k0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.q_.v_()}function iu(t){return Or(t)&&!Ts(t).n_()&&t.N_.size>0}function Or(t){return fe(t).L_.size===0}function a_(t){t.Q_=void 0}async function kb(t){t.q_.set("Online")}async function Db(t){t.N_.forEach((e,n)=>{ru(t,e)})}async function Ob(t,e){a_(t),iu(t)?(t.q_.M_(e),su(t)):t.q_.set("Unknown")}async function Vb(t,e,n){if(t.q_.set("Online"),e instanceof Gm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(t,r)}else if(e instanceof Ao?t.Q_.Ke(e):e instanceof Km?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await n_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),o_(i,c);const p=new Gn(f.target,c,h,f.sequenceNumber);ru(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Go(t,r)}}async function Go(t,e,n){if(!Vi(e))throw e;t.L_.add(1),await Mi(t),t.q_.set("Offline"),n||(n=()=>n_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ra(t)})}function l_(t,e){return e().catch(n=>Go(t,n,e))}async function ba(t){const e=fe(t),n=rr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xb(e);)try{const s=await yb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Lb(e,s)}catch(s){await Go(e,s)}c_(e)&&u_(e)}function xb(t){return Or(t)&&t.O_.length<10}function Lb(t,e){t.O_.push(e);const n=rr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function c_(t){return Or(t)&&!rr(t).n_()&&t.O_.length>0}function u_(t){rr(t).start()}async function Mb(t){rr(t).p_()}async function Fb(t){const e=rr(t);for(const n of t.O_)e.m_(n.mutations)}async function Ub(t,e,n){const r=t.O_.shift(),s=Jc.from(r,e,n);await l_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ba(t)}async function Bb(t,e){e&&rr(t).V_&&await async function(r,s){if(function(o){return P0(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();rr(r).s_(),await l_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ba(r)}}(t,e),c_(t)&&u_(t)}async function Pd(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Or(n);n.L_.add(3),await Mi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ra(n)}async function jb(t,e){const n=fe(t);e?(n.L_.delete(2),await Ra(n)):e||(n.L_.add(2),await Mi(n),n.q_.set("Unknown"))}function Ts(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new bb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:kb.bind(null,t),Ro:Db.bind(null,t),mo:Ob.bind(null,t),d_:Vb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),iu(t)?su(t):t.q_.set("Unknown")):(await t.K_.stop(),a_(t))})),t.K_}function rr(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new Sb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mb.bind(null,t),mo:Bb.bind(null,t),f_:Fb.bind(null,t),g_:Ub.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ba(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ou(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Vi(t))return new J(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.W_=new Me(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fs(e,n,ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $b{constructor(){this.queries=Nd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Nd(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new J(L.ABORTED,"Firestore shutting down"))}}function Nd(){return new Es(t=>Om(t),va)}async function h_(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new qb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=au(o,`Initialization of query '${$r(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&lu(n)}async function f_(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Hb(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&lu(n)}function Wb(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function lu(t){t.Y_.forEach(e=>{e.next()})}var rc,kd;(kd=rc||(rc={})).ea="default",kd.Cache="cache";class d_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==rc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.key=e}}class g_{constructor(e){this.key=e}}class Kb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=Vm(e),this.Ra=new ts(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Cd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),y=Ea(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?C!==k&&(r.track({type:3,doc:y}),x=!0):this.ga(m,y)||(r.track({type:2,doc:y}),x=!0,(c&&this.Aa(y,c)>0||h&&this.Aa(y,h)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(c||h)&&(l=!0)),x&&(y?(o=o.add(y),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(y,C){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return k(y)-k(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new fs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Cd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new g_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new p_(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Gb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zb{constructor(e){this.key=e,this.va=!1}}class Qb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Es(l=>Om(l),va),this.Ma=new Map,this.xa=new Set,this.Oa=new Me(te.comparator),this.Na=new Map,this.La=new Zc,this.Ba={},this.ka=new Map,this.qa=hs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Jb(t,e,n=!0){const r=T_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await m_(r,e,n,!0),s}async function Yb(t,e){const n=T_(t);await m_(n,e,!0,!1)}async function m_(t,e,n,r){const s=await vb(t.localStore,rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Xb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&i_(t.remoteStore,s),l}async function Xb(t,e,n,r,s){t.Ka=(p,m,y)=>async function(k,x,j,B){let q=x.view.ma(j);q.ns&&(q=await Rd(k.localStore,x.query,!1).then(({documents:R})=>x.view.ma(R,q)));const H=B&&B.targetChanges.get(x.targetId),ae=B&&B.targetMismatches.get(x.targetId)!=null,se=x.view.applyChanges(q,k.isPrimaryClient,H,ae);return Od(k,x.targetId,se.wa),se.snapshot}(t,p,m,y);const i=await Rd(t.localStore,e,!0),o=new Kb(e,i.Ts),l=o.ma(i.documents),c=Li.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Od(t,n,h.wa);const f=new Gb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Zb(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!va(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nu(r.remoteStore,s.targetId),sc(r,s.targetId)}).catch(Oi)):(sc(r,s.targetId),await nc(r.localStore,s.targetId,!0))}async function eS(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nu(n.remoteStore,r.targetId))}async function tS(t,e,n){const r=lS(t);try{const s=await function(o,l){const c=fe(o),h=Ge.now(),f=l.reduce((y,C)=>y.add(C.key),me());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=Pn(),k=me();return c.cs.getEntries(y,f).next(x=>{C=x,C.forEach((j,B)=>{B.isValidDocument()||(k=k.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,C)).next(x=>{p=x;const j=[];for(const B of l){const q=w0(B,p.get(B.key).overlayedDocument);q!=null&&j.push(new Dr(B.key,q,Rm(q.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,j,l)}).next(x=>{m=x;const j=x.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(y,x.batchId,j)})}).then(()=>({batchId:m.batchId,changes:Lm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new Me(Ie)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Fi(r,s.changes),await ba(r.remoteStore)}catch(s){const i=au(s,"Failed to persist write");n.reject(i)}}async function __(t,e){const n=fe(t);try{const r=await mb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Fi(n,r,e)}catch(r){await Oi(r)}}function Dd(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&lu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nS(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Me(te.comparator);o=o.insert(i,ut.newNoDocument(i,ue.min()));const l=me().add(i),c=new wa(ue.min(),new Map,new Me(Ie),o,l);await __(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),cu(r)}else await nc(r.localStore,e,!1).then(()=>sc(r,e,n)).catch(Oi)}async function rS(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await gb(n.localStore,e);v_(n,r,null),y_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(n,s)}catch(s){await Oi(s)}}async function sS(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(be(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);v_(r,e,n),y_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fi(r,s)}catch(s){await Oi(s)}}function y_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function v_(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function sc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||E_(t,r)})}function E_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(nu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),cu(t))}function Od(t,e,n){for(const r of n)r instanceof p_?(t.La.addReference(r.key,e),iS(t,r)):r instanceof g_?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||E_(t,r.key)):ce()}function iS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),cu(t))}function cu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new zb(n)),t.Oa=t.Oa.insert(n,r),i_(t.remoteStore,new Gn(rn(Gc(n.path)),r,"TargetPurposeLimboResolution",jc.oe))}}async function Fi(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=tu.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,m=>U.forEach(m.$i,y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>U.forEach(m.Ui,y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Vi(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=f.os.get(m),C=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,k)}}}(r.localStore,i))}async function oS(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await t_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new J(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(n,r.hs)}}function aS(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function T_(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=__.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nS.bind(null,e),e.Ca.d_=Hb.bind(null,e.eventManager),e.Ca.$a=Wb.bind(null,e.eventManager),e}function lS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sS.bind(null,e),e}class zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pb(this.persistence,new fb,e.initialUser,this.serializer)}Ga(e){return new cb(eu.Zr,this.serializer)}Wa(e){return new Tb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zo.provider={build:()=>new zo};class ic{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oS.bind(null,this.syncEngine),await jb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $b}()}createDatastore(e){const n=Aa(e.databaseInfo.databaseId),r=function(i){return new Rb(i)}(e.databaseInfo);return function(i,o,l,c){return new Pb(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Nb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dd(this.syncEngine,n,0),function(){return Sd.D()?new Sd:new Ib}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,f){const p=new Qb(s,i,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Mi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ic.provider={build:()=>new ic};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Im.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=au(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await t_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uS(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Pd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Pd(e.remoteStore,s)),t._onlineComponents=e}async function uS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await El(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await El(t,new zo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await El(t,new zo);return t._offlineComponents}async function w_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Vd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Vd(t,new ic))),t._onlineComponents}function hS(t){return w_(t).then(e=>e.syncEngine)}async function A_(t){const e=await w_(t),n=e.eventManager;return n.onListen=Jb.bind(null,e.syncEngine),n.onUnlisten=Zb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eS.bind(null,e.syncEngine),n}function fS(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new I_({next:m=>{f.Za(),o.enqueueAndForget(()=>f_(i,p));const y=m.docs.has(l);!y&&m.fromCache?h.reject(new J(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?h.reject(new J(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new d_(Gc(l.path),f,{includeMetadataChanges:!0,_a:!0});return h_(i,p)}(await A_(t),t.asyncQueue,e,n,r)),r.promise}function dS(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new I_({next:m=>{f.Za(),o.enqueueAndForget(()=>f_(i,p)),m.fromCache&&c.source==="server"?h.reject(new J(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new d_(l,f,{includeMetadataChanges:!0,_a:!0});return h_(i,p)}(await A_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t,e,n){if(!n)throw new J(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pS(t,e,n,r){if(e===!0&&r===!0)throw new J(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ld(t){if(!te.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Md(t){if(te.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sa(t);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gS(t,e){if(e<=0)throw new J(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=R_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kR;switch(r.type){case"firstParty":return new xR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xd.get(n);r&&(X("ComponentProvider","Removing Datastore"),xd.delete(n),r.terminate())}(this),Promise.resolve()}}function mS(t,e,n,r={}){var s;const i=(t=Cn(t,Pa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=lt.MOCK_USER;else{l=QT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new lt(h)}t._authCredentials=new DR(new Tm(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ar(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Xn extends ar{constructor(e,n,r){super(e,n,Gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new te(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function EP(t,e,...n){if(t=pt(t),b_("collection","path",e),t instanceof Pa){const r=Oe.fromString(e,...n);return Md(r),new Xn(t,null,r)}{if(!(t instanceof It||t instanceof Xn))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Md(r),new Xn(t.firestore,null,r)}}function _S(t,e,...n){if(t=pt(t),arguments.length===1&&(e=Im.newId()),b_("doc","path",e),t instanceof Pa){const r=Oe.fromString(e,...n);return Ld(r),new It(t,null,new te(r))}{if(!(t instanceof It||t instanceof Xn))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Ld(r),new It(t.firestore,t instanceof Xn?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new r_(this,"async_queue_retry"),this.Vu=()=>{const r=vl();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Vi(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=ou.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ce()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Is extends Pa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ud,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ud(e),this._firestoreClient=void 0,await e}}}function yS(t,e){const n=typeof t=="object"?t:Nc(),r=typeof t=="string"?t:"(default)",s=da(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Pg("firestore");i&&mS(s,...i)}return s}function uu(t){if(t._terminated)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vS(t),t._firestoreClient}function vS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new zR(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,R_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new cS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(rt.fromBase64String(e))}catch(n){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=/^__.*__$/;class TS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xi(e,this.data,n,this.fieldTransforms)}}function S_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class gu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(S_(this.Cu)&&ES.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class IS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Aa(e)}Qu(e,n,r,s=!1){return new gu({Cu:e,methodName:n,qu:r,path:tt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mu(t){const e=t._freezeSettings(),n=Aa(t._databaseId);return new IS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);k_("Data must be an object, but it was:",o,r);const l=C_(r,o);let c,h;if(i.merge)c=new Bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=AS(e,p,n);if(!o.contains(m))throw new J(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);bS(f,m)||f.push(m)}c=new Bt(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new TS(new Vt(l),c,h)}class _u extends fu{_toFieldTransform(e){return new v0(e.path,new wi)}isEqual(e){return e instanceof _u}}function wS(t,e,n,r=!1){return yu(n,t.Qu(r?4:3,e))}function yu(t,e){if(N_(t=pt(t)))return k_("Unsupported field value:",e,t),C_(t,e);if(t instanceof fu)return function(r,s){if(!S_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=yu(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Ko(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ko(s.serializer,i)}}if(r instanceof du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:zm(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return zc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Sa(r)}`)}(t,e)}function C_(t,e){const n={};return wm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,s)=>{const i=yu(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function N_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof du||t instanceof ds||t instanceof It||t instanceof fu||t instanceof pu)}function k_(t,e,n){if(!N_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Sa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function AS(t,e,n){if((e=pt(e))instanceof hu)return e._internalPath;if(typeof e=="string")return D_(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const RS=new RegExp("[~\\*/\\[\\]]");function D_(t,e,n){if(e.search(RS)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hu(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new J(L.INVALID_ARGUMENT,l+t+c)}function bS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ca("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SS extends O_{data(){return super.data()}}function Ca(t,e){return typeof e=="string"?D_(t,e):e instanceof hu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vu{}class Eu extends vu{}function TP(t,e,...n){let r=[];e instanceof vu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Tu).length,l=i.filter(c=>c instanceof Na).length;if(o>1||o>0&&l>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Na extends Eu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Na(e,n,r)}_apply(e){const n=this._parse(e);return V_(e._query,n),new ar(e.firestore,e.converter,Yl(e._query,n))}_parse(e){const n=mu(e.firestore);return function(i,o,l,c,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){jd(p,f);const y=[];for(const C of p)y.push(Bd(c,i,C));m={arrayValue:{values:y}}}else m=Bd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||jd(p,f),m=wS(l,o,p,f==="in"||f==="not-in");return $e.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IP(t,e,n){const r=e,s=Ca("where",t);return Na._create(s,r,n)}class Tu extends vu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)V_(o,c),o=Yl(o,c)}(e._query,n),new ar(e.firestore,e.converter,Yl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Iu extends Eu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Iu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(i,o)}(e._query,this._field,this._direction);return new ar(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wP(t,e="asc"){const n=e,r=Ca("orderBy",t);return Iu._create(r,n)}class wu extends Eu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new wu(e,n,r)}_apply(e){return new ar(e.firestore,e.converter,Ho(e._query,this._limit,this._limitType))}}function AP(t){return gS("limit",t),wu._create("limit",t,"F")}function Bd(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&n.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!te.isDocumentKey(r))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ld(t,new te(r))}if(n instanceof It)return ld(t,n._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sa(n)}.`)}function jd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function V_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CS{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new pu(i)}convertGeoPoint(e){return new du(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$c(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);be(e_(r));const s=new Ei(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class L_ extends O_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ca("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends L_{data(e={}){return super.data(e)}}class NS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ro(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ro(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:kS(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){t=Cn(t,It);const e=Cn(t.firestore,Is);return fS(uu(e),t._key).then(n=>DS(e,t,n))}class M_ extends CS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function bP(t){t=Cn(t,ar);const e=Cn(t.firestore,Is),n=uu(e),r=new M_(e);return PS(t._query),dS(n,t._query).then(s=>new NS(e,r,t,s))}function SP(t,e,n){t=Cn(t,It);const r=Cn(t.firestore,Is),s=x_(t.converter,e);return Au(r,[P_(mu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function PP(t){return Au(Cn(t.firestore,Is),[new Qc(t._key,qt.none())])}function CP(t,e){const n=Cn(t.firestore,Is),r=_S(t),s=x_(t.converter,e);return Au(n,[P_(mu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Au(t,e){return function(r,s){const i=new Tn;return r.asyncQueue.enqueueAndForget(async()=>tS(await hS(r),s,i)),i.promise}(uu(t),e)}function DS(t,e,n){const r=n.docs.get(e._key),s=new M_(t);return new L_(t,s,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}function NP(){return new _u("serverTimestamp")}(function(e,n=!0){(function(s){_s=s})(ps),br(new er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Is(new OR(r.getProvider("auth-internal")),new MR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),en(rd,"4.7.3",e),en(rd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="type.googleapis.com/google.protobuf.Int64Value",VS="type.googleapis.com/google.protobuf.UInt64Value";function F_(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function oc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>oc(e));if(typeof t=="function"||typeof t=="object")return F_(t,e=>oc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Jo(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case OS:case VS:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Jo(e)):typeof t=="function"||typeof t=="object"?F_(t,e=>Jo(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ns extends an{constructor(e,n,r){super(`${Ru}/${e}`,n||""),this.details=r}}function xS(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function LS(t,e){let n=xS(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!qd[o])return new ns("internal","internal");n=qd[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Jo(s))}}catch{}return n==="ok"?null:new ns(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="us-central1";function FS(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new ns("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class US{constructor(e,n,r,s,i=ac,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new MS(n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ac}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function BS(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function jS(t,e,n){return r=>$S(t,e,r,{})}async function qS(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function $S(t,e,n,r){const s=t._url(e);return HS(t,s,n,r)}async function HS(t,e,n,r){n=oc(n);const s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,c=FS(l),h=await Promise.race([qS(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!h)throw new ns("cancelled","Firebase Functions instance was deleted.");const f=LS(h.status,h.json);if(f)throw f;if(!h.json)throw new ns("internal","Response is not valid JSON object.");let p=h.json.data;if(typeof p>"u"&&(p=h.json.result),typeof p>"u")throw new ns("internal","Response is missing data field.");return{data:Jo(p)}}const $d="@firebase/functions",Hd="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="auth-internal",KS="app-check-internal",GS="messaging-internal";function zS(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(WS),l=r.getProvider(GS),c=r.getProvider(KS);return new US(i,o,l,c,s,t)};br(new er(Ru,n,"PUBLIC").setMultipleInstances(!0)),en($d,Hd,e),en($d,Hd,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t=Nc(),e=ac){const r=da(pt(t),Ru).getImmediate({identifier:e}),s=Pg("functions");return s&&JS(r,...s),r}function JS(t,e,n){BS(pt(t),e,n)}function kP(t,e,n){return jS(pt(t),e)}zS(fetch.bind(self));const YS={apiKey:"AIzaSyAlYR8h2dQ_CjkmWahDpCJhDjGlK-31bj4",authDomain:"movieguess-434ae.firebaseapp.com",projectId:"movieguess-434ae",storageBucket:"movieguess-434ae.firebasestorage.app",messagingSenderId:"516633216994",appId:"1:516633216994:web:ddc79f4fb5550a16365bbb"},bu=Og(YS),DP=yS(bu),Wd=SR(bu),OP=QS(bu),XS=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ZS={class:"app-container"},eP={class:"glass-panel nav-bar"},tP={class:"nav-links"},nP={class:"popup-content glass-panel"},rP={class:"popup-body"},sP={key:0,class:"error-message"},iP=["disabled"],oP={class:"main-content"},aP={__name:"App",setup(t){const e=BT(),n=mr(0),r=mr(!1),s=mr(""),i=mr(""),o=mr(""),l=mr(!1),c=()=>{n.value++,n.value>=3&&(n.value=0,Wd.currentUser?e.push("/admin"):r.value=!0)},h=()=>{r.value=!1,s.value="",i.value="",o.value=""},f=async()=>{if(!s.value||!i.value){o.value="Please enter email and password";return}l.value=!0,o.value="";try{await pA(Wd,s.value,i.value),h(),e.push("/admin")}catch{o.value="Invalid email or password"}finally{l.value=!1}};return(p,m)=>{const y=Rh("router-link"),C=Rh("router-view");return js(),tl("div",ZS,[St("nav",eP,[Ke(y,{to:"/",class:"logo",onClick:af(c,["prevent"])},{default:yr(()=>[...m[2]||(m[2]=[go("✨ CineMyst",-1)])]),_:1}),St("div",tP,[Ke(y,{to:"/"},{default:yr(()=>[...m[3]||(m[3]=[go("Play",-1)])]),_:1}),Ke(y,{to:"/submit"},{default:yr(()=>[...m[4]||(m[4]=[go("Submit Puzzle",-1)])]),_:1})])]),Ke(Bh,{name:"fade"},{default:yr(()=>[r.value?(js(),tl("div",{key:0,class:"popup-overlay",onClick:af(h,["self"])},[St("div",nP,[St("div",{class:"popup-header"},[m[5]||(m[5]=St("h2",null,"🔐 Admin Login",-1)),St("button",{onClick:h,class:"close-btn"},"✕")]),St("div",rP,[Ih(St("input",{"onUpdate:modelValue":m[0]||(m[0]=k=>s.value=k),type:"email",placeholder:"Admin Email",class:"input-field",onKeyup:lf(f,["enter"])},null,544),[[of,s.value]]),Ih(St("input",{"onUpdate:modelValue":m[1]||(m[1]=k=>i.value=k),type:"password",placeholder:"Password",class:"input-field",onKeyup:lf(f,["enter"])},null,544),[[of,i.value]]),o.value?(js(),tl("p",sP,Tl(o.value),1)):xh("",!0),St("button",{onClick:f,class:"btn-primary",disabled:l.value},Tl(l.value?"Logging in...":"Login"),9,iP)])])])):xh("",!0)]),_:1}),St("main",oP,[Ke(C,null,{default:yr(({Component:k})=>[Ke(Bh,{name:"fade",mode:"out-in"},{default:yr(()=>[(js(),sg(hv(k)))]),_:2},1024)]),_:1})])])}}},lP=XS(aP,[["__scopeId","data-v-b320b9ce"]]),cP="modulepreload",uP=function(t){return"/"+t},Kd={},ka=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=uP(c),c in Kd)return;Kd[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":cP,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},hP=()=>ka(()=>import("./HomeView-I1rt3gbG.js"),__vite__mapDeps([0,1,2])),fP=()=>ka(()=>import("./SubmitView-C9hGaN1i.js"),__vite__mapDeps([3,4])),dP=()=>ka(()=>import("./AdminView-CFnfFDwD.js"),__vite__mapDeps([5,1,6])),pP=()=>ka(()=>import("./HistoryView-D3pZvP3K.js"),__vite__mapDeps([7,8])),gP=UT({history:_T(),routes:[{path:"/",name:"home",component:hP},{path:"/history",name:"history",component:pP},{path:"/submit",name:"submit",component:fP},{path:"/admin",name:"admin",component:dP}]}),U_=kE(lP);U_.use(gP);U_.mount("#app");export{NP as A,Wd as B,BT as C,yr as D,pc as E,Jt as F,wP as G,AP as H,PP as I,SP as J,Bh as T,XS as _,St as a,lf as b,tl as c,xh as d,Ut as e,Vp as f,go as g,kP as h,sg as i,Ke as j,mP as k,_S as l,DP as m,RP as n,js as o,EP as p,TP as q,mr as r,IP as s,Tl as t,bP as u,of as v,Ih as w,OP as x,dc as y,CP as z};
