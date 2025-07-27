import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/logo.png';

const Navb = () => {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'about', 'projects', 'blogs', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applyTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' }
  ];

  const isActiveSection = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}
      variant={theme}
    >
      <Container>
        <Navbar.Brand 
          className="brand-container" 
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="d-flex align-items-center"
          >
            <img 
              src={Logo} 
              alt="Portfolio Logo" 
              width="45" 
              height="45"
              className="rounded-circle"
            />
          </motion.div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Nav.Link 
                  className={`navlinkh ${isActiveSection(item.id) ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.label}
                </Nav.Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Nav.Link
                href="https://drive.google.com/file/d/1BUQDlfjI15MYQKErLx157MRJk30hbuQT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="navlinkh resume-link"
              >
                Resume
              </Nav.Link>
            </motion.div>

            <motion.button
              className="theme-toggle ms-3"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5 }}
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon 
                icon={theme === 'light' ? faMoon : faSun} 
                size="lg"
                className={`theme-icon ${theme}`}
              />
            </motion.button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;