import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap"
import $ from "jquery"
export default function Convenient() {
    return (
        <>
            <div className="section secion-blog " id="Convenience">
                {/* ********* BLOGS 1 ********* */}

                <div className="blog-4">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="10">
                                <h2 className="title">Whatever's Convenient</h2>
                                <br />

                                <Card className="card-plain card-blog">
                                    <Row>
                                        <Col md="5">
                                            <div className="card-image">
                                                <img
                                                    style={{
                                                        display: "initial",
                                                    }}
                                                    alt="..."
                                                    className="image"
                                                    src={require("assets/img/FreeOnes/Photos9.png")}
                                                />
                                            </div>
                                        </Col>
                                        <Col md="7">
                                            <ScrollAnimation
                                                animateIn={
                                                    $(window).width() < 1400
                                                        ? "slideInLeft"
                                                        : "slideInRight"
                                                }
                                                animatePreScroll={true}
                                                animateOnce={true}
                                                animationOut="zoomOut"
                                                duration={0.5}
                                            >
                                                <CardBody>
                                                    <h6 className="card-category text-info">
                                                        {" "}
                                                        Traditional{" "}
                                                    </h6>
                                                    <CardTitle tag="h3">
                                                        <a
                                                            href="#pablo"
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                        >
                                                            In-Person Visits
                                                        </a>
                                                    </CardTitle>
                                                    <p className="card-description">
                                                        If you live in the
                                                        Bluffton area and would
                                                        like in person
                                                        couneseling, then in
                                                        person counseling is a
                                                        perfect and conveinent
                                                        option{" "}
                                                    </p>
                                                </CardBody>
                                            </ScrollAnimation>
                                        </Col>
                                    </Row>
                                </Card>

                                <Card className="card-plain card-blog">
                                    <Row>
                                        <Col md="7">
                                            <ScrollAnimation
                                                animateIn="slideInLeft"
                                                animateOnce={true}
                                                animationOut="zoomOut"
                                                duration={0.5}
                                            >
                                                <CardBody>
                                                    <h6 className="card-category text-danger">
                                                        <i className="fa fa-free-code-camp mr-1" />
                                                        Trending
                                                    </h6>
                                                    <CardTitle tag="h3">
                                                        <a
                                                            href="#pablo"
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                        >
                                                            Virtual Meetings
                                                        </a>
                                                    </CardTitle>
                                                    <p className="card-description">
                                                        If you live in South
                                                        Carolina and would like
                                                        to talk to a therapist,
                                                        then virtual meetings
                                                        are a perfect choice.
                                                        Calls are conducted via
                                                        Zoom, Google Meets, and
                                                        or FaceTime.{" "}
                                                    </p>
                                                </CardBody>
                                            </ScrollAnimation>
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
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
