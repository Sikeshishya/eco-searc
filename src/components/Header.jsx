import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>EcoSearch</h1>
            <nav>
                <a href="#features">Features</a>
                <a href="#join">Join the Waitlist</a>
            </nav>
        </header>
    );
};

export default Header;
