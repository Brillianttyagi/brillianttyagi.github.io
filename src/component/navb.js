import React, { Component } from 'react'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
  } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Logo from './images/logo.png'

class Navb extends Component {

    render() { 
        return (
            <Navbar className="Navbar" bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/"><img width="50px" src={ Logo } alt="brand"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Link className="navlinkh" to="/">Home</Link>
                    <Link className="navlinkh" to="/projects">Projects</Link>
                    <a className="navlinkh" href="https://drive.google.com/file/d/1BUQDlfjI15MYQKErLx157MRJk30hbuQT/view?usp=sharing">Resume</a>
                    <Link className="navlinkh" to="/Contact">Contact Me</Link>
                    <Link className="navlinkh" to="/About">About Me</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
 
export default Navb;