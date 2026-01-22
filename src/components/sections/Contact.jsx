import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import './Contact.css';

const Contact = () => {
    return (
        <Section id="contact">
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h2>Let's work together</h2>
                    <p>
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and I'll get back to you as soon as possible.
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> active.user@example.com</p>
                        <p><strong>Location:</strong> San Francisco, CA</p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
