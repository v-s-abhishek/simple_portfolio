import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedCard } from './ui/AnimatedCard';
import { Section } from './ui/Section';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <Section
      className="text-white" // Keep text white for visibility
      id="projects"
      style={{
        backgroundColor: 'transparent', // Transparent background for the section
      }}
    >
      <h2 className="text-center mb-5">Featured Projects</h2>
      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-4">
            <AnimatedCard delay={index * 0.1}>
              <div
                className="card text-white h-100" // Removed bg-dark class
                style={{
                  backgroundColor: 'transparent', // Completely transparent card background
                  border: 'none', // Remove borders
                  boxShadow: 'none', // Remove shadow to maintain transparency
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    objectFit: 'cover', // Ensure the image covers the card
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.25rem', // Slight border radius to the image
                  }}
                />
                <div className="card-body" style={{ padding: '1rem' }}>
                  <h5 className="card-title" style={{ color: '#fff' }}>
                    {project.title}
                  </h5>
                  <p className="card-text" style={{ color: '#fff' }}>
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-primary"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        className="btn btn-outline-light btn-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="me-1" size={16} /> Code
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        className="btn btn-primary btn-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="me-1" size={16} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
