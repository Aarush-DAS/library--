import firebase from "firebase";
require ("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyALJkHA3PnMMEzNhV_mLC57uKZUpy9rUmY",
    authDomain: "e-library-cd363.firebaseapp.com",
    projectId: "e-library-cd363",
    storageBucket: "e-library-cd363.appspot.com",
    messagingSenderId: "1095480136535",
    appId: "1:1095480136535:web:5783c8c0d2c3a285c9e412"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();