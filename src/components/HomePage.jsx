
import React, { useState } from "react";
import "./HomePage.css"

import Nav from "./nav/Nav";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";
import { useAppContext } from './AppContext';

export default function HomePage({noteData}) {

    const { theme } = useAppContext();
    const [selectedSort, setSort] = useState('A-Z');

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    if (selectedSort === "A-Z") {
        noteData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === "Z-A") {
        noteData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (selectedSort === "newest") {
        noteData.sort((a, b) => (b.dateEpoch - a.dateEpoch))
    } else if (selectedSort === "oldest") {
        noteData.sort((a, b) => (a.dateEpoch - b.dateEpoch))
    }

    return (
     <div className={`home page ${theme}`}>
            <Nav/>
            <section id="note-section">
                <div id="home-edit-note">
                    <NoteEditor />
                </div>

                <div id="note-contianer">
                    <label htmlFor="select-search">Sort By   </label>
                    <select id="select-search" value={selectedSort} onChange={handleSortChange}>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>   
                    <div id="note-grid">
                        {noteData != null && noteData.map((element, index) => (
                            <NoteCard key={index} {...element} />
                        ))}
                    </div>
                </div>
            </section>   
        </div>
    );
}
