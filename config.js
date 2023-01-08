import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBIAnoJQHPcrU9cq1EU3WT8XC8Nk4pW2N8",
  authDomain: "e-library1-a44a9.firebaseapp.com",
  projectId: "e-library1-a44a9",
  storageBucket: "e-library1-a44a9.appspot.com",
  messagingSenderId: "65497581846",
  appId: "1:65497581846:web:6133ca0f9da4350524e837"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
