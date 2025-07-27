import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Work from './images/work.svg';
import Circle from './images/circle.svg';
import './css/styles.css';

const Main = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const roles = [
    'Data Engineer',
    2000,
    'Python Developer', 
    2000,
    'Cloud Engineer',
    2000,
    'Data Pipeline Architect',
    2000,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={`hero-section ${theme}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container fluid className="min-vh-100 d-flex align-items-center position-relative">
        <motion.div className="hero-background-circle" />
        <motion.img 
          id="Circle" 
          src={Circle} 
          alt="circle"
          variants={imageVariants}
        />
        
        <Row className="w-100 align-items-center">
          <Col lg={6} md={12} className="hero-content">
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="hero-greeting"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello there! 
                <motion.img 
                  height="60px" 
                  alt="Hand" 
                  src="https://raw.githubusercontent.com/Brillianttyagi/Brillianttyagi/master/hand.gif"
                  className="ms-3"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                />
              </motion.h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="hero-name">I'm <span className="name-highlight">Deepanshu Tyagi</span></h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-role-container">
              <h3 className="hero-role-prefix">I'm a </h3>
              <TypeAnimation
                sequence={roles}
                wrapper="span"
                speed={50}
                style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold',
                  color: '#6366f1',
                  display: 'inline-block',
                  minHeight: '2.2rem'
                }}
                repeat={Infinity}
                className="hero-role-text"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-description">
              <p className="lead">
                Passionate Data Engineer specializing in building scalable data pipelines, ETL processes, and cloud-native data solutions. 
                Experienced in Apache Airflow, AWS/GCP, and processing millions of records daily.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-actions">
              <Button 
                variant="primary" 
                size="lg" 
                className="me-3 hero-cta-primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg"
                className="hero-cta-secondary"
                href="https://drive.google.com/file/d/1BUQDlfjI15MYQKErLx157MRJk30hbuQT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
            </motion.div>
          </Col>
          
          <Col lg={6} md={12} className="hero-image-container">
            <motion.img 
              className="hero-image" 
              src={Work} 
              alt="Programming illustration"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Col>
        </Row>
        
        {/* Floating Elements */}
        <motion.div 
          className="floating-element floating-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="floating-element floating-2"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="floating-element floating-3"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </Container>
    </motion.div>
  );
};

export default Main;