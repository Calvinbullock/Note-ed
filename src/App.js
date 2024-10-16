
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

// NOTE: TEMP REMOVE USEING AS PROPS
const props = {
    title: "shop", 
    date: "Nov 2, 2024",
    text: "lorm pop yop",
};

// main function
export default function App() {
    const notesCollectionRef = collection(db, "Notes");
    //const [noteList, setNoteList] = useState();

    useEffect(() => {
        const getNoteList = async () => {
            try {
                const data = await getDocs(notesCollectionRef);
                const noteData = data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log(noteData);

            } catch (err) {
                console.error(err);
            }
        }

        getNoteList();
    }, [notesCollectionRef]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage {...props}/>} />
                <Route path="/SignIn" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>   
    );
}
