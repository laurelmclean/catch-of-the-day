import Rebase from "re-base";
import firebase from "firebase";
require('dotenv').config()

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "catch-of-the-day-laurel.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-laurel-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-laurel",
    storageBucket: "catch-of-the-day-laurel.appspot.com",
    messagingSenderId: "39411524549",
    appId: "1:39411524549:web:d1c53737203fde3bbca1ac"
  })

  const base = Rebase.createClass(firebaseApp.database());

  // this is a named export
  export { firebaseApp }

  // this is a default export
  export default base;
