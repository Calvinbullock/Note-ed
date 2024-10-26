
import React from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

import "./NoteCard.css"

export default function NoteCard(props) {

    const deleteNote = async () => {
        try {
            const noteDoc = doc(db, "Notes", props.id);
            await deleteDoc(noteDoc);
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div className="noteCard" id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p>{props.text}</p>
            <button onClick={deleteNote} type="deleteNote">DELETE</button>
        </div>
    );
}

