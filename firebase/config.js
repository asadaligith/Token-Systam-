// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { 
  getFirestore,
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs,
  doc,
  setDoc,
  serverTimestamp,
  
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
    app,
    auth,
    provider,
    GoogleAuthProvider,
    signInWithPopup,
    db,
    collection, 
    addDoc,
    setDoc,
    serverTimestamp,
    query, 
    where, 
    getDocs,
    doc,
}