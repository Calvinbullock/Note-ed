// react / firebase
import React, { useState, useEffect } from "react";
import { collection, addDoc} from "firebase/firestore";

// src js fies
import { db, auth } from "./../config/firebase";

import "./NoteEditor.css"

export default function NoteEditor() {
    const [ titleValue, setTitleEntry ] = useState("")
    const [ dateValue, setDateEntry ] = useState("")
    const [ textValue, setTextEntry ] = useState("")

    const notesCollectionRef = collection(db, "Notes");

    const handleTitleEntry = (event) => {
        setTitleEntry(event.target.value);
    }
    const handleDateChange = (event) => {
        setDateEntry(event.target.value);
    }
    const handleTextEntry = (event) => {
        setTextEntry(event.target.value);
    }

    useEffect(() => {
        const textarea = document.querySelector('.noteEditor textarea');
        const container = textarea.parentNode;

        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
            container.style.height = 'auto';
        });
    }, []);

    const submitNote = async () => {
        try {
            await addDoc(notesCollectionRef, {
                title: titleValue,
                date: dateValue,
                text: textValue,
                userId: auth?.currentUser?.uid,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="noteEditor">
            <input 
                id="note-title-entry" 
                type="text" 
                name="titleEntry" 
                value={titleValue} 
                onChange={handleTitleEntry} 
                placeholder="Title"
            /><br/>
            <input 
                id="note-date-entry" 
                type="text" 
                name="dateEntry" 
                value={dateValue} 
                onChange={handleDateChange} 
                placeholder="Date"
            /><br/>
            <textarea 
                value={textValue} 
                onChange={handleTextEntry}
                placeholder="take a note"
            ></textarea><br/>
            <button type="" onClick={submitNote}>Add</button>
        </div>
    );
}

