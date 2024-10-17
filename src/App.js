
// react
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';

// firebase
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

// Components
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";

// main function
export default function App() {
    const notesCollectionRef = collection(db, "Notes");
    const [noteData, setNoteData] = useState([]);

    // get all Notes from DB
    useEffect(() => {
        const getNoteList = async () => {
            try {
                const data = await getDocs(notesCollectionRef);
                setNoteData(data.docs.map((doc) => ({id: doc.id, ...doc.data() })));

            } catch (err) {
                console.error(err);
            }
        }
        getNoteList();
    }, []); // NOTE: should be in the brackets? -- [notesCollectionRef, noteData]

    console.log("note2 ", noteData);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage noteData={noteData}/>} />
                <Route path="/SignIn" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>   
    );
}
