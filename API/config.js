// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY9PAOfT2ySRGTFb6SbGiCcR_D3sQnGOk",
  authDomain: "cardapp-d8eba.firebaseapp.com",
  databaseURL: "https://cardapp-d8eba-default-rtdb.firebaseio.com",
  projectId: "cardapp-d8eba",
  storageBucket: "cardapp-d8eba.appspot.com",
  messagingSenderId: "114513137600",
  appId: "1:114513137600:web:df12a3987adb7f90908225",
  measurementId: "G-NYCGGTRRKZ",
};

firebase.initializeApp(firebaseConfig);
export { firebase };
