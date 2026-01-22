import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import './Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojjoyqd';
const MAIL_SUBJECT = 'Project inquiry';
const MAIL_BODY = "Hi Ritesh,\n\nI'd like to chat about ...";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=riteshadluru07@gmail.com&su=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

const Contact = () => {
    return (
        <Section id="contact">
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h2>Let's work together</h2>
                    <p>
                        Tell me about the product or problem you're tackling - data pipelines, dashboards, or a polished front-end.
                        I reply within a day.
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">riteshadluru07@gmail.com</a></p>
                        <p><strong>Location:</strong> Burnaby, British Columbia, Canada</p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/Alpha0027" target="_blank" rel="noopener noreferrer">Alpha0027</a></p>
                        <p><strong>Availability:</strong> Open to data/AI + full-stack roles</p>
                    </div>
                    <div className="contact-actions">
                        <Button href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" variant="primary">Email me</Button>
                        <Button href="https://github.com/Alpha0027" target="_blank" rel="noopener noreferrer" variant="secondary" className="btn-outline">View GitHub</Button>
                    </div>
                </div>
                <form className="contact-form" action={FORMSPREE_ENDPOINT} method="POST">
                    <input type="hidden" name="_subject" value="New portfolio contact" />
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="_replyto" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
