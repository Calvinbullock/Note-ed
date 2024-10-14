
import React from "react";
import { useNavigate, Link } from 'react-router-dom';

export default function Nav() {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signIn');
    };

    return (
        <div className="nav">
            <Link to="/"><img src="" alt="logo" /></Link>
            <input id="nav-search" type="" name="search" value="search" placeholder="search"/>
            <button onClick={handleClick} id="signIn-button" type="">Sign In</button>
            <button id="dark-mode-switch" type="">Dark Mode</button>
        </div>
    );
}
