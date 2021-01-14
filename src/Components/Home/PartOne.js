
import React from "react";

// reactstrap components
import { Container, Row, Col} from "reactstrap";
// import PartTwo from "./PartTwo" 
// import PartTwo from "./PartTwo"

// core components

 function PartOne() {
  // let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        // pageHeader.current.style.transform =
        //   "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
  
    <>
    <div className="header-2" id="home">
    
    <div
      className="page-header"
      style={{
        backgroundImage:
          "url(" + require("./img/beach.png") + ")",
      }}
    >
      <div className="filter" />
      <div className="content-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title" id="navbarstuff">Quality Counseling</h1>
              <h5 className="description">
                Whatever you want here
              </h5>
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

export default PartOne ; 
