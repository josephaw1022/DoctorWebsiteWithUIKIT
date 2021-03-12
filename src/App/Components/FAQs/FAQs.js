import "./FAQs.css"
import React from "react"

import { Row, Col, CardBody, CardTitle, Container } from "reactstrap"

import $ from "jquery"
import ScrollAnimation from "react-animate-on-scroll"
import Flippy, { FrontSide, BackSide } from "react-flippy"

class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FAQ: {},
            update: false,
            cardBack: "",
        }
    }

    updateQuestion() {
        let file = require("./faqInfo.json")
        this.setState({ FAQ: file.FAQ, update: true })
    }

    componentWillMount() {
        this.updateQuestion()
    }

    render() {
        let ComponentPieces = this.state.FAQ.Questions.map((index) => {
            let cardSize = ""
            if (index.Weird === true) {
                cardSize = "auto"

                index.Answer = (
                    <p
                        style={{
                            color: "#fff",
                            overflow: "hidden",
                            fontSize: "small",
                            marginBottom: "auto",
                        }}
                    >
                        {" "}
                        - Therapy is a partnership between an individual and a
                        professional trained to help people understand their
                        feelings and help them change their behavior. People
                        often consider therapy under the following
                        circumstances:
                        <br />
                        <br />- They feel an overwhelming and prolonged sense of
                        sadness and helplessness in their futures.
                        <br />
                        <br />- Their emotional difficulties make it hard for
                        them to function from day to day.
                        <br />
                        <br />- Their actions are harmful to themselves or
                        others.
                        <br />
                        <br />- They are troubled by emotional problems facing
                        family members or close friends.
                    </p>
                )
            }

            return (
                <>
                    <Row>
                        <Col md="6">
                            <ScrollAnimation
                                animateIn="slideInLeft"
                                animationOut="zoomOut"
                                animatePreScroll={true}
                                duration={0.5}
                                animateOnce={true}
                            >
                                <Flippy className=" card card-contact">
                                    <FrontSide
                                        style={{
                                            height: cardSize,
                                        }}
                                    >
                                        <Row>
                                            <Col md="12">
                                                <CardBody>
                                                    <CardTitle tag="h4">
                                                        <h4
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                            style={{
                                                                color: "#333",
                                                                fontWeight:
                                                                    "bold",
                                                                textAlign:
                                                                    "center",
                                                                padding: "40px",
                                                            }}
                                                            className={
                                                                index.Color
                                                            }
                                                        >
                                                            {index.Question}
                                                        </h4>
                                                    </CardTitle>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </FrontSide>
                                    <BackSide
                                        style={{
                                            height: cardSize,
                                            zIndex: "1",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <CardBody
                                            style={{
                                                backgroundColor: "#333",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: "#fff",
                                                    fontWeight: "bolder",
                                                }}
                                            >
                                                {index.Answer}
                                            </p>
                                        </CardBody>
                                    </BackSide>
                                    {/* </Card> */}
                                </Flippy>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <br />
                    <br />

                    <Row>
                        <Col md={6}></Col>
                        <Col md="6">
                            <ScrollAnimation
                                animateIn={
                                    $(window).width() < 900
                                        ? "slideInLeft"
                                        : "slideInRight"
                                }
                                animationOut="zoomOut"
                                animatePreScroll={true}
                                duration={0.5}
                                animateOnce={true}
                            >
                                <Flippy
                                    style={{
                                        zIndex: "-1",
                                    }}
                                >
                                    <FrontSide
                                        style={{
                                            height: cardSize,
                                        }}
                                    >
                                        <Row>
                                            <Col md="12">
                                                <CardBody>
                                                    <CardTitle tag="h4">
                                                        <h4
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                            style={{
                                                                color: "#333",
                                                                fontWeight:
                                                                    "bold",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                            className={
                                                                index.Color2
                                                            }
                                                        >
                                                            {index.Question2}
                                                        </h4>
                                                    </CardTitle>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </FrontSide>
                                    <BackSide
                                        style={{
                                            height: cardSize,
                                            zIndex: "1",
                                        }}
                                    >
                                        <CardBody>
                                            <p
                                                style={{
                                                    color: "#fff",
                                                    fontWeight: "bolder",
                                                }}
                                            >
                                                {index.Answer2}
                                            </p>
                                        </CardBody>
                                    </BackSide>
                                </Flippy>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </>
            )
        })

        window.scrollTo(0, 0)
        return (
            <>
                <div
                    className="section"
                    style={{ backgroundColor: "#333333" }}
                />
                <div
                    className="section "
                    style={{ backgroundColor: "#333333" }}
                >
                    <div className="blog-3" id="Exercise">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="10">
                                    <h1
                                        className="title"
                                        style={{
                                            textAlign: "center",
                                            color: "#fff",
                                            fontWeight: "bolder",
                                            marginBottom: "70px",
                                        }}
                                    >
                                        Frequently Asked Questions
                                    </h1>

                                    <br />
                                    {ComponentPieces}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div
                    className="section"
                    style={{ backgroundColor: "#333333" }}
                />
            </>
        )
    }
}
export default FAQs
