// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChtxjJeQN_J-GVqMsfKH8NDyBX9BgopRc",
    authDomain: "noted-eeafd.firebaseapp.com",
    projectId: "noted-eeafd",
    storageBucket: "noted-eeafd.appspot.com",
    messagingSenderId: "743537184501",
    appId: "1:743537184501:web:bde7e452d8a295dcb9bfbc",
    measurementId: "G-HRPC217Z46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
