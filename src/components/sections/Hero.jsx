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
                    User Experience Designer <br />
                    <span className="highlight">crafting intuitive</span> digital experiences.
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    I help brands build trust and drive growth through strategic design and storytelling.
                </motion.p>
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Button href="#work" variant="primary">View My Work</Button>
                    <Button href="#contact" variant="secondary" className="btn-outline">Contact Me</Button>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
