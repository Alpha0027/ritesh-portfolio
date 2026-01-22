import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';

const projects = [
    {
        id: 1,
        title: "CityScale",
        category: "Data engineering · Spark, Docker",
        summary: "Real-time urban data platform that cleans, enriches, and serves city feeds for dashboards.",
        problem: "City data arrives messy and delayed across sensors and sources.",
        approach: "Containerized Spark jobs handle batch and streaming ingestion with validation, feature prep, and an API for consumers.",
        impact: "Keeps dashboards trustworthy and reproducible while cutting manual data wrangling.",
        live: "https://github.com/Alpha0027/",
        repo: "https://github.com/Alpha0027/"
    },
    {
        id: 2,
        title: "CarePlus",
        category: "Full-stack health · Product experience",
        summary: "Patient-centric platform designed to streamline clinic workflows and keep teams aligned.",
        problem: "Clinics juggle scheduling, notes, and follow-ups across disconnected tools.",
        approach: "Built modular UI flows for intake, scheduling, and care plans with secure auth and role-based views.",
        impact: "Reduces context switching and keeps every visit documented in one place.",
        live: "https://carepulse-three.vercel.app/"
    },
    {
        id: 3,
        title: "Crime Analytics Dashboard",
        category: "Data visualization · Python, Plotly",
        summary: "Interactive dashboard to explore crime patterns across time and geography.",
        problem: "Analysts needed a faster way to see hotspots and trends without combing CSVs.",
        approach: "Aggregated incidents, layered heatmaps and filters, and shipped to a lightweight hosted app.",
        impact: "Enables quicker prioritization of patrol zones and data-backed briefs.",
        live: "https://huggingface.co/spaces/rit0027/crime-analytics"
    },
    {
        id: 4,
        title: "Classic Tic Tac Toe",
        category: "Frontend development · React, Framer Motion",
        summary: "Polished take on the classic game with animations and responsive layout.",
        problem: "Wanted a quick, delightful build to demo UI polish and state handling.",
        approach: "Built reusable board logic, motion-driven transitions, and mobile-friendly controls.",
        impact: "Shows front-end craft and attention to interaction details.",
        live: "https://github.com/Alpha0027/",
        repo: "https://github.com/Alpha0027/"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const Projects = () => {
    return (
        <Section id="work">
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Selected Work</h2>
                <p>Curated projects with clear problem, approach, and impact—plus links to code or live demos.</p>
            </div>
            <motion.div
                className="grid"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map(project => (
                    <motion.div key={project.id} variants={itemVariants} style={{ height: '100%' }}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Projects;
