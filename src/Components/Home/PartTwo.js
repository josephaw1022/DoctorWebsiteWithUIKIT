import React from "react";

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
 
import { Link } from "react-router-dom"
import ContactMe from "./ContactMe"
// core component

export default function PartTwo() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>

      <div className="main">
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
                <div className="card-icon">
                      <i className="nc-icon nc-time-alarm" />
                    </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
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
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
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
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
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
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="features-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Is this what you are looking for?</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here.
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card
                className="c3"
                  data-background="image"
                  
                >
                  <CardBody>
                    <h6 className="card-category">Design</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-world-2" />
                    </div>
                    <p className="card-description">
                      Unlike fashionable design, it lasts many years – even in
                      today’s throwaway society
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
              </Col>
              <Col md="4">
                <Card
                className="c2"
                  data-background="image"
                  
                >
                  <CardBody>
                    <h6 className="card-category">UI Kits</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-single-copy-04" />
                    </div>
                    <p className="card-description">
                      Imagine if you could go to the profile of a friend and
                      instead of scrolling through...
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
              </Col>
              <Col md="4">
                <Card
                  data-background="image"
                  className="c1"
                >
                  <CardBody>
                    <h6 className="card-category">Development</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-time-alarm" />
                    </div>
                    <p className="card-description">
                      For starters, it seemed like a good idea to keep a running
                      list of Vision investments.
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
              </Col>
            </Row>
          </Container>
        </div>
        </div>
        
        <div className="section landing-section">
          <ContactMe/> 
        </div>
      </div>

    </>
  );
}
