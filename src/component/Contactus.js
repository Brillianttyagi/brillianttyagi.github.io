import React, { Component } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import robo from './images/robo.svg'
import './css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faTwitter,faCodepen,faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Contact extends Component {
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col className="m-5">
                        <Row style={{fontSize:"20px"}}>Have questions?</Row><br/>
                        <a href="https://github.com/Brillianttyagi" className="social_links"><Row style={{ color:"gray" }}><FontAwesomeIcon icon={faGithub} size="3x" />Follow me on Github</Row></a>
                        <a href="https://twitter.com/imaprogramr" className="social_links"><Row style={{ color:"rgb(0, 183, 255)" }}><FontAwesomeIcon icon={faTwitter} size="3x" />Like me on twitter</Row></a>
                        <a href="https://www.instagram.com/ttyagi_boy84/" className="social_links"><Row style={{ color:"red" }}><FontAwesomeIcon icon={faInstagram} size="3x" />Follow me on instagram</Row></a>
                        <a href="https://www.codechef.com/users/yesimaprogramr" className="social_links"><Row style={{ color:"rgb(113, 123, 133)" }}><FontAwesomeIcon icon={faCodepen} size="3x" />Check me on codechef</Row></a>
                        <a href="https://www.linkedin.com/in/deepanshu-tyagi-355855198/" className="social_links"><Row style={{ color:"rgb(5, 134, 255)" }}><FontAwesomeIcon icon={faLinkedin} size="3x" />Connect with me on linkedin</Row></a>
                    </Col>
                    <Col><img className="img_robo" src={ robo } alt="robo" /></Col>
                </Row>

            </Container>
         );
    }
}
 
export default Contact;