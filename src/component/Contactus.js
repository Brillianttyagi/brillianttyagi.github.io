import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane,
  faUser,
  faTag,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { 
    faGithub, 
  faTwitter, 
  faLinkedin,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import './css/contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "deepanshu.tyagi@example.com",
      link: "mailto:deepanshu.tyagi@example.com",
      color: "#ea4335"
    },
    {
      icon: faPhone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXX",
      color: "#34a853"
    },
    {
      icon: faMapMarkerAlt,
      title: "Location",
      value: "Gurugram, India",
      link: "#",
      color: "#4285f4"
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      name: "GitHub",
      url: "https://github.com/Brillianttyagi",
      color: "#333",
      description: "Check out my code repositories"
    },
    {
      icon: faLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepanshu-tyagi-355855198/",
      color: "#0077b5",
      description: "Connect with me professionally"
    },
    {
      icon: faTwitter,
      name: "Twitter",
      url: "https://twitter.com/imaprogramr",
      color: "#1da1f2",
      description: "Follow my tech thoughts"
    },
    {
      icon: faCodepen,
      name: "CodeChef",
      url: "https://www.codechef.com/users/yesimaprogramr",
      color: "#5b4638",
      description: "Check my coding challenges"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertVariant('danger');
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertVariant('danger');
      setAlertMessage('Please enter a valid email address.');
      setShowAlert(true);
      return;
    }

    // Simulate form submission
    setAlertVariant('success');
    setAlertMessage('Thank you for your message! I\'ll get back to you soon.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="contact-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Container>
        {/* Header */}
        <motion.div className="contact-header text-center mb-5" variants={itemVariants}>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Let's discuss your next project or just say hello! I'm always excited to work on new challenges.
          </p>
        </motion.div>

        <Row>
          {/* Contact Info & Social Links */}
          <Col lg={5} md={12} className="mb-4">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="mb-4">
              <Card className="contact-info-card">
                <Card.Body>
                  <h3 className="card-title mb-4">Let's Talk</h3>
                  <p className="card-description">
                    I'm currently available for freelance work and full-time opportunities. 
                    Whether you have a project in mind or just want to chat about technology, 
                    feel free to reach out!
                  </p>
                  
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      className="contact-info-item"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="info-icon" style={{ color: info.color }}>
                        <FontAwesomeIcon icon={info.icon} />
                      </div>
                      <div className="info-content">
                        <h6 className="info-title">{info.title}</h6>
                        {info.link !== "#" ? (
                          <a href={info.link} className="info-value">
                            {info.value}
                          </a>
                        ) : (
                          <span className="info-value">{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </Card.Body>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="social-links-card">
                <Card.Body>
                  <h3 className="card-title mb-4">Connect With Me</h3>
                  <div className="social-links-grid">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-item"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="social-icon" style={{ color: social.color }}>
                          <FontAwesomeIcon icon={social.icon} size="2x" />
                        </div>
                        <div className="social-content">
                          <h6 className="social-name">{social.name}</h6>
                          <p className="social-description">{social.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={7} md={12}>
            <motion.div variants={itemVariants}>
              <Card className="contact-form-card">
                <Card.Body>
                  <h3 className="card-title mb-4">Send Me a Message</h3>
                  
                  {showAlert && (
                    <Alert 
                      variant={alertVariant} 
                      onClose={() => setShowAlert(false)} 
                      dismissible
                      className="mb-4"
                    >
                      {alertMessage}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <FontAwesomeIcon icon={faUser} className="me-2" />
                            Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="modern-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            Email *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="modern-input"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FontAwesomeIcon icon={faTag} className="me-2" />
                        Subject
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="modern-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        <FontAwesomeIcon icon={faComment} className="me-2" />
                        Message *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hi!"
                        required
                        className="modern-input"
                      />
                    </Form.Group>

                    <div className="form-actions">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg"
                          className="submit-btn"
                        >
                          <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                          Send Message
                        </Button>
                      </motion.div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="contact-cta text-center mt-5">
          <Card className="cta-card">
            <Card.Body>
              <h3 className="cta-title">Ready to Work Together?</h3>
              <p className="cta-text">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Let's create something amazing together!
              </p>
              <div className="cta-stats">
                <div className="stat-item">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Contact;