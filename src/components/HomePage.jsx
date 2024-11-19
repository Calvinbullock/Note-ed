
// react modules
import React, { useEffect, useState } from "react";

// components
import Nav from "./nav/Nav";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";
import { useAppContext } from './AppContext';

import "./HomePage.css"

/*  ===============================================
 *  COMPONENT DEFINITION
 * ============================================= */
export default function HomePage({noteData}) {

    const { theme, searchTarget, setSearchTarget } = useAppContext();
    const [selectedSort, setSort] = useState('A-Z');

    // sort change handler
    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    // Sort Notes based on selected start type
    if (selectedSort === "A-Z") {
        noteData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === "Z-A") {
        noteData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (selectedSort === "newest") {
        noteData.sort((a, b) => (b.dateEpoch - a.dateEpoch))
    } else if (selectedSort === "oldest") {
        noteData.sort((a, b) => (a.dateEpoch - b.dateEpoch))
    }

    // Note Search Filter
    useEffect(() => {
        if (searchTarget != null) {
            let fillterdNoteData = noteData?.filter(
                item => item.title.includes(searchTarget)
            );

            // TODO: show searched items
            console.log(fillterdNoteData)
        }
        setSearchTarget("");
        // eslint-disable-next-line
    }, [searchTarget]);

    // HTML Component
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
