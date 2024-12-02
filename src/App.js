
// react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';

// firebase
import { db } from "./config/firebase";
import { collection, onSnapshot} from "firebase/firestore";

// Components
import './App.css';
import HomePage from "./components/HomePage";
import SignInPage from "./components/signIn-SignUp/SignInPage";
import SignUpPage from "./components/signIn-SignUp/SignUpPage";
import { AppProvider } from './components/AppContext';

/*  ===============================================
 *  COMPONENT DEFINITION
 * ============================================= */
export default function App() {
    const notesCollectionRef = collection(db, "Notes");
    const [noteData, setNoteData] = useState([]);

    // get all Notes from DB
    useEffect(() => {
        const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
            try {
                const noteData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setNoteData(noteData);
            } catch (err) { console.log(err); }
        });
        // Clean up the listener when the component unmounts
        return () => unsubscribe();
        // eslint-disable-next-line
    }, []);

    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage noteData={noteData}/>} />
                    <Route path="/SignIn" element={<SignInPage />} />
                    <Route path="/SignUp" element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}
