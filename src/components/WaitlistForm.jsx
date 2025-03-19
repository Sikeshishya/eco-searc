import React, { useState } from 'react';
import './WaitlistForm.css';

const WaitlistForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for joining the waitlist, ${email}!`);
        setEmail('');
    };

    return (
        <section className="waitlist" id="join">
            <div className="waitlist-container">
                <h2>Join the Waitlist</h2>
                <p>Be the first to know when we launch!</p>
                <form onSubmit={handleSubmit} className="waitlist-form">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="waitlist-input"
                    />
                    <button type="submit" className="waitlist-button">Join Now</button>
                </form>
            </div>
        </section>
    );
};

export default WaitlistForm;
