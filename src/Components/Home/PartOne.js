
import React from "react";

// reactstrap components
import { Container, Row, Col, } from "reactstrap";
// import PartTwo from "./PartTwo"
import "./changecolor.css"
// core components

 function PartOne() {
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
    // <>
    //   <div className="main"> 
    //   <div
        
    //     className="page-header"
    //     data-parallax={true}
    //     ref={pageHeader}
    //   >
        
    //     <div className="filter" />
    //     <Container>
    //       <div className="motto text-center">
    //         <h1>"The good life is a process..." </h1>
    //         <h3>- Carl Rogers</h3>
    //         <br />
    //         <Button
    //           href="#"
    //           className="btn-round mr-1"
    //           color="neutral"
    //           outline
    //         >
    //           <i className="fa fa-play" />
    //           Watch video
    //         </Button>
    //         <Button className="btn-round" color="neutral" type="button" outline>
    //           Learn more 
    //         </Button>
    //       </div>
    //       <p className="scrolldown">
    //      <a className="smoothscroll" href="#about"><i className="fa fa-down"></i></a>
    //   </p>
    //     </Container>

    //   </div>
    //   <PartTwo/>
    //   </div>
    // </>

    <div className="header-2">
    
    <div
      className="page-header"
      style={{
        backgroundImage:
          "url(" + require("assets/img/brownprofile.png") + ")",
      }}
    >
      <div className="filter" />
      <div className="content-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title">Quality Lowcountry Counseling</h1>
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
  );
}

export default PartOne ; 
