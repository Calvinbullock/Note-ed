
import React, { useState } from "react";

export default function Login() {

    const [ emailValue, setEmailValue ] = useState("")
    const [ passwordValue, setPassword] = useState("")

    const handleEmailEntry = (event) => {
        setEmailValue(event.target.value);
    }
    const handlePasswordEntry = (event) => {
        setPassword(event.target.value);
    }
    
    const signIn = (email, password) => {
        fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle successful sign-in
                localStorage.setItem('auth_token', data.token);
                // Redirect to a protected page or update UI
            })
            .catch((error) => {
                // Handle errors
                console.error('Error signing in:', error);
            });
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
