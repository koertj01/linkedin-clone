import firebase from "firebase";

// import {initializeApp} from "firebase/app";
// import {getAuth, signInWithCustomToken} from "firebase/auth";
// import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCxHg5r3mqadJW3YXpD5aJKuYA9o396GIc",
  authDomain: "linkedin-clone-ef7fc.firebaseapp.com",
  projectId: "linkedin-clone-ef7fc",
  storageBucket: "linkedin-clone-ef7fc.appspot.com",
  messagingSenderId: "241583331871",
  appId: "1:241583331871:web:d71b056640d7f17b03532a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //connect to our database
const db = firebaseApp.firestore(); //retrieve the DB from our firestore
const auth = firebase.auth(); //give us access to authenticate users to our database

export { db, auth };
