import React from "react"
import "./Rates.css"
import { Animated } from "react-animated-css"
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap"

class Rates extends React.Component {
    constructor(props) {
        super(props)
        this.state = null
    }

    render() {
        window.scrollTo(0, 0)
        return (
            <>
                <div className="section section-black">
                    <div className="testimonials-3">
                        <Container>
                            <Row>
                                <Col
                                    className="ml-auto mr-auto text-center"
                                    md="6"
                                >
                                    <Animated
                                        animationIn="zoomInDown"
                                        animationOut="zoomOutDown"
                                        animationInDuration={1000}
                                        animationOutDuration={1000}
                                        isVisible={true}
                                    >
                                        <h2
                                            className="title title"
                                            style={{
                                                color: "white",
                                                marginTop: "80px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Rates and Insurance
                                        </h2>
                                    </Animated>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto" md="5">
                                    <Animated
                                        animationIn="zoomInDown"
                                        animationOut="zoomOutDown"
                                        animationInDuration={1000}
                                        animationOutDuration={1000}
                                        isVisible={true}
                                    >
                                        <Card
                                            data-background="color"
                                            data-color="orange"
                                        >
                                            <CardBody>
                                                <div className="author">
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className="softblack"
                                                    >
                                                        <span
                                                            className="softblack"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            Rates
                                                        </span>
                                                    </a>
                                                </div>

                                                <span className="category-social pull-right"></span>
                                                <div className="clearfix" />
                                                <p
                                                    className="card-description"
                                                    style={{
                                                        color: "#333333",
                                                    }}
                                                >
                                                    Adult Individual Counseling
                                                    - $100/50 minutes <br />
                                                    <br />
                                                    Adolescent Individual
                                                    Counseling - $80/50 minutes{" "}
                                                    <br />
                                                    <br />
                                                    Family Counseling - $120/50
                                                    minutes <br />
                                                    <br />
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Animated>
                                </Col>
                                <Col md="3">
                                    <Animated
                                        animationIn="zoomInDown"
                                        animationOut="zoomOutDown"
                                        animationInDuration={1000}
                                        animationOutDuration={1000}
                                        isVisible={true}
                                    >
                                        <Card
                                            data-background="color"
                                            data-color="green"
                                        >
                                            <CardBody>
                                                <div className="author">
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className="softblack"
                                                    >
                                                        <span
                                                            className="softblack"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            Insurance
                                                        </span>
                                                    </a>
                                                </div>

                                                <span className="category-social pull-right"></span>
                                                <div className="clearfix" />
                                                <p
                                                    className="card-description"
                                                    style={{
                                                        color: "#333333",
                                                    }}
                                                >
                                                    Sorry for the inconvenience;
                                                    we are in the process of
                                                    being paneled for various
                                                    insurances. The website will
                                                    be updated as we are
                                                    improved
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Animated>
                                </Col>
                                <Col className="mr-auto" md="2">
                                    <Animated
                                        animationIn="zoomInDown"
                                        animationOut="zoomOutDown"
                                        animationInDuration={1000}
                                        animationOutDuration={1000}
                                        isVisible={true}
                                    >
                                        <Card
                                            data-background="color"
                                            data-color="yellow"
                                        >
                                            <CardBody>
                                                <div className="author">
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className="softblack"
                                                    >
                                                        <span
                                                            className="softblack"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            Payment Methods
                                                        </span>
                                                    </a>
                                                </div>

                                                <span className="category-social pull-right"></span>
                                                <div className="clearfix" />
                                                <p
                                                    className="card-description"
                                                    style={{
                                                        color: "#333333",
                                                    }}
                                                >
                                                    Cash, check, or debit
                                                    (service fees apply)
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Animated>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto" md="4">
                                    <Animated
                                        animationIn="zoomInDown"
                                        animationOut="zoomOutDown"
                                        animationInDuration={1000}
                                        animationOutDuration={1000}
                                        isVisible={true}
                                    >
                                        <Card
                                            data-background="color"
                                            data-color="blue"
                                        >
                                            <CardBody>
                                                <div className="author">
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className="softblack"
                                                    >
                                                        <span
                                                            className="softblack"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            Cancellation Policy
                                                        </span>
                                                    </a>
                                                </div>

                                                <span className="category-social pull-right"></span>
                                                <div className="clearfix" />
                                                <p
                                                    className="card-description"
                                                    style={{
                                                        color: "#333333",
                                                    }}
                                                >
                                                    If you do not show up for
                                                    your scheduled therapy
                                                    appointment and have not
                                                    notified us at least 24
                                                    hours in advance, you will
                                                    be required to pay $50 for
                                                    the missed session.
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Animated>
                                </Col>
                                <Col className="mr-auto" md="6">
                                    <Animated
                                        animationIn="zoomInDown"
                                        animationOut="zoomOutDown"
                                        animationInDuration={1000}
                                        animationOutDuration={1000}
                                        isVisible={true}
                                    >
                                        <Card
                                            data-background="color"
                                            data-color="purple"
                                        >
                                            <CardBody>
                                                <div className="author">
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className="softblack"
                                                    >
                                                        <span
                                                            className="softblack"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            General Insurance
                                                            Questions
                                                        </span>
                                                    </a>
                                                </div>

                                                <span className="category-social pull-right"></span>
                                                <div className="clearfix" />
                                                <p
                                                    className="card-description"
                                                    style={{
                                                        color: "#333333",
                                                    }}
                                                >
                                                    Services may be covered in
                                                    full or in part by your
                                                    health insurance or employee
                                                    benefit plan. Please check
                                                    your coverage carefully by
                                                    asking the following
                                                    questions: <br />
                                                    Do I have mental health
                                                    insurance benefits?
                                                    <br />
                                                    <br />
                                                    What is my deductible, and
                                                    has it been met?
                                                    <br />
                                                    <br />
                                                    How many sessions per year
                                                    does my health insurance
                                                    cover?
                                                    <br />
                                                    <br />
                                                    What is the coverage amount
                                                    per therapy session?
                                                    <br />
                                                    <br />
                                                    Is approval required from my
                                                    primary care physician?
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Animated>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}

export default Rates
