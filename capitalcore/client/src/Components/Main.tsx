import React from "react";

export default function Main() {
    function handleSignup(e: React.FormEvent) {
        e.preventDefault();
        console.log(e.value)
    }
    function handleButtonPress (e) {
        console.log(e.value)
    }
    return(
        <section>
            <div className="signup-container">
                <h3 className="process-step-text">1. Create free Account</h3>
                <div className="signup-container-form">
                    <form className="signup-form" onSubmit={handleSignup}>
                        <input required className="email-input" type="email"
                                placeholder="E-Mail"/>
                        <input required className="password-input" type="password"
                                placeholder="Password" />
                        <button className="signup-form-button" onClick={handleButtonPress}>Sign Up</button>
                    </form> 
                </div>
            </div>
        </section>
    )
}