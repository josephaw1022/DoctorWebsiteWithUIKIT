
import React from "react";
import { Container, Row, Col} from "reactstrap";
import {Animated} from "react-animated-css";
// import Headroom from "headroom.js";

 class PartOne extends React.Component {

  render(){


  return (
  
    <>
    <div className="" id="home" data-parallax="true">
    
    <div className="page-header" data-parallax="true" style={{ backgroundImage: "url(" + require("assets/img/FreeOnes/Photos8.png") + ")", }}  >

      <div className="filter" />
      <div className="content-center">

        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
              <h1 className="title" id="navbarstuff">"We know what we are but not what we may be." </h1>
              </Animated>
              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
              <h5 className="description">
              — Ophelia in Hamlet
              </h5>
              </Animated>
              <br />
            </Col>
            <Col className="ml-auto mr-auto" md="10">
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>
  </>
  );
  } 
}

export default PartOne ; 
