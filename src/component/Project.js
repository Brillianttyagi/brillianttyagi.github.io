import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExternalLinkAlt, 
  faCode, 
  faRocket,
  faDatabase,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './css/Project.css';

// Import project images
import c19 from './images/c19.png';
import lr from './images/lr.gif';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: "Data Pipeline Automation Platform",
      category: "Data Engineering",
      description: "Enterprise-grade data pipeline platform built with Apache Airflow, processing 10M+ records daily with automated monitoring and alerting.",
      longDescription: "A comprehensive data engineering solution that automates ETL processes, ensures data quality, and provides real-time monitoring. Features include automatic retry mechanisms, data lineage tracking, and integration with multiple cloud providers.",
      image: "https://images.unsplash.com/photo-1551808525-051c5ac707c7?w=500",
      technologies: ["Apache Airflow", "Python", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      category_icon: faDatabase,
      github: "https://github.com/Brillianttyagi",
      demo: "#",
      featured: true,
      stats: {
        records: "10M+",
        uptime: "99.9%",
        performance: "40% faster"
      }
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      category: "Data Engineering", 
      description: "Interactive dashboard for real-time data visualization with streaming data processing and automated reporting capabilities.",
      longDescription: "A modern analytics platform providing real-time insights through interactive charts and graphs. Features include streaming data ingestion, customizable dashboards, and automated report generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      technologies: ["Python", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "AWS"],
      category_icon: faChartLine,
      github: "https://github.com/Brillianttyagi",
      demo: "http://deepprogrammer.pythonanywhere.com/",
      featured: true,
      stats: {
        latency: "< 100ms",
        throughput: "50K/sec",
        uptime: "99.8%"
      }
    },
    {
      id: 3,
      title: "COVID-19 Data Analytics Platform",
      category: "Data Science",
      description: "Comprehensive COVID-19 tracking application with predictive modeling, interactive maps, and real-time data processing pipelines.",
      longDescription: "Advanced analytics platform for COVID-19 data with machine learning models for trend prediction, geographical analysis, ETL pipelines for data ingestion, and comprehensive reporting dashboard.",
      image: c19,
      technologies: ["Python", "Machine Learning", "Apache Airflow", "PostgreSQL", "APIs", "Docker"],
      category_icon: faChartLine,
      github: "https://github.com/Brillianttyagi/Covid19-tracker",
      demo: "http://deepprogrammer.pythonanywhere.com/",
      featured: false
    },
    {
      id: 4,
      title: "ML Model Deployment Pipeline",
      category: "Machine Learning",
      description: "End-to-end MLOps pipeline for model training, validation, deployment, and monitoring with automated retraining capabilities.",
      longDescription: "A complete MLOps solution featuring automated model training, A/B testing, deployment pipelines, performance monitoring, and data drift detection with seamless integration to production systems.",
      image: lr,
      technologies: ["Python", "MLflow", "Kubernetes", "Apache Airflow", "PostgreSQL", "AWS"],
      category_icon: faRocket,
      github: "https://github.com/Brillianttyagi",
      demo: "#",
      featured: false
    },
    {
      id: 5,
      title: "Streaming Data Lake Architecture",
      category: "Data Engineering",
      description: "Scalable data lake solution with real-time streaming ingestion, automated data cataloging, and multi-format data processing.",
      longDescription: "Enterprise data lake implementation with Lambda architecture, supporting both batch and streaming workloads, automated schema evolution, and comprehensive data governance.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500",
      technologies: ["Apache Kafka", "Apache Spark", "AWS S3", "Glue", "Python", "Terraform"],
      category_icon: faDatabase,
      github: "https://github.com/Brillianttyagi",
      demo: "#",
      featured: false
    }
  ];

  const categories = ["All", "Data Engineering", "Data Science", "Machine Learning"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
      className="projects-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Container>
        {/* Header */}
        <motion.div className="projects-header text-center mb-5" variants={itemVariants}>
          <h1 className="section-title">Data Engineering Projects</h1>
          <p className="section-subtitle">
            Showcase of data engineering solutions, ML pipelines, and analytics platforms I've built
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-5">
          <h3 className="subsection-title mb-4">🌟 Featured Work</h3>
          <Row>
            {featuredProjects.map((project, index) => (
              <Col lg={6} md={12} key={project.id} className="mb-4">
                <motion.div
                  className="project-card featured"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      <div className="project-stats">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="stat-item">
                            <span className="stat-value">{value}</span>
                            <span className="stat-label">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <div className="project-category">
                        <FontAwesomeIcon icon={project.category_icon} className="me-2" />
                        {project.category}
                      </div>
                      <Badge bg="primary" className="featured-badge">Featured</Badge>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.longDescription}</p>
                    <div className="project-tech">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} bg="secondary" className="tech-badge me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge bg="light" text="dark" className="tech-badge">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="project-actions">
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        className="me-2"
                      >
                        <FontAwesomeIcon icon={faGithub} className="me-1" />
                        Code
                      </Button>
                      {project.demo !== "#" && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={project.demo}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="category-filter mb-4">
          <div className="filter-buttons">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "primary" : "outline-primary"}
                size="sm"
                className="filter-btn me-2 mb-2"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div variants={itemVariants}>
          <h3 className="subsection-title mb-4">🚀 All Projects</h3>
          <Row>
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} sm={12} key={project.id} className="mb-4">
                                 <motion.div
                   className="project-card"
                   whileHover={{ scale: 1.02, y: -5 }}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay-simple">
                      <FontAwesomeIcon icon={project.category_icon} size="2x" />
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-category">
                      <FontAwesomeIcon icon={project.category_icon} className="me-2" />
                      {project.category}
                    </div>
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} bg="secondary" className="tech-badge me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="project-actions">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        className="me-2"
                      >
                        <FontAwesomeIcon icon={faCode} className="me-1" />
                        Code
                      </Button>
                      {project.demo !== "#" && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.demo}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faRocket} className="me-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="projects-cta text-center mt-5">
          <Card className="cta-card">
            <Card.Body>
              <h3 className="cta-title">Ready to Build Data Solutions?</h3>
              <p className="cta-text">
                These projects showcase my expertise in data engineering and analytics. 
                Let's discuss how I can help architect and build your next data platform!
              </p>
              <div className="cta-buttons">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                  Let's Talk
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://github.com/Brillianttyagi"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  View All on GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Projects;