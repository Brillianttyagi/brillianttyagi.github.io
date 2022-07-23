import React, { Component } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import name from './images/name.svg'
import Cookies from 'universal-cookie';

class About extends Component {
    constructor(props){
        super(props);
        const cookies = new Cookies();
        var prevtheme = cookies.get('mytheme');
        if (prevtheme==undefined){
            this.state = {
                theme:"whitee",
            }
        }
        else if(prevtheme=="dark"){
            this.state = {
                theme:"darkk",
            }
        }
        else{
            this.state = {
                theme:"whitee",
            }
        }
        
        
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col className="m-5">
                        <img width="100%" src={ name } alt="Deepanshu"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ borderRadius:"100%",width: '18rem' }} className="m-3" >
                            <Card.Img style={{ borderRadius:"100%" }} variant="top" src="https://avatars.githubusercontent.com/u/48671623?v=4" alt="deepanshu" />
                        </Card>
                    </Col>
                    <Col>
                    <Card id={this.state.theme} style={{marginBottom : "30px"}}>
                            <Card.Body>
                            <Card.Title>About</Card.Title>
                            <Card.Text>
                            Data Engineer at Daffodil Solution Gurugram, India<br/>
                            - Staging, transforming and loading structured and semi-structured data to build a data platform for Analytics.<br/>
                            - Worked on open source data engineering tools to develop the pipelines.<br/>
                            - Learning AWS and GCP tools for Data Engineering.<br/>
                            - Web developer with good knowledge of Frontend and Backend tools.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default About;