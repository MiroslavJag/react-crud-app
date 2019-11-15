import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlccWTzphSsU6SlFRDr3v5CsnXPDJkXdo",
    authDomain: "react-crud-app-a6ded.firebaseapp.com",
    databaseURL: "https://react-crud-app-a6ded.firebaseio.com",
    projectId: "react-crud-app-a6ded",
    storageBucket: "react-crud-app-a6ded.appspot.com",
    messagingSenderId: "873286815705",
    appId: "1:873286815705:web:d86127bf3b4b3fc9df53c8"
  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };