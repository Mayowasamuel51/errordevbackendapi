// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDTgqc0GduFPKayCtg1Fr_C1Ynq7RgTdU",
  authDomain: "errordevapi.firebaseapp.com",
  projectId: "errordevapi",
  storageBucket: "errordevapi.appspot.com",
  messagingSenderId: "561531611671",
  appId: "1:561531611671:web:b5dbaaaa7b20241ab38a52",
  measurementId: "G-CQFG019C4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);