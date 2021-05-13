import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApnSrBDRul7U0cyLkst499tOQF9t4fD9Y",
    authDomain: "registro-46272.firebaseapp.com",
    projectId: "registro-46272",
    storageBucket: "registro-46272.appspot.com",
    messagingSenderId: "699545239797",
    appId: "1:699545239797:web:74d5a02b3e6c9a99fd05bc",
    measurementId: "G-S9WELC41D6"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const fireb = firebase.analytics();
  const auth = firebase.auth();
  export {auth}