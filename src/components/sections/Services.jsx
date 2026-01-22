import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import './Services.css';

const services = [
    { title: "User Research", desc: "Understanding your users deeply through interviews, surverys, and usability testing." },
    { title: "UI/UX Design", desc: "Crafting intuitive and beautiful interfaces that users love to interact with." },
    { title: "Prototyping", desc: "Building interactive high-fidelity prototypes to validate ideas before development." },
    { title: "Design Systems", desc: "Creating scalable design languages to ensure consistency across products." }
];

const Services = () => {
    return (
        <Section id="services" background="light">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2>My Expertise</h2>
                <p>Comprehensive design solutions to help you achieve your business goals.</p>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
