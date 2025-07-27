import './css/App.css';
import React from 'react';
import Navb from './component/navb';
import Main from './component/Main';
import Footer from './component/Footer'
import Skill from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contactus';
import About from './component/About';
import Blogs from './component/Blogs';
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navb/>
        <PageTransition>
          {/* Hero Section */}
          <section id="home">
            <Main/>
          </section>
          
          {/* Skills Section */}
          <section id="skills">
            <Skill/>
          </section>
          
          {/* About Section */}
          <section id="about">
            <About/>
          </section>
          
          {/* Projects Section */}
          <section id="projects">
            <Project/>
          </section>
          
          {/* Blogs Section */}
          <section id="blogs">
            <Blogs/>
          </section>
          
          {/* Contact Section */}
          <section id="contact">
            <Contact/>
          </section>
        </PageTransition>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
