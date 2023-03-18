// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// import firebase from 'firebase'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsZffuiBRRBIzZF3Bzr9EFSoBOtJmutOY",
  authDomain: "crypto-app-2d1fd.firebaseapp.com",
  projectId: "crypto-app-2d1fd",
  storageBucket: "crypto-app-2d1fd.appspot.com",
  messagingSenderId: "336053406102",
  appId: "1:336053406102:web:c1e01ef9209921191535b7"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db = getFirestore(app)
export default app