import firebase  from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCURFkLDWAf6503mMeGbKWTJd5y0KjuywA",
    authDomain: "db-pdg.firebaseapp.com",
    projectId: "db-pdg",
    storageBucket: "db-pdg.appspot.com",
    messagingSenderId: "473190936394",
    appId: "1:473190936394:web:efc3e9aac0364e26c71bb3",
    measurementId: "G-276BW5404C"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const auth = fire.auth();

export {auth};