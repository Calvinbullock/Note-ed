

import React from "react";

function NoteCard(props) {
    return (
        <div className="noteCard">
            <title>{props.title}</title>
            <p>{props.date}</p>
            <p>{props.content}</p>

            <button type="deleteNote">DELETE</button>
        </div>
    )
}

export default NoteCard
