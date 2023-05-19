// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUI7KazYQw-fbyye8rXtaDGN3pHkSBzKA",
  authDomain: "reactauthtutorial-9573f.firebaseapp.com",
  projectId: "reactauthtutorial-9573f",
  storageBucket: "reactauthtutorial-9573f.appspot.com",
  messagingSenderId: "29124246060",
  appId: "1:29124246060:web:5ecc74cc498de817c9af89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};