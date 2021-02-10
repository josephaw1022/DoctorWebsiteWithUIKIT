import React from "react" 
import ScrollAnimation from 'react-animate-on-scroll';
// reactstrap components
import {
  // Button,
  Card,
  CardBody,
  // CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Convenient(){ 

    return(
      
      
          <>
            <div className="section secion-blog " id="Convenience">
              {/* ********* BLOGS 1 ********* */}
              
              <div className="blog-4" >
                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto" md="10">
                      <h2 className="title" >Whatever's Convenient</h2>
                      <br />
                      <ScrollAnimation animateIn="slideInRight"  animateOnce={true} animationOut="zoomOut"  duration={.5}>
                      <Card className="card-plain card-blog">
                        <Row>
                          <Col md="5">
                          
                            <div className="card-image">
                              <img
                                style={{zIndex:"-1"}}
                                alt="..."
                                className="img"
                                src={require("assets/img/FreeOnes/Photos9.png")}
                                
                              />
                            </div>
                          
                          </Col>
                          <Col md="7">
                            <CardBody>
                              <h6 className="card-category text-info" > Traditional </h6>
                              <CardTitle tag="h3">
                                <a href="#pablo" onClick={(e) => e.preventDefault()} >
                                In-Person Visits
                                </a>
                              </CardTitle>
                              <p className="card-description"  >
                                If you live in the Bluffton area and would like in person couneseling, then in person counseling
                                 is a perfect and conveinent option {" "}
                              </p>
                            </CardBody>
                          </Col>
                        </Row>
                      </Card>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="slideInLeft"  animateOnce={true} animationOut="zoomOut"  duration={.5}>
                      <Card className="card-plain card-blog">
                        <Row>
                          <Col md="7">
                            <CardBody>
                              <h6 className="card-category text-danger">
                                <i className="fa fa-free-code-camp mr-1" />
                                Trending
                              </h6>
                              <CardTitle tag="h3">
                                <a href="#pablo" onClick={(e) => e.preventDefault()} >
                                  Virtual Meetings
                                </a>
                              </CardTitle>
                              <p className="card-description" >
                                If you live in South Carolina and would like to talk to a therapist, then virtual meetings are a perfect choice. 
                                Calls are conducted via Zoom, Google Meets, and or FaceTime.  {" "}
                                
                              </p>
                            </CardBody>
                          </Col>
                          <Col md="5">
                            <div className="card-image">
                              <img
                                alt="..."
                                className="img"
                                src={require("assets/img/FreeOnes/Photos7.png")}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card>
                      </ScrollAnimation>
                    </Col>
                  </Row>
                </Container>
              </div>
              </div>
              </>
    ); 
}