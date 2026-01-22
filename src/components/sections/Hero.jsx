import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
    return (
        <Section id="home" className="hero-section">
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Ritesh Adluru <br />
                    <span className="highlight">Data/AI engineer</span> & full-stack developer.
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    I ship analytics-heavy products end-to-end—pipelines, APIs, and front-end experiences that make complex data easy to act on.
                </motion.p>
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Button href="#work" variant="primary">See projects</Button>
                    <Button href="https://github.com/Alpha0027" variant="secondary" className="btn-outline">View GitHub</Button>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
