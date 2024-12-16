import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';

const About = () => {
  return (
    <Section
      className="min-h-screen py-5"
      style={{
        backgroundColor: '#333333', // Set background color to dark grey
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mt-5 pt-5"
      >
        <h1 className="display-4 mb-4" style={{ color: '#555' }}> {/* Text color set to white */}
          About Me
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <p className="lead" style={{ color: '#fff' }}>
              Hello! I'm Veera Siva Abhishek, a passionate Cybersecurity Expert and Full Stack Developer
              with a deep interest in creating secure and scalable applications.
            </p>
            <p style={{ color: '#fff' }}>
              With expertise in multiple technology stacks including MERN, Python, Java, and PHP,
              I bring a comprehensive approach to both security and development. My background in
              ethical hacking and penetration testing allows me to build applications with security
              at their core.
            </p>
            <h3 className="mt-4" style={{ color: '#fff' }}> {/* Text color set to white */}
              Education
            </h3>
            <ul className="list-unstyled">
              <li className="mb-3" style={{ color: '#fff' }}>
                <h5>B.Tech in Computer Science</h5>
                <h5>KL University - 2020-2024</h5>
                
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h3 style={{ color: '#fff' }}> {/* Text color set to white */}
              Certifications
            </h3>
            <ul className="list-unstyled">
              <li className="mb-3" style={{ color: '#fff' }}>
                <h5>Certified Ethical Hacker (CEH)</h5>
                <h5>EC-Council - 2023</h5>
               
              </li>
              <li className="mb-3" style={{ color: '#fff' }}>
                <h5>AWS Certified Solutions Architect</h5>
                <h5>Amazon Web Services - 2023</h5>
                
              </li>
              <li className="mb-3" style={{ color: '#fff' }}>
                <h5>MERN Stack Development</h5>
                <h5>MongoDB University - 2022</h5>
                
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
