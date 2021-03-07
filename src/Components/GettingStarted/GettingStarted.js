import "./GettingStarted.css"
import React from "react"
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap"

// import { Link } from "react-router-dom"
import { Animated } from "react-animated-css"

class GettingStarted extends React.Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <>
                <div className="section" style={{ backgroundColor: "#333" }} />
                <div className="section" style={{ backgroundColor: "#333" }} />
                <div
                    className="section text-center"
                    style={{ backgroundColor: "#333" }}
                >
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <Animated
                                    animationIn="headShake"
                                    animationOut="fadeOut"
                                    isVisible={true}
                                >
                                    <h2
                                        className="title add-animation"
                                        style={{ color: "#fff" }}
                                    >
                                        {" "}
                                        Please call me and fill out the
                                        following forms
                                    </h2>
                                </Animated>

                                <br />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md="4">
                                <Animated
                                    animationIn="bounceInDown"
                                    isVisible={true}
                                >
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-briefcase-24" />
                                        </div>
                                        <div className="description">
                                            <h4
                                                className="info-title"
                                                style={{
                                                    color: "#fff",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                Hippa
                                            </h4>
                                            <p style={{ color: "#fff" }}></p>
                                            <a
                                                href="A+HIPAA.docx"
                                                rel="noopener noreferrer"
                                                className="button"
                                                download
                                            >
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                >
                                                    Download
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </Animated>
                            </Col>
                            <Col md="4">
                                <Animated
                                    animationIn="bounceInDown"
                                    isVisible={true}
                                >
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-single-02" />
                                        </div>
                                        <div className="description">
                                            <h4
                                                className="info-title"
                                                style={{
                                                    color: "#fff",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                Individual Consent
                                            </h4>
                                            <p style={{ color: "#fff" }}></p>
                                            <a
                                                href="A+Diclosure-informed-consent.docx"
                                                rel="noopener noreferrer"
                                                className="button"
                                                download
                                            >
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                >
                                                    Download
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </Animated>
                            </Col>
                            <Col md="4">
                                <Animated
                                    animationIn="bounceInDown"
                                    isVisible={true}
                                >
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-credit-card" />
                                        </div>
                                        <div className="description">
                                            <h4
                                                className="info-title"
                                                style={{
                                                    color: "#fff",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                Financial Responsibility
                                            </h4>
                                            <p style={{ color: "#fff" }}></p>
                                            <a
                                                href="A+-Patient-Financial-Responsibility-Form.docx"
                                                rel="noopener noreferrer"
                                                className="button"
                                                download
                                            >
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                >
                                                    Download
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </Animated>
                            </Col>

                            <Col md="4">
                                <Animated
                                    animationIn="bounceInDown"
                                    isVisible={true}
                                >
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-user-run" />
                                        </div>
                                        <div className="description">
                                            <h4
                                                className="info-title"
                                                style={{
                                                    color: "#fff",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                Individual Intake
                                            </h4>
                                            <p style={{ color: "#fff" }}></p>
                                        </div>
                                        <a
                                            href="A+-Individual-Intake-2021.docx"
                                            rel="noopener noreferrer"
                                            className="button"
                                            download
                                        >
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                            >
                                                Download
                                            </Button>
                                        </a>
                                    </div>
                                </Animated>
                            </Col>
                            <Col md="4">
                                <Animated
                                    animationIn="bounceInDown"
                                    isVisible={true}
                                >
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-email-85" />
                                        </div>
                                        <div className="description">
                                            <h4
                                                className="info-title"
                                                style={{
                                                    color: "#fff",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                Email Consent
                                            </h4>
                                            <p style={{ color: "#fff" }}></p>
                                        </div>

                                        <a
                                            href="A+-Email-text-cosent.docx"
                                            rel="noopener noreferrer"
                                            className="button"
                                            download
                                        >
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                            >
                                                Download
                                            </Button>
                                        </a>
                                    </div>
                                </Animated>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
export default GettingStarted
