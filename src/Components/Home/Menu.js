import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import { Link } from "react-router-dom"

// core component

export default function Menu() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    <div class="wrapper">

      <div className="main" id="About" data-parallex="true">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk therapy and counseling</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/About"
                  
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
              <div className="info">
                
                <div className="icon icon-info">
                <i className="nc-icon nc-spaceship" />
                </div>
                <div className="description">
                  <h4 className="info-title">Getting Started</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link eights" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
              </Col>
              <Col md="3">
              <div className="info">
                
                <div className="icon icon-info">
                <i className="nc-icon nc-mobile" />
                </div>
                <div className="description">
                  <h4 className="info-title">Contact Me</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" tag={Link} to="/Contact">
                    See more
                  </Button>
                </div>
              </div>
              </Col>
              <Col md="3">
                <div className="info">
                
                  <div className="icon icon-info">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Telehealth</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button 
                    className="btn-link" 
                    color="info" 
                    href="#Convenient"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("Convenient").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                      });}}
                      >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-map-big" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Client Resources</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
              <div className="info">
                
                <div className="icon icon-info">
                <i className="nc-icon nc-satisfied" />
                </div>
                <div className="description">
                  <h4 className="info-title">Rates & Insurance</h4>
                  <p>
                    Currently not accepting insurance but will be soon! 
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
              </Col>
              <Col md="3">
              <div className="info">
                
                <div className="icon icon-info">
                <i className="nc-icon nc-pin-3" />
                </div>
                <div className="description">
                  <h4 className="info-title">Why Us</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
              </Col>
              <Col md="3">
              <div className="info">
                
                <div className="icon icon-info">
                <i className="nc-icon nc-vector" />
                </div>
                <div className="description">
                  <h4 className="info-title">FAQS</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
              </Col>
              <Col md="3">
              <div className="info">
                
                <div className="icon icon-info">
                <i className="nc-icon nc-user-run" />
                </div>
                <div className="description">
                  <h4 className="info-title">Exercise & Well Being</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
              </Col>
            
              
              
              
            </Row>
          </Container>
      </div> 
    </div>
    </div> 
    </>
  );
}
