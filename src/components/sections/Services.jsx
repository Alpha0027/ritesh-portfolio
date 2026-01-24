import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import './Services.css';

const services = [
    {
        title: "Data ingestion & warehousing",
        desc: "Designing pipelines that land, validate and model data into analytics-ready warehouses so teams trust their metrics."
    },
    {
        title: "API development",
        desc: "Building performant, well-documented APIs that connect products, unlock integrations and keep data flowing securely."
    },
    {
        title: "Dashboards & visualizations",
        desc: "Translating questions into interactive dashboards and stories that spotlight signal over noise for decision-makers."
    },
    {
        title: "Analytics platforms & ops",
        desc: "Standing up environments, CI/CD and observability for data services so releases stay reliable and debuggable."
    }
];

const Services = () => {
    return (
        <Section id="services" background="light">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2>Expertise</h2>
                <p className="services-lead">Hands-on engineering services focused on reliable data flows, clear APIs and decision-ready insights.</p>
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
