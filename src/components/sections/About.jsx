import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import './About.css';

const About = () => {
    return (
        <Section id="about" background="light">
            <div className="about-grid">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/Me.jpeg" alt="Portrait of me" style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }} />
                </motion.div>
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>About Me</h2>
                    <p>
                        I'm a multidisciplinary designer with a passion for creating accessible and delightful user experiences.
                        With over 5 years of experience in the industry, I've had the privilege of working with diverse clients
                        ranging from early-stage startups to established enterprises.
                    </p>
                    <p>
                        My design philosophy centers on empathy and clarity. I believe that good design should not only look beautiful
                        but also solve real problems and make technology more inclusive.
                    </p>
                    <ul className="skills-list">
                        <li>UI/UX Design</li>
                        <li>User Research</li>
                        <li>Prototyping</li>
                        <li>Front-end Dev</li>
                        <li>Brand Strategy</li>
                        <li>Accessibility</li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
