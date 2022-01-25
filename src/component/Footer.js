import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap'
import './css/Footer.css'
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faCodiepie,faTwitter,faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Foot extends Component {
    render() { 
        return ( 
            <div className="footercon">
                <Row className="rows">
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