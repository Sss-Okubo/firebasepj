import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC-oSttovjJevV1fgs-DPggunaZidCxhS8",
    authDomain: "fir-pj-5907a.firebaseapp.com",
    projectId: "fir-pj-5907a",
    storageBucket: "fir-pj-5907a.appspot.com",
    messagingSenderId: "107184827227",
    appId: "1:107184827227:web:82b77603ab9b9a75e3c87e",
    measurementId: "G-G8ZGQK3E5P",
  });
}

export default firebase;