import React from "react"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PartFive() {
  return (
    <>
    
    <div className="team-3" id="OurTeam" style={{marginBottom:"150px", height:"100%"}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Our Team </h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/brownprofile.png")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4"> Al Brown </CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          blah blah blah blah blah blah 
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="facebook"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/brownprofile.png")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">To Be Determined</CardTitle>
                        <h6 className="card-category">IDK</h6>
                        <p className="card-description">
                        blah blah blah blah blah blah blah blah 
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="pinterest"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-pinterest" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              
              
            </Row>
          </Container>
        </div>
      
      </>
    ); 
    } 

