
import React from "react";
import Nav from "./Nav";
import NoteCard from "./NoteCard";

const props = {
    title: "shop", 
    date: "Nov 2, 2024",
    content: "lorm pop yop",
};

function Home() {
    return (
        <div className="home">
            <Nav/>
            <NoteCard {...props}/>


        </div>
    )
}

export default Home
