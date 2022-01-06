import firebase from "firebase";

// import {initializeApp} from "firebase/app";
// import {getAuth, signInWithCustomToken} from "firebase/auth";
// import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //connect to our database
const db = firebaseApp.firestore(); //retrieve the DB from our firestore
const auth = firebase.auth(); //give us access to authenticate users to our database

export { db, auth };
