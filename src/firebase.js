import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB28YEgJmDI3pLliL1pifZiW8zZo9170FY",
  authDomain: "gameproject-bd008.firebaseapp.com",
  projectId: "gameproject-bd008",
  storageBucket: "gameproject-bd008.appspot.com",
  messagingSenderId: "551406795341",
  appId: "1:551406795341:web:f70fde7ee9c8b5da8efa04",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export { db };
