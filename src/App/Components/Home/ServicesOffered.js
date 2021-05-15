import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Card, CardFooter, CardBody } from "reactstrap";
import $ from "jquery";

import Hollistic from "./Modals/ServicesOffered/Hollistic";
import Individual from "./Modals/ServicesOffered/Individual";
import Faith from "./Modals/ServicesOffered/Faith";

export default class ServicesOffered extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ServicesOffered: {},
            modalData: {},
        };
    }

    componentDidMount() {
        this.setState({
            ServicesOffered: this.props.data,
            modalData: this.props.data2,
        });
    }

    screensize() {
        if ($(window).width() < 900) {
            return null;
        }
        return " parallax";
    }

    render() {
        return (
            <>
                <div className="section menubg">
                    <Container id="Services">
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title textc">
                                    Services Offered
                                </h2>

                                <br />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="4">
                                <Card
                                    className={"photo1 " + this.screensize()}
                                    data-background="image"
                                    style={{
                                        height: "initial",
                                    }}
                                >
                                    <CardBody>
                                        <h6 className="card-category">
                                            Hollistic
                                        </h6>
                                        <div className="card-icon">
                                            <i className="nc-icon nc-chat-33" />
                                        </div>
                                        <p className="card-description"></p>
                                        <CardFooter>
                                            <Hollistic />
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card
                                    className={"photo2 " + this.screensize()}
                                    data-background="image"
                                    style={{
                                        height: "initial",
                                    }}
                                >
                                    <CardBody>
                                        <h6 className="card-category">
                                            Individual
                                        </h6>
                                        <div className="card-icon">
                                            <i className="nc-icon nc-shop" />
                                        </div>
                                        <p className="card-description"></p>
                                        <CardFooter>
                                            <Individual />
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                {$(window).width() > 900 ? (
                                    <Card
                                        data-background="image"
                                        className={
                                            "photo3 " + this.screensize()
                                        }
                                        style={{
                                            height: "initial",
                                        }}
                                    >
                                        <CardBody>
                                            <h6 className="card-category">
                                                Faith Counseling
                                            </h6>
                                            <div className="card-icon">
                                                <i className="nc-icon nc-send" />
                                            </div>
                                            <p className="card-description"></p>
                                            <CardFooter>
                                                <Faith />
                                            </CardFooter>
                                        </CardBody>
                                    </Card>
                                ) : (
                                    <Card
                                        data-background="image"
                                        className={
                                            "photo4 " + this.screensize()
                                        }
                                        style={{
                                            height: "initial",
                                        }}
                                    >
                                        <CardBody>
                                            <h6 className="card-category">
                                                Faith Counseling
                                            </h6>
                                            <div className="card-icon">
                                                <i className="nc-icon nc-send" />
                                            </div>
                                            <p className="card-description"></p>
                                            <CardFooter>
                                                <Button
                                                    className="btn-neutral"
                                                    color="link"
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-book mr-1" />
                                                    Show more
                                                </Button>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}
