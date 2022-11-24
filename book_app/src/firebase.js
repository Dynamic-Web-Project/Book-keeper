// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK3Bp0rqXPVZsX3dXj2CBDs0dal4nXF7A",
  authDomain: "bookkeeper-kth.firebaseapp.com",
  projectId: "bookkeeper-kth",
  storageBucket: "bookkeeper-kth.appspot.com",
  messagingSenderId: "724623856055",
  appId: "1:724623856055:web:83c45cfdcebfa5428b1832",
  measurementId: "G-XHJBEHSBP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { auth }
