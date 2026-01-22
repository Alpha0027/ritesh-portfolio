import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';

const projects = [
    {
        id: 1,
        title: "CityScale",
        category: "Data Engineering",
        description: "A robust platform for real-time urban data processing, leveraging Docker and Apache Spark for scalable analytics.",
        link: "https://github.com/ritesh-adluru/cityscale"
    },
    {
        id: 2,
        title: "CarePlus",
        category: "Full-Stack Health",
        description: "A patient-centric healthcare management system designed to streamline clinical workflows and improve patient care coordination.",
        link: "https://carepulse-three.vercel.app/"
    },
    {
        id: 3,
        title: "Crime Analytics Dashboard",
        category: "Data Visualization",
        description: "An interactive dashboard visualizing crime patterns through dynamic heatmaps, aiding in data-driven safety assessments.",
        link: "https://huggingface.co/spaces/rit0027/crime-analytics"
    },
    {
        id: 4,
        title: "Classic Tic Tac Toe",
        category: "Frontend Development",
        description: "A sleek, animated version of the classic game, featuring smooth transitions and responsive gameplay powered by Framer Motion.",
        link: "https://github.com/ritesh-adluru/tic-tac-toe"
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
                <p>A selection of projects that showcase my passion for user-centered design.</p>
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
