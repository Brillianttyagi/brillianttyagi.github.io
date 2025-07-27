import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faTwitter, 
  faLinkedin, 
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/Brillianttyagi",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/imaprogramr", 
      label: "Twitter",
      color: "#1da1f2"
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/deepanshu-tyagi-355855198/",
      label: "LinkedIn", 
      color: "#0077b5"
    },
    {
      icon: faCodepen,
      url: "https://www.codechef.com/users/yesimaprogramr",
      label: "CodeChef",
      color: "#5b4638"
    },
    {
      icon: faEnvelope,
      url: "mailto:deepanshu.tyagi@example.com",
      label: "Email",
      color: "#ea4335"
    }
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="modern-footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container>
        <Row className="footer-content">
          <Col lg={6} md={12} className="footer-info">
            <motion.div variants={itemVariants}>
              <h5 className="footer-title">Deepanshu Tyagi</h5>
              <p className="footer-subtitle">Data Engineer & Problem Solver</p>
              <p className="footer-description">
                Building scalable data solutions and sharing knowledge with the community.
                Always excited to work on challenging projects and innovative technologies.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={6} md={12} className="footer-links">
            <motion.div variants={itemVariants}>
              <h6 className="footer-section-title">Connect With Me</h6>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      color: link.color
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <div className="footer-divider"></div>
          <Row className="footer-bottom-content">
            <Col md={6} className="text-center text-md-start">
              <p className="copyright">
                © {currentYear} Deepanshu Tyagi. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <p className="made-with">
                Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> using React & Bootstrap
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;