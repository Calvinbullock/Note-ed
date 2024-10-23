
// react
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';

// firebase
import { db, auth } from "./config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

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
                // TODO: only get Notes that match user ID
                //const userId = auth?.currentUser.uid;
                //const notesCollectionRef = collection(db, "notes");
                //const q = query(notesCollectionRef, where("userId", "==", userId));
                //const data = await getDocs(q);

                const data = await getDocs(notesCollectionRef);
                setNoteData(data.docs.map((doc) => ({id: doc.id, ...doc.data() })));

            } catch (err) {
                console.error(err);
            }
        }
        getNoteList();
    }, []); // [notesCollectionRef, noteData]

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage noteData={noteData}/>} />
                    <Route path="/SignIn" element={<SignInPage />} />
                </Routes>
            </BrowserRouter>   
        </div>
    );
}
