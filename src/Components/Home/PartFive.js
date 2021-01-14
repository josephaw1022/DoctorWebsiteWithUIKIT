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
    
    <div className="team-3" id="OurTeam">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 3</h2>
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
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Individual commitment to a group effort – that’s what
                          makes a team work, a society work...
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
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Ethan Smith</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
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
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth. Kanye loves himself like Kanye loves Kanye.
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="youtube"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-youtube" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="instagram"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
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
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Backend Hacker</h6>
                        <p className="card-description">
                          It is literally true that you can succeed best and
                          quickest by helping others to succeed because they
                          care about.
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
                            color="instagram"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
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

