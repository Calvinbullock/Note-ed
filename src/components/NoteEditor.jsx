// react / firebase
import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, updateDoc} from "firebase/firestore";

// config
import { db, auth } from "./../config/firebase";

// components
import { formatEpochTime, getNoteLocalStorage} from "../utils/utils";
import { useAppContext } from "./AppContext";

import "./NoteEditor.css"

/*  ===============================================
 *  COMPONENT DEFINITION
 * ============================================= */
export default function NoteEditor() {
    const notesCollectionRef = collection(db, "Notes"); // dataBase connection

    const [ titleValue, setTitleEntry ] = useState("")
    const [ dueDateValue, setDueDateEntry ] = useState("")
    const [ textValue, setTextEntry ] = useState("")
    const [ noteId, setId] = useState("")

    const { wasEditNoteClicked, setEditNoteWasClicked} = useAppContext();

    // value changes handlers
    const handleIdEntry = (event) => {
        setId(event.target.value);
    }
    const handleTitleEntry = (event) => {
        setTitleEntry(event.target.value);
    }
    const handleDueDateChange = (event) => {
        setDueDateEntry(event.target.value);
    }
    const handleTextEntry = (event) => {
        setTextEntry(event.target.value);
    }

    /*  ===============================================
     *  Clear Editor
     * ============================================= */
    const clearEditor = () => {
        setTitleEntry("");
        setDueDateEntry("");
        setTextEntry("");
        setEditNoteWasClicked(false);
    };

    /*  ===============================================
     *  Auto Adjust the text area to fit the content
     * ============================================= */
    useEffect(() => {
        const textarea = document.querySelector('.noteEditor textarea');
        const container = textarea.parentNode;

        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
            container.style.height = 'auto';
        });
    }, []);

    /*  ==============================================================================================
     *  Edit Existing Note
     * ============================================================================================ */

    /*  ===============================================
     *  Note Editor State
     *      get the note saved in local storage and
     *      set the values for the editor
     * ============================================= */
    useEffect(() => {
        const noteEdit = getNoteLocalStorage();

        if (noteEdit != null) {
            setId(noteEdit.id);
            setTitleEntry(noteEdit.title);
            setDueDateEntry(noteEdit.dueDate)
            setTextEntry(noteEdit.text);
        }

    }, [wasEditNoteClicked])

    /*  ===============================================
     *  Submit Edited Note
     *      submit the new note content
     * ============================================= */
    const submitNoteEdit = async () => {
        const docRef = doc(db, "Notes", noteId);

        try {
            await updateDoc(docRef, {
                title: titleValue,
                dueDate: dueDateValue,
                text: textValue,
                //userId: auth?.currentUser?.uid,
            });
            clearEditor();

        } catch (err) {
            console.error(err);
        }
    };

    /*  ==============================================================================================
     *  Edit New Note
     * ============================================================================================ */

    /*  ===============================================
     *  Submit the note to fireBase
     * ============================================= */
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
            clearEditor();

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="noteEditor">
            <input
                id="note-id-entry"
                type="text"
                name="idEntry"
                value={noteId}
                onChange={handleIdEntry}
            /><br/>
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

            <div className="noteEditor-buttons">

                {(wasEditNoteClicked) ?
                    (
                        <button
                            aria-label="Submit Edited Note"
                            onClick={submitNoteEdit}
                        >Re-Add Note</button>
                    ) : (
                        <button
                            aria-label="Submit Note"
                            onClick={submitNote}
                        >Add Note</button>
                    )
                }
                <button
                    aria-label="Clear Note Editor"
                    onClick={clearEditor}
                >clear</button>
            </div>
        </div>
    );
}

