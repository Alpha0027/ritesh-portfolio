import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Ritesh Adluru</h3>
                        <p>Crafting digital experiences with passion and precision.</p>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Ritesh Adluru. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
