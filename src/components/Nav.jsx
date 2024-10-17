
import React from "react";
import { useNavigate, Link } from 'react-router-dom';

export default function Nav() {
    
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signIn');
    };

    const handleDarkModeChange = () => {
        console.log("TODO: in Nav.jsx");
    }

    return (
        <div className="nav">
            <Link to="/"><img src="" alt="logo" /></Link>
            <input id="nav-search" type="" name="search" value="search" placeholder="search"/>
            <button onClick={handleSignIn} id="signIn-button" type="">Sign In</button>
            <button onClick={handleDarkModeChange} id="dark-mode-switch" type="">Dark Mode</button>
        </div>
    );
}
