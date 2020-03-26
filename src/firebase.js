import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB0mXziCV187uDT9PwYfQ09JEi-aAPWsdo",
    authDomain: "hasantunahanak-60a48.firebaseapp.com",
    databaseURL: "https://hasantunahanak-60a48.firebaseio.com",
    projectId: "hasantunahanak-60a48",
    storageBucket: "hasantunahanak-60a48.appspot.com",
    messagingSenderId: "21442312443",
    appId: "1:21442312443:web:843110a1d358baeb2b985e"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export default firebase;