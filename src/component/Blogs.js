import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExternalLinkAlt, 
  faCalendarAlt, 
  faUser,
  faClock,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import './css/blogs.css';

const Blogs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace 'yourusername' with your actual Medium username
  const MEDIUM_USERNAME = 'brilliantprogrammer'; // Update this with your Medium username
  const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

  const extractThumbnail = useCallback((description) => {
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500';
  }, []);

  const estimateReadTime = useCallback((content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  }, []);

  const fetchMediumBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(RSS_URL);
      const data = await response.json();
      
      if (data.status === 'ok') {
        // Process and clean the blog data
        const processedBlogs = data.items.slice(0, 6).map(item => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          description: item.description.replace(/<[^>]*>/g, '').slice(0, 120) + '...',
          categories: item.categories || [],
          thumbnail: extractThumbnail(item.description),
          readTime: estimateReadTime(item.description)
        }));
        setBlogs(processedBlogs);
      } else {
        setError('Failed to fetch blogs');
      }
    } catch (err) {
      console.error('Error fetching Medium blogs:', err);
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  }, [RSS_URL, extractThumbnail, estimateReadTime]);

  useEffect(() => {
    fetchMediumBlogs();
  }, [fetchMediumBlogs]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
    <motion.section 
      className="blogs-section-simple"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Container>
        {/* Header */}
        <motion.div className="text-center mb-5" variants={cardVariants}>
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Thoughts and insights on data engineering & technology
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div className="text-center py-5" variants={cardVariants}>
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-muted">Loading articles...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div className="text-center py-5" variants={cardVariants}>
            <div className="error-state">
              <FontAwesomeIcon icon={faBookOpen} size="2x" className="text-muted mb-3" />
              <h5>Unable to load articles</h5>
              <Button 
                variant="outline-primary" 
                href={`https://medium.com/@${MEDIUM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                Visit Medium Profile
              </Button>
            </div>
          </motion.div>
        )}

        {/* Blogs Grid - Simplified */}
        {!loading && !error && blogs.length > 0 && (
          <>
            <Row className="g-4 mb-5">
              {blogs.map((blog, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div variants={cardVariants}>
                    <Card className="blog-card-simple h-100">
                      <div className="blog-image-simple">
                        <img 
                          src={blog.thumbnail} 
                          alt={blog.title}
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500';
                          }}
                        />
                      </div>
                      <Card.Body className="p-4">
                        <div className="blog-meta-simple">
                          <span className="blog-date-simple">
                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                            {blog.pubDate}
                          </span>
                          <span className="blog-read-time">
                            <FontAwesomeIcon icon={faClock} className="me-1" />
                            {blog.readTime} min
                          </span>
                        </div>
                        
                        <h5 className="blog-title-simple">{blog.title}</h5>
                        <p className="blog-excerpt">{blog.description}</p>
                        
                        <Button 
                          variant="link" 
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="read-more-simple p-0"
                        >
                          Read article <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* View All Button */}
            <motion.div variants={cardVariants} className="text-center">
              <Button 
                variant="outline-primary" 
                size="lg"
                href={`https://medium.com/@${MEDIUM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-simple"
              >
                <FontAwesomeIcon icon={faUser} className="me-2" />
                View all articles
              </Button>
            </motion.div>
          </>
        )}

        {/* No Blogs State */}
        {!loading && !error && blogs.length === 0 && (
          <motion.div className="text-center py-5" variants={cardVariants}>
            <FontAwesomeIcon icon={faBookOpen} size="2x" className="text-muted mb-3" />
            <h5>No articles found</h5>
            <p className="text-muted">Check back soon for new content!</p>
          </motion.div>
        )}
      </Container>
    </motion.section>
  );
};

export default Blogs; 