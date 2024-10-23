
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [ emailValue, setEmailValue ] = useState("")
    const [ passwordValue, setPassword] = useState("")

    const handleEmailEntry = (event) => {
        setEmailValue(event.target.value);
    }
    const handlePasswordEntry = (event) => {
        setPassword(event.target.value);
    }

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
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
        </div>
    )
}
