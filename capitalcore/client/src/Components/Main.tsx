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
        <section className="process-step-container">
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
                <div className="tolerance-container-shadow">
                    <div className="tolerance-level1"><h4>Low Risk</h4></div>
                    <div className="tolerance-level2"><h4>Average Risk</h4></div>
                    <div className="tolerance-level3"><h4>High Risk</h4></div>
                </div>
            </div>
            <div className="portfolio-container">
                <h3 className="process-step-text3">3. Receive Optimized Portfolio</h3>
                <div className="portfolio-container-shadow">
                    <img className="portfolio-graphic-image" src="./resources/portfolio graphic.png" alt="Portfolio Graphic" />
                </div>
            </div>
        </section>
    )
}