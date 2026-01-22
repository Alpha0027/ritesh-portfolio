import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, category, description, image, link }) => {
    return (
        <div className="project-card-container">
            <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
                <div className="project-image">
                    <div className="img-placeholder-rect"></div> {/* Placeholder */}
                </div>
                <div className="project-content">
                    <span className="project-category">{category}</span>
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <span className="project-link">View Case Study &rarr;</span>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
