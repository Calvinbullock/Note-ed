
import React, { useState } from "react";
import { setNotesLocalStorage } from "../utils/utils";

function NoteEditor(props) {
    const [ titleValue, setTitleEntry ] = useState("")
    const [ dateValue, setDateEntry ] = useState("")
    const [ textValue, setTextEntry ] = useState("")

    const handleTitleEntry = (event) => {
        setTitleEntry(event.target.value);
    }

    const handleDateChange = (event) => {
        setDateEntry(event.target.value);
    }

    const handleTextEntry = (event) => {
        setTextEntry(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();   

        let noteRespone = {
            title: titleValue,
            date: dateValue,
            text: textValue,
        }
        console.log('values:  ', noteRespone);
        setNotesLocalStorage(noteRespone)
    };

    return (
        <div className="noteEditor">
            <form onSubmit={handleSubmit}>
                <input 
                    id="note-title-entry" 
                    type="text" 
                    name="titleEntry" 
                    value={titleValue} 
                    onChange={handleTitleEntry} 
                    placeholder="Title"
                />
                <input 
                    id="note-date-entry" 
                    type="text" 
                    name="dateEntry" 
                    value={dateValue} 
                    onChange={handleDateChange} 
                    placeholder="Date"
                />
                <textarea 
                    value={textValue} 
                    onChange={handleTextEntry}
                    placeholder="take a note"
                ></textarea>
                <button type="deleteNote">DELETE</button>
            </form>
        </div>
    )
}

export default NoteEditor
