
import React from "react";

import Nav from "./nav/Nav";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";

export default function HomePage({noteData}) {

    return (
        <div className="home page">
            <Nav/>
            <NoteEditor />
            
            {noteData != null && noteData.map((element, index) => (
                <NoteCard key={index} {...element} />
            ))}
        </div>
    );
}



// TODO: need to add an event listener for a new note added then re render the
//      note list
// TODO: need an idea for each note

// NOTE: layout like this???
//     ___________________
//     |______nav________|
//     |      | note note|
//     | edit | note note|
//     |      | note note|
//     -------------------
