// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6kk0kyUijD5MngPUFCxLZocvmq0e-_OM",
  authDomain: "pantery-4a538.firebaseapp.com",
  projectId: "pantery-4a538",
  storageBucket: "pantery-4a538.appspot.com",
  messagingSenderId: "851122847931",
  appId: "1:851122847931:web:78c18b4a7d024fb271699e",
  measurementId: "G-MM41ZE7VJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

export {fireStore}
