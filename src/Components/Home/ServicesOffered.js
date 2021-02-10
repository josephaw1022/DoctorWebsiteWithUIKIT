import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import {

  Card,
  CardFooter,
  CardBody,


} from "reactstrap";
 
class ServicesOffered extends React.Component{
    constructor(props){
        super(props); 
        this.state={ 
            ServicesOffered:{}
        }
    }
    componentWillMount(){ 
        this.setState({ServicesOffered:this.props.data},()=> {})
    } 

    animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });

    

    render(){ 
        
        
        
    return (
      <>
        
        <div className="section menubg" >
        <Container id="Services">
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title textc" >Services Offered</h2>
            <h5 className="description">
            
            </h5>
            <br />
        </Col>
        </Row>
        
        <Row>
        <Col md="4">
        <ScrollAnimation animateOnce={true} animateIn="slideInLeft" duration={1} >
            <Card
            className="c3 add-animation info-img"
            data-background="image"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos3.png") + ")"}}
            >
            <CardBody>
                <h6 className="card-category">Individual</h6>
                <div className="card-icon">
                <i className="nc-icon nc-chat-33" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
            </ScrollAnimation> 
            
        </Col>
        <Col md="4">
            
        <ScrollAnimation animateOnce={true} animateIn="slideInLeft" duration={.9} >
            <Card
            className="c2"
            data-background="image"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos21.png") + ")"}}
            
            >
            <CardBody>
                <h6 className="card-category">Group Therapy</h6>
                <div className="card-icon">
                <i className="nc-icon nc-shop" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            
            </Card>
            </ScrollAnimation> 
        </Col>
        <Col md="4">
        <ScrollAnimation animateOnce={true} animateIn="slideInLeft" duration={.5} >
            <Card
            data-background="image"
            className="c1"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos1.png") + ")"}}
            >
            <CardBody>
                <h6 className="card-category">Faith Counseling</h6>
                <div className="card-icon">
                <i className="nc-icon nc-send" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
            </ScrollAnimation> 
        </Col>
        </Row>
    
        </Container>
        </div>

        </> 
    );
    }  
} 
export default ServicesOffered ; 
