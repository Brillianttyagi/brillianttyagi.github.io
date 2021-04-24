import React, { Component } from 'react'
import { Container,Row,Card } from 'react-bootstrap'
import blog from './images/Animation.gif'
import Calculator from './images/Calculator.gif'
import speed from './images/speed.gif'
import todo from './images/todo.gif'
import lr from './images/lr.gif'
import mp from './images/mp.gif'
import np from './images/notepad.gif'
import cal from './images/cal.gif'
import c19 from './images/c19.png'
class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <h1 className="projects">Projects</h1>
                <Row>
                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ blog } />
                                <Card.Body>
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text>
                                        A blog is an online diary or journal.<br/>It is created By Django.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/BLOG">Source Code</Card.Link>
                                    <Card.Link href="http://deepprogrammer.pythonanywhere.com/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>
                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" height="125px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcook5YKIzQE_N889HVHaeS7UR9hWT1JgQw&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title>AIPOC</Card.Title>
                                    <Card.Text>
                                        An intelligent piece of code,Artificial assistant<br/>It is created By Iot python and ML.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/aipoc-ai">Source Code</Card.Link>
                                    <Card.Link href="http://deepprogrammer.pythonanywhere.com/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>
                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ lr } />
                                <Card.Body>
                                    <Card.Title>Boston House Prediction</Card.Title>
                                    <Card.Text>
                                        An Linear regression model to prediction.<br/>It is created By jupiter Notebook.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/BLOG">Source Code</Card.Link>
                                    <Card.Link href="http://deepprogrammer.pythonanywhere.com/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>
                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ c19 } />
                                <Card.Body>
                                    <Card.Title>Covid19 Tracker</Card.Title>
                                    <Card.Text>
                                        Track list of case of corona virus in india<br/>It is created By Django.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/Covid19-tracker">Source Code</Card.Link>
                                    <Card.Link href="http://deepprogrammer.pythonanywhere.com/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>
                </Row>
                <h1>Python</h1>
                <Row>
                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ mp } />
                                <Card.Body>
                                    <Card.Title>Music Player</Card.Title>
                                    <Card.Text>
                                        Music Player for listening offline song.<br/>It is created By Python and Tkinter.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/Music-player">Source Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>

                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ np } />
                                <Card.Body>
                                    <Card.Title>Notepad</Card.Title>
                                    <Card.Text>
                                        Notepad for writing and editing files.<br/>It is created By Python and Tkinter.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/notepad">Source Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>

                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ cal } />
                                <Card.Body>
                                    <Card.Title>Calculator</Card.Title>
                                    <Card.Text>
                                        Calculator for Mathmatical calculations<br/>It is created By Python and Tkinter.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/calculator">Source Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>
                </Row>
                <h1>JS & HTML & CSS</h1>
                <Row>
                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ speed } />
                                <Card.Body>
                                    <Card.Title>Typing Speed Tester</Card.Title>
                                    <Card.Text>
                                        Test your typing speed online WPM<br/>It is created By Js & HTML & CSS.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/Typing-speed-tester-Javascript">Source Code</Card.Link>
                                    <Card.Link href="https://brillianttyagi.github.io/Typing-speed-tester-Javascript/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>

                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ todo } />
                                <Card.Body>
                                    <Card.Title>To Do List</Card.Title>
                                    <Card.Text>
                                    It’s a list of tasks you need to complete, or things that you want to do.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/todo-list">Source Code</Card.Link>
                                    <Card.Link href="https://brillianttyagi.github.io/todo-list/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>

                    <Card className="m-3">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ Calculator } />
                                <Card.Body>
                                    <Card.Title>Web Calculator</Card.Title>
                                    <Card.Text>
                                        Calculator for Mathmatical calculations<br/>It is created by Js.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/Brillianttyagi/Web-calculator">Source Code</Card.Link>
                                    <Card.Link href="https://brillianttyagi.github.io/Web-calculator/">Live Demo</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card>
                </Row>
            </Container>
         );
    }
}
 
export default Project;