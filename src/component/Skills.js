import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faCloud, 
  faDatabase, 
  faChartLine, 
  faCogs,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import './css/skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      category: "Data Engineering Tools",
      icon: faCogs,
      color: "#6366f1",
      skills: [
        "Apache Airflow",
        "PySpark", 
        "Jupyter Notebook",
        "Apache Kafka",
        "Databricks"
      ]
    },
    {
      category: "GCP Services",
      icon: faCloud,
      color: "#4285f4",
      skills: [
        "Dataflow",
        "Dataproc", 
        "BigQuery",
        "Cloud Composer",
        "Cloud SQL",
        "Cloud Storage"
      ]
    },
    {
      category: "AWS Services", 
      icon: faServer,
      color: "#ff9900",
      skills: [
        "AWS Glue",
        "Lambda",
        "S3", 
        "Redshift",
        "Athena"
      ]
    },
    {
      category: "Programming & Databases",
      icon: faDatabase,
      color: "#10b981",
      skills: [
        "Python",
        "PostgreSQL",
        "MySQL",
        "Git"
      ]
    },
    {
      category: "Web Technologies",
      icon: faCode,
      color: "#8b5cf6",
      skills: [
        "Django",
        "Flask",
        "FastAPI"
      ]
    }
  ];

  const achievements = [
    {
      number: "4+",
      label: "Years Experience",
      icon: faChartLine
    },
    {
      number: "10M+", 
      label: "Records Processed Daily",
      icon: faDatabase
    },
    {
      number: "50+",
      label: "Data Pipelines Built", 
      icon: faCogs
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

  const cardVariants = {
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
      className="skills-section-modern"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Container>
        {/* Header */}
        <motion.div className="text-center mb-5" variants={cardVariants}>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Core technologies and tools I use to build robust data solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <Row className="g-4 mb-5">
          {skillCategories.map((category, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div variants={cardVariants}>
                <Card className="skill-card-modern h-100">
                  <Card.Body className="text-center p-4">
                    <div 
                      className="skill-icon-modern mb-3"
                      style={{ color: category.color }}
                    >
                      <FontAwesomeIcon icon={category.icon} size="2x" />
                    </div>
                    <h5 className="skill-category-title">{category.category}</h5>
                    <div className="skills-list-modern">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="skill-tag-modern"
                          style={{ borderColor: category.color }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: category.color,
                            color: 'white'
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Achievements */}
        <motion.div variants={cardVariants}>
          <Row className="achievements-row">
            {achievements.map((achievement, index) => (
              <Col md={4} key={index}>
                <motion.div 
                  className="achievement-card-modern text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="achievement-icon-modern mb-2">
                    <FontAwesomeIcon icon={achievement.icon} size="2x" />
                  </div>
                  <h3 className="achievement-number">{achievement.number}</h3>
                  <p className="achievement-label">{achievement.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Skills;