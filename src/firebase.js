import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyATeovxAY0DYrx4VeX09zVcr79cMMlKdis",
    authDomain: "axios-d45d7.firebaseapp.com",
    databaseURL: "https://axios-d45d7.firebaseio.com",
    projectId: "axios-d45d7",
    storageBucket: "axios-d45d7.appspot.com",
    messagingSenderId: "750052240331",
    appId: "1:750052240331:web:218ec644c3ceffc009a44e",
    measurementId: "G-2NEJVJ1FGT"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
 