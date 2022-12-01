import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCK3Bp0rqXPVZsX3dXj2CBDs0dal4nXF7A",
    authDomain: "bookkeeper-kth.firebaseapp.com",
    projectId: "bookkeeper-kth",
    storageBucket: "bookkeeper-kth.appspot.com",
    messagingSenderId: "724623856055",
    appId: "1:724623856055:web:83c45cfdcebfa5428b1832",
    measurementId: "G-XHJBEHSBP1"
};
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db }
