
import React from "react";
import { Container, Row, Col} from "reactstrap";
import {Animated} from "react-animated-css";


// reactstrap components

// core components

function LandingPageHeader(props) {

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
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
          backgroundImage: "url(" + require("assets/img/FreeOnes/Photos22.png") + ")"
        }}
        className="page-header parallax"
        data-parallax="true"
        ref={pageHeader}
      >

        <div className="filter" />
        <div className="content-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">


            
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
            
                <h1 className="title" id="navbarstuff" >
                  "{props.Quote}"
                </h1>
              
              </Animated>
              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                <h5 className="description">
                - {props.QuoteBy}
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

    </>
  );
}

export default LandingPageHeader;