
import React from "react";
import {Parallax} from 'react-parallax'
// reactstrap components
import { Container, Row, Col} from "reactstrap";
// import PartTwo from "./PartTwo" 
// import PartTwo from "./PartTwo"
import {Animated} from "react-animated-css";



// core components

 function PartOne() {
  




  return (
  
    <>
    <div className="" id="home">
    
    <div
      className="page-header"
      data-parallax="true"
      style={{
        backgroundImage:
          "url(" + require("assets/img/FreeOnes/Photos8.png") + ")",
      }}
      
    >
    
      <div className="filter" />
      <div className="content-center">
      
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
              <h1 className="title" id="navbarstuff">Quality Counseling</h1>
              </Animated>
              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
              <h5 className="description">
                Whatever you want here
              </h5>
              </Animated>
              <br />
            </Col>
            <Col className="ml-auto mr-auto" md="10">
              
            </Col>
          </Row>
        </Container>
        
      </div>
      {/* </Parallax> */}
    </div>
  </div>
  
  </>
  );
}

export default PartOne ; 
