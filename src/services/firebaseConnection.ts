// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

import type { FirebaseOptions } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig : FirebaseOptions  = {
  apiKey: "AIzaSyDsnSCCZBpNt1teARaY7P4kWCZRydKzTrg",
  authDomain: "pokedex-d93e9.firebaseapp.com",
  projectId: "pokedex-d93e9",
  storageBucket: "pokedex-d93e9.appspot.com",
  messagingSenderId: "305811626611",
  appId: "1:305811626611:web:aea27f049f5575a3242806",
  measurementId: "G-KRBN5WQG2X"
};


// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default firebase;