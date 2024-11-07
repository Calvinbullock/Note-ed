
import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { auth } from "./../../config/firebase";
import { useAppContext } from "../AppContext"

import "./Nav.css"

export default function Nav() {

    const navigate = useNavigate();
    const { toggleTheme } = useAppContext();

    const handleSignIn = () => {
        navigate('/signIn');
    };

    const handleDarkModeChange = () => {
        console.log("TODO: in Nav.jsx");
        toggleTheme();
    }

    const handleSearch = () => {
        console.log("TODO: in Nav.jsx");
    };

    return (
        <div className="nav">
            <Link to="/"><img src="" alt="logo" /></Link>
            <input
                aria-label="searchBar"
                onChange={handleSearch}
                id="nav-search"
                type=""
                name="search"
                placeholder="search"
            />

            {(auth.currentUser == null) ? (
                <button
                    aria-label="SignIn"
                    onClick={handleSignIn}
                    id="signIn-button"
                    type=""
                >Sign In</button>
            ) : (
                    <button
                        aria-label="SignOut"
                        onClick={() => auth.signOut() }
                        id="signIn-button"
                        type=""
                    >Sign Out</button>
                )}
            <button
                aria-label="Dark Mode Toggle"
                onClick={handleDarkModeChange}
                id="dark-mode-switch"
                type=""
            >Dark Mode</button>
        </div>
    );
}
