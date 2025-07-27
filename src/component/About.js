import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faAward,
  faDatabase,
  faCloud,
  faUsers,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import './css/about.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Data Engineer",
      company: "Daffodil Software",
      location: "Gurugram, India",
      type: "work",
      icon: faBriefcase,
      description: [
        "Lead data pipeline development using Apache Airflow and Python",
        "Architect scalable solutions on AWS and GCP platforms",
        "Optimized ETL processes achieving 40% performance improvement"
      ],
      technologies: ["Python", "Apache Airflow", "AWS", "GCP", "Kubernetes", "Docker"]
    },
    {
      year: "2021 - 2023",
      title: "Data Engineer",
      company: "Daffodil Software", 
      location: "Gurugram, India",
      type: "work",
      icon: faBriefcase,
      description: [
        "Built data pipelines processing 10+ million records daily",
        "Implemented real-time streaming with Apache Kafka",
        "Developed automated testing for data quality assurance"
      ],
      technologies: ["Python", "SQL", "Apache Kafka", "PostgreSQL", "Redis", "Jenkins"]
    }
  ];

  const achievements = [
    {
      icon: faDatabase,
      title: "Data Pipeline Expert",
      description: "4+ years building scalable solutions"
    },
    {
      icon: faCloud,
      title: "Cloud Specialist", 
      description: "AWS & GCP certified professional"
    },
    {
      icon: faUsers,
      title: "Team Leadership",
      description: "Led teams of 4+ developers"
    },
    {
      icon: faAward,
      title: "Performance Optimization",
      description: "40% ETL improvement achieved"
    }
  ];



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
      className="about-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Container>
        {/* Header Section */}
        <motion.div className="about-header text-center mb-5" variants={itemVariants}>
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Passionate about transforming data into actionable insights and building scalable solutions
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div variants={itemVariants}>
          <Row className="align-items-center mb-4">
            <Col lg={4} md={12} className="text-center mb-4 mb-lg-0">
              <motion.div
                className="profile-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://avatars.githubusercontent.com/u/48671623?v=4" 
                  alt="Deepanshu Tyagi"
                  className="profile-image"
                />
                <div className="profile-overlay">
                  <FontAwesomeIcon icon={faLightbulb} size="2x" />
                </div>
              </motion.div>
            </Col>
            <Col lg={8} md={12}>
              <Card className="intro-card">
                <Card.Body>
                  <h3 className="intro-title">Senior Data Engineer</h3>
                  <p className="intro-text">
                    I'm a passionate Data Engineer with <strong>4+ years of experience</strong> in building 
                    scalable data pipelines and cloud-native solutions. Currently working at <strong>Daffodil Software</strong> 
                    in Gurugram, India, where I lead enterprise-grade data engineering projects.
                  </p>
                  <p className="intro-text">
                    My expertise spans across <strong>Python, Apache Airflow, AWS, GCP</strong>, and modern data 
                    engineering practices. I specialize in optimizing data workflows and ensuring high-quality data delivery.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Achievements - Compact Layout */}
        <motion.div variants={itemVariants} className="mb-4">
          <Row>
            {achievements.map((achievement, index) => (
              <Col md={6} lg={3} key={index} className="mb-3">
                <motion.div
                  className="achievement-card text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={achievement.icon} size="2x" />
                  </div>
                  <h6 className="achievement-title">{achievement.title}</h6>
                  <p className="achievement-description">{achievement.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Compact Timeline */}
        <motion.div variants={itemVariants}>
          <h4 className="subsection-title text-center mb-4">Professional Experience</h4>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${item.type}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-year">{item.year}</span>
                    <h5 className="timeline-title">{item.title}</h5>
                    <h6 className="timeline-company">{item.company}</h6>
                  </div>
                  <div className="timeline-body">
                    <ul className="timeline-description">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="cta-section text-center mt-5">
          <Card className="cta-card">
            <Card.Body>
              <h3 className="cta-title">Let's Build Data Solutions Together</h3>
              <p className="cta-text">
                I'm always excited to work on challenging data engineering projects. 
                Whether you need pipeline architecture, ETL optimization, or cloud data solutions, 
                I'd love to discuss how I can help!
              </p>
              <div className="cta-buttons">
                <motion.button
                  className="btn btn-primary btn-lg me-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Get In Touch
                </motion.button>
                <motion.a
                  href="https://drive.google.com/file/d/1BUQDlfjI15MYQKErLx157MRJk30hbuQT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default About;