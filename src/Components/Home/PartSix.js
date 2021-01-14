import React from "react"
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
  } from "reactstrap";



export default function PartSix(){ 
    return(
        <div className="project-4 section section-dark">
        <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Some of Our Awesome Projects - 4</h2>
            <h5 className="description">
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
            </h5>
            </Col>
        </Row>
        <div className="space-top" />
        <Row>
            <Col className="ml-auto" md="5">
            <Card
                data-background="image"
                style={{
                backgroundImage:
                    "url(" +
                    require("assets/img/sections/sebastien-gabrieles.jpg") +
                    ")",
                }}
            >
                <div className="card-icon">
                <i className="nc-icon nc-mobile" />
                </div>
            </Card>
            </Col>
            <Col className="mr-auto" md="5">
            <Card className="card-plain">
                <CardBody>
                <h6 className="card-category">Technology</h6>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h3">
                    The need of a great product
                    </CardTitle>
                </a>
                <p className="card-description">
                    Artificial intelligence-focused investment funds are a
                    dime a dozen these days. Everyone knows there’s money to
                    be made from AI, but to capture value, good VCs know
                    they need to back products and not technologies.
                </p>
                <CardFooter>
                    <Button
                    className="btn-neutral mr-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-book mr-1" />
                    Read More
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral mr-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-apple" />
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral mr-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-android" />
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-windows" />
                    </Button>
                </CardFooter>
                </CardBody>
            </Card>
            </Col>
        </Row>
        <br />
        <hr />
        <br />
        <Row>
            <Col className="ml-auto" md="5">
            <Card className="card-plain">
                <CardBody>
                <h6 className="card-category">Design</h6>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h3">
                    The aesthetic quality of a product
                    </CardTitle>
                </a>
                <p className="card-description">
                    Eventually, the data collected from the grant program
                    could allow the two to play a bit of machine learning
                    moneyball — valuing machine learning engineers without
                    traditional metrics (like having a PhD from Stanford)...
                </p>
                <CardFooter>
                    <Button
                    className="btn-neutral mr-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-book mr-1" />
                    Read More
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral mr-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-apple" />
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral mr-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-android" />
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-windows" />
                    </Button>
                </CardFooter>
                </CardBody>
            </Card>
            </Col>
            <Col className="mr-auto" md="5">
            <Card
                data-background="image"
                style={{
                backgroundImage:
                    "url(" +
                    require("assets/img/sections/john-towner.jpg") +
                    ")",
                }}
            >
                <div className="card-icon">
                <i className="nc-icon nc-controller-modern" />
                </div>
            </Card>
            </Col>
        </Row>
        </Container>
        </div>
        
    );
}