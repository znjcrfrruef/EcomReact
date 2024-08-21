// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBycip-GbgKezImn_gFeVF-WTxIx-cMRSc",
  authDomain: "jkzadb.firebaseapp.com",
  projectId: "jkzadb",
  storageBucket: "jkzadb.appspot.com",
  messagingSenderId: "928999157681",
  appId: "1:928999157681:web:f8134b07d4a111dcced790",
  measurementId: "G-V7VDX811RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 