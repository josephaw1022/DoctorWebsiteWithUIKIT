import React from "react"

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap"

export default function Menu2() {
    return (
        <>
            <div className="section section-gray" id="cards">
                <Container className="tim-container">
                    <div className="title">
                        <h2>Cards</h2>
                    </div>
                    <h4 className="title">Blog cards</h4>
                    <Row>
                        <Col md="4" sm="6">
                            <Card
                                data-background="image"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sections/rawpixel-com.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <CardTitle tag="h3">
                                            Ten Principles of {"“Good Design”"}
                                        </CardTitle>
                                    </a>
                                    <p className="card-description">
                                        Don't be scared of the truth because we
                                        need to restart the human foundation in
                                        truth And I love you like Kanye loves
                                        Kanye I love Rick Owens{"’ "}bed design
                                        but the back is...
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-round"
                                            color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-file-pdf-o mr-1" />
                                            Download PDF
                                        </Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>

                            <Card
                                data-background="image"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sections/rawpixel-com.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <CardTitle tag="h3">
                                            Ten Principles of {"“Good Design”"}
                                        </CardTitle>
                                    </a>
                                    <p className="card-description">
                                        Don't be scared of the truth because we
                                        need to restart the human foundation in
                                        truth And I love you like Kanye loves
                                        Kanye I love Rick Owens{"’ "}bed design
                                        but the back is...
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-round"
                                            color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-file-pdf-o mr-1" />
                                            See More
                                        </Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                            <Card
                                data-background="image"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sections/rawpixel-com.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <CardTitle tag="h3">
                                            Ten Principles of {"“Good Design”"}
                                        </CardTitle>
                                    </a>
                                    <p className="card-description">
                                        Don't be scared of the truth because we
                                        need to restart the human foundation in
                                        truth And I love you like Kanye loves
                                        Kanye I love Rick Owens{"’ "}bed design
                                        but the back is...
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-round"
                                            color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-file-pdf-o mr-1" />
                                            Download PDF
                                        </Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" sm="6">
                            <Card
                                data-background="image"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sections/rawpixel-com.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <CardTitle tag="h3">
                                            Ten Principles of {"“Good Design”"}
                                        </CardTitle>
                                    </a>
                                    <p className="card-description">
                                        Don't be scared of the truth because we
                                        need to restart the human foundation in
                                        truth And I love you like Kanye loves
                                        Kanye I love Rick Owens{"’ "}bed design
                                        but the back is...
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-round"
                                            color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-file-pdf-o mr-1" />
                                            Download PDF
                                        </Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>

                            <Card
                                data-background="image"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sections/rawpixel-com.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <CardTitle tag="h3">
                                            Ten Principles of {"“Good Design”"}
                                        </CardTitle>
                                    </a>
                                    <p className="card-description">
                                        Don't be scared of the truth because we
                                        need to restart the human foundation in
                                        truth And I love you like Kanye loves
                                        Kanye I love Rick Owens{"’ "}bed design
                                        but the back is...
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-round"
                                            color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-file-pdf-o mr-1" />
                                            Download PDF
                                        </Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" sm="6">
                            <Card data-color="orange">
                                <CardBody>
                                    <div className="author">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="avatar img-raised mr-2"
                                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                                            />
                                            <span>Erik Johnson</span>
                                        </a>
                                    </div>
                                    <span className="category-social pull-right">
                                        <i className="fa fa-quote-right" />
                                    </span>
                                    <div className="clearfix" />
                                    <p className="card-description">
                                        {'"'}Less, but better – because it
                                        concentrates on the essential aspects,
                                        and the products are not burdened with
                                        non-essentials. Back to purity, back to
                                        simplicity. At best, it is
                                        self-explanatory.{'"'}
                                    </p>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody className="text-center">
                                    <span className="category-social text-info pull-right">
                                        <i className="fa fa-twitter" />
                                    </span>
                                    <div className="clearfix" />
                                    <div className="author">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="avatar-big img-raised border-gray"
                                                src={require("assets/img/faces/kaci-baum-2.jpg")}
                                            />
                                        </a>
                                        <CardTitle tag="h5">
                                            Kaci Baum
                                        </CardTitle>
                                        <p className="category">
                                            <a
                                                className="text-danger"
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                @kacibaum
                                            </a>
                                        </p>
                                    </div>
                                    <p className="card-description">
                                        {'"'}Less, but better – because it
                                        concentrates on the essential aspects,
                                        and the products are not burdened with
                                        non-essentials.{'"'}
                                    </p>
                                </CardBody>
                            </Card>

                            <Card>
                                <div className="card-image">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <img
                                            alt="..."
                                            className="img"
                                            src={require("assets/img/sections/david-marcu.jpg")}
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <Badge color="warning" pill>
                                        Travel
                                    </Badge>
                                    <CardTitle tag="h5">
                                        Currently at the San Francisco Museum of
                                        Modern Art
                                    </CardTitle>
                                    <hr />
                                    <CardFooter>
                                        <div className="author">
                                            <a
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <img
                                                    alt="..."
                                                    className="avatar img-raised mr-2"
                                                    src={require("assets/img/FreeOnes/Photos1.png")}
                                                />
                                                <span>Lord Alex</span>
                                            </a>
                                        </div>
                                        <div className="stats">
                                            <i className="fa fa-heart mr-1" />
                                            5.3k
                                        </div>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
