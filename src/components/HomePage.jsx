
import React from "react";
import { getNotesFromLocalStorage } from "../utils/utils";

import Nav from "./Nav";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";

const props = {
    title: "shop", 
    date: "Nov 2, 2024",
    text: "lorm pop yop",
};

export default function HomePage() {
    let notesList = getNotesFromLocalStorage();

    return (
        <div className="home">
            <Nav/>
            <NoteEditor {...props}/>
            
            {notesList != null && notesList.map((element, index) => (
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
