import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import './About.css';

const About = () => {
    const portraitSrc = `${import.meta.env.BASE_URL}Me.jpeg`;

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
                    <img src={portraitSrc} alt="Portrait of me" style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }} />
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
                        I'm a data/AI engineer and full-stack developer who loves turning ambiguous problems into shipped products.
                        I move between pipelines, APIs, and front-end work so teams can see insights faster and act with confidence.
                    </p>
                    <p>
                        Right now I'm focused on analytics-heavy experiences, real-time dashboards, and performant web apps. Open to freelance,
                        contract, and full-time product engineering roles.
                    </p>
                    <div className="about-meta">
                        <div>
                            <h4>Core strengths</h4>
                            <ul className="skills-list">
                                <li>Data pipelines (Spark, Docker)</li>
                                <li>React + Vite front-ends</li>
                                <li>APIs and integrations</li>
                                <li>Dashboards & storytelling</li>
                                <li>Design systems & accessibility</li>
                                <li>Rapid prototyping</li>
                            </ul>
                        </div>
                        <div className="about-links">
                            <p><strong>Based:</strong> Burnaby, British Columbia, Canada</p>
                            <p><strong>Contact:</strong> <a href="mailto:riteshadluru07@gmail.com">riteshadluru07@gmail.com</a></p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/Alpha0027" target="_blank" rel="noopener noreferrer">Alpha0027</a></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
