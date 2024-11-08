
import React from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useAppContext } from './AppContext';

import "./NoteCard.css"
export default function NoteCard(props) {

    const { theme } = useAppContext();

    const deleteNote = async () => {
        try {
            const noteDoc = doc(db, "Notes", props.id);
            await deleteDoc(noteDoc);
        } catch (err) {
            console.error(err);
        }
    };

    const editNote = async () => {

    }

    return (
        <div className={`noteCard ${theme}`} id={props.id}>
            <h3>{props.title}</h3>
            <p>Note From: {props.date}</p>
            {(props.dueDate !== "") && <p>Due On: {props.dueDate}</p>}
            <p>{props.text}</p>

            <div className="noteCard-buttons" >
                <button
                    className="delete-note-button"
                    aria-label="Delete Note"
                    onClick={deleteNote}
                    type="deleteNote"
                >DELETE</button>

                <button
                    className="edit-note-button"
                    aria-label="Edit Note"
                    onClick={editNote}
                    type="editNote"
                >EDIT</button>
            </div>
        </div>
    );
}

