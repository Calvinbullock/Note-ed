
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./SignIn-signUp.css"

export default function SignIn() {
    const [ emailValue, setEmailValue ] = useState("")
    const [ passwordValue, setPassword] = useState("")
    const navigate = useNavigate();

    const handleEmailEntry = (event) => {
        setEmailValue(event.target.value);
    }
    const handlePasswordEntry = (event) => {
        setPassword(event.target.value);
    }

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, emailValue, passwordValue);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="login-box">
            <input
                aria-label="Enter Account Email"
                type="email"
                name="email"
                value={emailValue}
                onChange={handleEmailEntry}
                placeholder="email"
            /><br/>
            <input
                aria-label="Enter Account Password"
                type="password"
                name=""
                value={passwordValue}
                onChange={handlePasswordEntry}
                placeholder="password"
            /><br/>
            <button aria-label="Sign In Button" onClick={signIn} type="button">Sign In</button><br/>

            <p id="alt-sign-up" > Click here to make an account <a href="/SignUp">Sign Up</a></p>
        </div>
    )
}
