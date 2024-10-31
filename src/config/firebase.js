
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

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

export const auth = getAuth(app);
export const db = getFirestore(app);
