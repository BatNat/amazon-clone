import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbQwd8HgX5gxAnZlOLo1Qg6tez6KiqBzE",
    authDomain: "shop-b211e.firebaseapp.com",
    projectId: "shop-b211e",
    storageBucket: "shop-b211e.appspot.com",
    messagingSenderId: "940395797282",
    appId: "1:940395797282:web:455b6b0a7d597880e8637b",
    measurementId: "G-91BZ3VWD6H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};