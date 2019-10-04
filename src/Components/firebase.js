// firebase.js
import firebase from "firebase";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
  apiKey: "AIzaSyAHcmHxRSP_8Kl02eLMqL6fUEmKovCTMCE",
  authDomain: "ursa-ed6ec.firebaseapp.com",
  databaseURL: "https://ursa-ed6ec.firebaseio.com",
  projectId: "ursa-ed6ec",
  storageBucket: "",
  messagingSenderId: "317117507570",
  appId: "1:317117507570:web:e063f5a465398fc16d6d6b"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;
