import React from 'react'

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from 'reactstrap'

export default function BlogPosts() {
    return (
        <div className="blog-4" id="Counseling">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="title text-center">
                            {' '}
                            Latest Blogposts{' '}
                        </h2>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card className="card-plain card-blog text-center">
                            <div className="card-image">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <img
                                        alt="..."
                                        className="img img-raised"
                                        src={require('assets/img/FreeOnes/Photos15.png')}
                                        height
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <h6 className="card-category text-info">
                                    Travel
                                </h6>
                                <CardTitle tag="h3">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Learning different cultures through
                                        travel
                                    </a>
                                </CardTitle>
                                <p className="card-description">
                                    blah blah blah blah blah blah blah blah
                                    blahblah blah blah blah blah blah
                                </p>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-plain card-blog text-center">
                            <div className="card-image">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <img
                                        alt="..."
                                        className="img img-raised"
                                        src={require('assets/img/FreeOnes/Photos17.png')}
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <h6 className="card-category text-info">
                                    Travel
                                </h6>
                                <CardTitle tag="h3">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Kick-Ass ways to disappear like a Ninja!
                                    </a>
                                </CardTitle>
                                <p className="card-description">
                                    blah blah blah blah blah blah blah blah
                                    blahblah blah blah blah blah blah
                                </p>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card className="card-plain card-blog text-center">
                            <div className="card-image">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <img
                                        alt="..."
                                        className="img img-raised"
                                        src={require('assets/img/FreeOnes/Photos14.png')}
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <h6 className="card-category text-info">
                                    Lifestyle
                                </h6>
                                <CardTitle tag="h3">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        We will breathe clean air and exercise
                                    </a>
                                </CardTitle>
                                <p className="card-description">
                                    blah blah blah blah blah blah blah blah
                                    blahblah blah blah blah blah blah
                                </p>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-plain card-blog text-center">
                            <div className="card-image">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <img
                                        alt="..."
                                        className="img img-raised"
                                        src={require('assets/img/FreeOnes/Photos11.png')}
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <h6 className="card-category text-info">
                                    Best Seller
                                </h6>
                                <CardTitle tag="h3">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Readers Pick of The Month
                                    </a>
                                </CardTitle>
                                <p className="card-description">
                                    blah blah blah blah blah blah blah blah
                                    blahblah blah blah blah blah blah
                                </p>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
