
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
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
        <div class="login-box">
            <input 
                type="email" 
                name="email" 
                value={emailValue}
                onChange={handleEmailEntry}
                placeholder="email"
            /><br/>
            <input 
                type="password" 
                name="" 
                value={passwordValue}
                onChange={handlePasswordEntry}
                placeholder="password"
            /><br/>
            <button onClick={signIn} type="button">Sign In</button>
            <p id="alt-sign-up" > Click here to make an account <a href="/SignUp">Sign Up</a></p>
        </div>
    )
}
