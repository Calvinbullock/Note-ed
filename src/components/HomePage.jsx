
import React from "react";
import "./HomePage.css"

import Nav from "./nav/Nav";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";
import { useAppContext } from './AppContext';

export default function HomePage({noteData}) {

    const { theme } = useAppContext();

    return (
     <div className={`home page ${theme}`}>
            <Nav/>
            
            <section id="note-section">
                <div id="home-edit-note">
                    <NoteEditor />
                </div>

                <div id="note-contianer">
                    {noteData != null && noteData.map((element, index) => (
                        <NoteCard key={index} {...element} />
                    ))}
                </div>
            </section>   
        </div>
    );
}
