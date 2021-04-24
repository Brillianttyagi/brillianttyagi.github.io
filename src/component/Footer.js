import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './css/Footer.css'
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faCodiepie,faTwitter,faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Foot extends Component {
    render() { 
        return ( 
            <div className="footercon">
                <Row className="rows">
                    <Col>
                        <div class="col-5 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li><Link className="navlink" to="/">Home</Link></li>
                                <li><Link className="navlink" to="/project">Project</Link></li>
                                <li><a id="links" href="#">Resume</a></li>
                                <li><Link className="navlink" to="/Contact">Contact</Link></li>
                                <li><Link className="navlink" to="/About">About</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div class="address">
                            <h5>Contact</h5>
                            <address>
                                Uttar pradesh<br/>
                                India<br/>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:deepanshubhai84@gmail.com">Mail Me</a>
                            </address>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a id="social_" class="btn btn-social-icon btn-google-plus" href="https://github.com/Brillianttyagi"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a id="social_" class="btn btn-social-icon btn-facebook" href="https://twitter.com/imaprogramr"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            <a id="social_" class="btn btn-social-icon btn-linkedin" href="https://www.instagram.com/ttyagi_boy84/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            <a id="social_" class="btn btn-social-icon btn-twitter" href="https://www.codechef.com/users/yesimaprogramr"><FontAwesomeIcon icon={faCodiepie} size="2x" /></a>
                            <a id="social_" class="btn btn-social-icon btn-youtube" href="https://www.linkedin.com/in/deepanshu-tyagi-355855198/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a id="social_" class="btn btn-social-icon" href="mailto:"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                        </div>
                    </Col>
                </Row>
                <div class="Copyright">
                    <p>Made with by ❤️ by deepanshu</p>
                </div>
            </div>
         );
    }
}
 
export default Foot;