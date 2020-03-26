import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBM3R6w9Oj9lZjLW2E3cYRWEysUKsZJGoA",
  authDomain: "hasantunahanakk.firebaseapp.com",
  databaseURL: "https://hasantunahanakk.firebaseio.com",
  projectId: "hasantunahanakk",
  storageBucket: "hasantunahanakk.appspot.com",
  messagingSenderId: "739467232643",
  appId: "1:739467232643:web:8f49bf1454c38dc2b7e2b6"
};
// Initialize Firebase
firebase.initializeApp(config);
  export default firebase;