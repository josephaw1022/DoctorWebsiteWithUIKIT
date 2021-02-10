
import React from "react";
import { Container, Row, Col} from "reactstrap";
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

// reactstrap components

// core components

function LandingPageHeader(props) {

  let pageHeader1 = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader1.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/FreeOnes/Email1.png") + ")"
        }}
        className="page-header parallax"
        // data-parallax="true"
        ref={pageHeader1}

        id="Home"
        
      >

        
        <div className="content-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">

              <Animated animationIn="bounceInLeft" isVisible={true}>
              <ScrollAnimation animateIn="zoomIn" animateOnce={true} animationOut="fadeOut"  duration={2}>
                <h1 className="title text-center" id="navbarstuff" style={{position:"sticky"}} >
                  "{props.Quote}"
                </h1>
                </ScrollAnimation>
              
              </Animated>
              <Animated animationIn="bounceInRight"  animationOut="fadeOut" isVisible={true}>
              <ScrollAnimation animateIn="zoomIn" animateOnce={true} animationOut="zoomOut" >
                <h5 className="description">
                - {props.QuoteBy}
                </h5>
                </ScrollAnimation>
              </Animated>
        

                <br />
              </Col>
              <Col className="ml-auto mr-auto" md="10">
              </Col>
            </Row>
          </Container>

        </div> 
      </div>

    </>
  );
}

export default LandingPageHeader;