import React, { Component } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import './css/skills.css'
import django from './images/django.svg'
import sql from './images/sql.png'
import bash from './images/bash.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit,faPython,faJs,faAws,faNode,faReact,faHtml5,faCss3,faLinux,faDrupal,faPhp } from "@fortawesome/free-brands-svg-icons"

class Skill extends Component {
    render() { 
        return ( 
            <Container>
                <h1 class="name_skill">Skills</h1>
                <Row className="skills">
                    <br/>
                    <Col className="p-3">
                        <span className="skills_icon"><FontAwesomeIcon icon={faPython} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faJs} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faPhp} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faNode} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faReact} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faHtml5} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faCss3} size="3x" /></span>
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                        <span className="skills_icon"><FontAwesomeIcon icon={faGit} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faDrupal} size="3x" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faLinux} size="3x" /></span>
                        <span className="skills_icon"><img width="100px" src={django} alt="django" /></span>
                        <span className="skills_icon"><FontAwesomeIcon icon={faAws} size="3x" /></span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="skills_icon"><img width="60px" src={bash} alt="bash" /></span>
                        <span className="skills_icon"><img width="60px" src={sql} alt="sql" /></span>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Skill;