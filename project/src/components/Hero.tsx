import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Section } from './ui/Section';

const Hero = () => {
  return (
    <Section
      className="min-h-screen d-flex align-items-center text-white position-relative overflow-hidden"
      style={{
        backgroundColor: 'transparent', // Transparent background
      }}
    >
      <div className="row align-items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-lg-6"
        >
          <h1 className="display-3 fw-bold mb-4">Veera Siva Abhishek</h1>
          <h2 className="h3 mb-4">Cybersecurity Expert & Full Stack Developer</h2>
          <p className="lead mb-4">
            Specializing in ethical hacking, web security, and full-stack development
            across multiple technology stacks including MERN, Python, Java, and PHP.
          </p>
          <motion.a
            href="mailto:2200031363@kluniversity.in"
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="me-2" /> Contact Me
          </motion.a>
        </motion.div>
        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            whileHover={{ 
              scale: 1.1, 
              opacity: 1, 
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)' 
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            className="position-relative d-flex justify-content-center align-items-center"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
            }}
          >
            <img
              src="abhi.jpg"
              alt="Profile"
              className="img-fluid w-100 h-100"
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
