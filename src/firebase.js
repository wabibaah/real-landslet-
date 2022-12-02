// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsuaICd_vJzKkQfbfooiB60wwTKcpruQ0",
  authDomain: "real-landslet.firebaseapp.com",
  projectId: "real-landslet",
  storageBucket: "real-landslet.appspot.com",
  messagingSenderId: "339340147366",
  appId: "1:339340147366:web:8b1cabb78e8abe7cc65267",
  measurementId: "G-PY5861TCJ0",
};

// Initialize Firebase

const analytics = getAnalytics(app);
initializeApp(firebaseConfig);
export const db = getFirestore();
