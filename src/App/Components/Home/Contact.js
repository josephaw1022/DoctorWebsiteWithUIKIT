import React from "react"

import ScrollAnimation from "react-animate-on-scroll"

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap"

// core components

function SectionContactUs() {
    return (
        <>
            <div
                className="section "
                id="Contact"
                style={{
                    backgroundColor: "#333",
                    height: "110%",
                }}
            >
                <div className="contactus-1">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="10">
                                <ScrollAnimation
                                    animateIn="fadeIn"
                                    animateOnce={true}
                                    duration={1.2}
                                >
                                    <Card className="card-contact">
                                        <CardTitle
                                            className="text-center"
                                            tag="h3"
                                        >
                                            Contact Us
                                        </CardTitle>
                                        <Row>
                                            <Col className="ml-auto" md="5">
                                                <CardBody>
                                                    <div className="info info-horizontal">
                                                        <div className="icon icon-info"></div>
                                                        <div className="description"></div>
                                                    </div>
                                                    <div className="info info-horizontal">
                                                        <div className="icon icon-info">
                                                            <i className="nc-icon nc-badge" />
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">
                                                                Give me a ring
                                                            </h4>
                                                            <p>
                                                                Al Brown <br />
                                                                843-589-1517{" "}
                                                                <br />
                                                                Mon - Fri, 8:00
                                                                am - 5:00 pm
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                            <Col className="mr-auto" md="5">
                                                <Form
                                                    id="contact-form"
                                                    method="post"
                                                    role="form"
                                                >
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="6">
                                                                <FormGroup className="label-floating">
                                                                    <label className="control-label">
                                                                        First
                                                                        name
                                                                    </label>
                                                                    <Input
                                                                        name="name"
                                                                        placeholder="First Name"
                                                                        type="text"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md="6">
                                                                <FormGroup className="label-floating">
                                                                    <label className="control-label">
                                                                        Last
                                                                        name
                                                                    </label>
                                                                    <Input
                                                                        name="name"
                                                                        placeholder="Last Name"
                                                                        type="text"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup className="label-floating">
                                                            <label className="control-label">
                                                                Email address
                                                            </label>
                                                            <Input
                                                                name="email"
                                                                placeholder="Email"
                                                                type="email"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup className="label-floating">
                                                            <label className="control-label">
                                                                Your message
                                                            </label>
                                                            <Input
                                                                id="message"
                                                                name="message"
                                                                placeholder="Message"
                                                                type="textarea"
                                                                rows="6"
                                                            />
                                                        </FormGroup>
                                                        <Row>
                                                            <Col md="6">
                                                                <FormGroup
                                                                    check
                                                                ></FormGroup>
                                                            </Col>
                                                            <Col md="6">
                                                                <Button
                                                                    className="pull-right"
                                                                    color="primary"
                                                                    type="submit"
                                                                >
                                                                    Send Message
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Card>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ********* END CONTACT US 1 ********* */}
            </div>
        </>
    )
}

export default SectionContactUs
