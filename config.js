import firebase from "firebase"

require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCNJ-Rxp7Aj7lA-lHhLRdccd_d8LLKULs8",
  authDomain: "gk-app-a6a65.firebaseapp.com",
  databaseURL: "https://gk-app-a6a65-default-rtdb.firebaseio.com",
  projectId: "gk-app-a6a65",
  storageBucket: "gk-app-a6a65.appspot.com",
  messagingSenderId: "569702253442",
  appId: "1:569702253442:web:dd526967d622b689f5059b"
};

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  

  export default firebase.firestore()