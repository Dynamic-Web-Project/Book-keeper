import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, auth, db }
