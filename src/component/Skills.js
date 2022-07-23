import React, { Component } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import './css/skills.css'
import airflow from './images/skills/AirflowLogo.png'
import aws from './images/skills/aws.png'
import css from './images/skills/css.png'
import django from './images/skills/djnago.png'
import drupal from './images/skills/drupal.png'
import git from './images/skills/git.png'
import google from './images/skills/google.png'
import html from './images/skills/html.png'
import js from './images/skills/js.png'
import kubernates from './images/skills/kubernates.png'
import machine from './images/skills/machine.png'
import mysql from './images/skills/MySQL-Logo.png'
import numpy from './images/skills/numpy.png'
import pandas from './images/skills/Pandas_logo.svg.png'
import php from './images/skills/php.png'
import posgres from './images/skills/posgres.png'
import python from './images/skills/python.png'
import react from './images/skills/react.png'
import ubuntu from './images/skills/ubuntu-logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit,faPython,faJs,faAws,faNode,faReact,faHtml5,faCss3,faLinux,faDrupal,faPhp } from "@fortawesome/free-brands-svg-icons"

class Skill extends Component {
    render() { 
        return ( 
            <Container>
                <div className="p-3">
                <h1 class="name_skill">Skills</h1>
                <Row className="skills">
                    <br/>
                    <Col className="p-3">
                        <span className="skills_icon"><img width="60px" src={python} alt="python" /></span>
                        <span className="skills_icon"><img height="35px" src={airflow} alt="airflow" /></span>
                        <span className="skills_icon"><img width="70px" src={django} alt="djnago" /></span>
                        <span className="skills_icon"><img width="70px" src={google} alt="gcp" /></span>
                        <span className="skills_icon"><img width="60px" src={aws} alt="aws" /></span>
                        <span className="skills_icon"><img width="65px" src={mysql} alt="mysql" /></span>
                        <span className="skills_icon"><img width="55px" src={posgres} alt="posgres" /></span>
                        <span className="skills_icon"><img height="25px" src={kubernates} alt="posgres" /></span>

                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                        <span className="skills_icon"><img height="70px" src={machine} alt="Machine learning" /></span>
                        <span className="skills_icon"><img width="80px" src={pandas} alt="Pandas" /></span>
                        <span className="skills_icon"><img width="80px" src={numpy} alt="NUmpy" /></span>
                        <span className="skills_icon"><img width="55px" src={git} alt="posgres" /></span>
                        <span className="skills_icon"><img width="55px" src={ubuntu} alt="posgres" /></span>
                        <span className="skills_icon"><img width="55px" src={js} alt="js" /></span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="skills_icon"><img width="55px" src={html} alt="HTML" /></span>
                        <span className="skills_icon"><img width="50px" src={css} alt="css" /></span>
                        <span className="skills_icon"><img width="50px" src={drupal} alt="drupal" /></span>
                        <span className="skills_icon"><img width="55px" src={react} alt="react" /></span>
                        <span className="skills_icon"><img width="60px" src={php} alt="php" /></span>
                    </Col>
                </Row>
                </div>
            </Container>
         );
    }
}
 
export default Skill;