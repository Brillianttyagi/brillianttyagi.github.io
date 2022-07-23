import React, { Component } from 'react'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
  } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Logo from './images/logo.png'
import Moon from './images/sun.png'
import Sun from './images/moon.png'

import Cookies from 'universal-cookie';


class Navb extends Component {
    constructor(props){
        super(props);
        const cookies = new Cookies();
        var prevtheme = cookies.get('mytheme');
        if (prevtheme==undefined){
            this.state = {
                theme:"light",
                pic:Sun,
            }
        }
        else if(prevtheme=="dark"){
            this.state = {
                theme:"dark",
                pic:Moon,
            }
        }
        else{
            this.state = {
                theme:"light",
                pic:Sun,
            }
        }
        var x = document.getElementById("root");
        console.log(x)
        x.classList = "root";
        x.classList.add(cookies.get('mytheme'));
        
    }
    settheme = ()=> {
        const cookies = new Cookies();
        var prevtheme = cookies.get('mytheme');
        if (prevtheme==undefined){
            cookies.set('mytheme', 'dark', { path: '/' }); 
        }
        else if(prevtheme=="dark"){
            cookies.set('mytheme', 'light', { path: '/' }); 
        }
        else{
            cookies.set('mytheme', 'dark', { path: '/' }); 
        }
        var x = document.getElementsByClassName("container");
        for (let i = 0; i < x.length; i++) {
            console.log(x)
            x[i].classList = "container";
            x[i].classList.add(cookies.get('mytheme'));
          }
          var x = document.getElementsByClassName("App");
          for (let i = 0; i < x.length; i++) {
              console.log(x)
              x[i].classList = "App";
              x[i].classList.add(cookies.get('mytheme'));
            }
        console.log(document.getElementsByClassName("container"));
        this.setState({theme:cookies.get('mytheme')});
        if (cookies.get('mytheme')=="dark"){
            this.setState({pic:Moon});
        }
        else{
            this.setState({pic:Sun});
        }
        var c = document.getElementsByClassName("card");
        for (let i = 0; i < c.length; i++) {
            var th = cookies.get('mytheme');
            if (th==undefined){
                c[i].id = "whitee";
            }
            else if (th=="light"){
                c[i].id = "whitee";
            }
            else{
                c[i].id = "darkk";
            }
                
          }
    }
    render() { 
        return (
            <Navbar className="Navbar" bg={this.state.theme} expand="lg" sticky="top">
                <Navbar.Brand href="/"><img width="50px" src={ Logo } alt="brand"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Link className="navlinkh" to="/">Home</Link>
                    <Link className="navlinkh" to="/projects">Projects</Link>
                    <a className="navlinkh" target='_blank' href="https://drive.google.com/file/d/1BUQDlfjI15MYQKErLx157MRJk30hbuQT/view?usp=sharing">Resume</a>
                    <Link className="navlinkh" to="/Contact">Contact Me</Link>
                    <Link className="navlinkh" to="/About">About Me</Link>
                    <button className='mode' onClick={this.settheme}><img width="40px" src={ this.state.pic } alt="brand"/></button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
 
export default Navb;