import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, category, summary, problem, approach, impact, live, repo }) => {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="project-image">
                    <div className="img-placeholder-rect"></div>
                </div>
                <div className="project-content">
                    <span className="project-category">{category}</span>
                    <h3 className="project-title">{title}</h3>
                    <p className="project-summary">{summary}</p>
                    <ul className="project-highlights">
                        {problem && (
                            <li>
                                <span className="highlight-label">Problem</span>
                                <span>{problem}</span>
                            </li>
                        )}
                        {approach && (
                            <li>
                                <span className="highlight-label">Approach</span>
                                <span>{approach}</span>
                            </li>
                        )}
                        {impact && (
                            <li>
                                <span className="highlight-label">Impact</span>
                                <span>{impact}</span>
                            </li>
                        )}
                    </ul>
                    <div className="project-links">
                        {live && (
                            <a href={live} target="_blank" rel="noopener noreferrer" className="project-link">
                                Live / Demo
                            </a>
                        )}
                        {repo && (
                            <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
