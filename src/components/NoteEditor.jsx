// react / firebase
import React, { useState, useEffect } from "react";
import { collection, addDoc} from "firebase/firestore";

// src js fies
import { db, auth } from "./../config/firebase";

import { formatEpochTime, clearInput} from "../utils/utils";
import "./NoteEditor.css"

export default function NoteEditor() {
    const notesCollectionRef = collection(db, "Notes");

    const [ titleValue, setTitleEntry ] = useState("")
    const [ dueDateValue, setDueDateEntry ] = useState("")
    const [ textValue, setTextEntry ] = useState("")

    const handleTitleEntry = (event) => {
        setTitleEntry(event.target.value);
    }
    const handleDueDateChange = (event) => {
        setDueDateEntry(event.target.value);
    }
    const handleTextEntry = (event) => {
        setTextEntry(event.target.value);
    }

    // auto adjust textarea height to fit content
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
        const addDate = Date.now();
        try {
            await addDoc(notesCollectionRef, {
                title: titleValue,
                date: formatEpochTime(dueDateValue),
                dateEpoch: addDate,
                dueDate: dueDateValue,
                text: textValue,
                userId: auth?.currentUser?.uid,
            });
            clearInput("note-title-entry");
            clearInput("note-due-date-entry");
            clearInput("note-text-entry");

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="noteEditor">
            <input
                aria-label="Input Note title"
                id="note-title-entry"
                type="text"
                name="titleEntry"
                value={titleValue}
                onChange={handleTitleEntry}
                placeholder="Title"
            /><br/>
            <input
                aria-label="Input Note Due Date"
                id="note-due-date-entry"
                type="text"
                name="dueDateEntry"
                value={dueDateValue}
                onChange={handleDueDateChange}
                placeholder="Due Date"
            /><br/>
            <textarea
                aria-label="Write Note"
                id="note-text-entry"
                value={textValue}
                onChange={handleTextEntry}
                placeholder="take a note"
            ></textarea><br/>
            <button aria-label="Submit Note" onClick={submitNote}>Add</button>
        </div>
    );
}

