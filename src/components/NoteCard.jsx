
import React from "react";
import { deleteNoteFromLocal } from "../utils/utils";

const NoteCard = (props) => {

    const deleteNote = () => {
        console.log("yo")
        deleteNoteFromLocal(props.id)
    }

    return (
        <div className="noteCard" id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p>{props.text}</p>
            <button onClick={deleteNote} type="deleteNote">DELETE</button>
        </div>
    )
}

export default NoteCard
