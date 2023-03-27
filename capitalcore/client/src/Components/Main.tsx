import React from "react";
import { useState } from "react";

export default function Main() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };
    function handleSignup(e: React.FormEvent) {
        e.preventDefault();
        console.log(email, password)
    }
    return(
        <section>
            <div className="signup-container">
                <h3 className="process-step-text1">1. Create free Account</h3>
                <div className="signup-container-form">
                    <form className="signup-form" onSubmit={handleSignup}>
                        <input required className="email-input" type="email"
                                placeholder="E-Mail" onChange={handleEmailChange}/>
                        <input required className="password-input" type="password"
                                placeholder="Password" onChange={handlePasswordChange}/>
                        <button className="signup-form-button">Sign Up</button>
                    </form> 
                </div>
            </div>
            <div className="tolerance-container">
                <h3 className="process-step-text2">2. Select Risk Tolerance</h3>
            </div>
        </section>
    )
}