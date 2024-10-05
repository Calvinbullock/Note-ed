
import React, { useState } from "react";
import { setNotesLocalStorage, getEpochTimeInSeconds } from "../utils/utils";

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
            id: getEpochTimeInSeconds(),
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
                <button type="addNote">Add</button>
                <button type="deleteNote">DELETE</button>
            </form>
        </div>
    )
}

export default NoteEditor
