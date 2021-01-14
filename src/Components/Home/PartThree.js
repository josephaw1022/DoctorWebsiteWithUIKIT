import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import {

  Card,
  CardFooter,
  CardBody,


} from "reactstrap";
 
export default function PartThree() {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    return (
      <>
        <div className="section" style={{marginBottom:"150px", height:"100%"}}>
        <Container id="Contact">
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Services Offered</h2>
            <h5 className="description">
            
            </h5>
            <br />
        </Col>
        </Row>
        <Row>
        <Col md="4">
            <Card
            className="c3"
            data-background="image"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos3.png") + ")"}}
            >
            <CardBody>
                <h6 className="card-category">Individual</h6>
                <div className="card-icon">
                <i className="nc-icon nc-world-2" />
                </div>
                <p className="card-description">
                blah blah blah blah 
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
        </Col>
        <Col md="4">
            <Card
            className="c2"
            data-background="image"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos13.png") + ")"}}
            
            >
            <CardBody>
                <h6 className="card-category">Group Therapy</h6>
                <div className="card-icon">
                <i className="nc-icon nc-single-copy-04" />
                </div>
                <p className="card-description">
                blah blah blah blah
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
        </Col>
        <Col md="4">
            <Card
            data-background="image"
            className="c1"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos1.png") + ")"}}
            >
            <CardBody>
                <h6 className="card-category">Faith Counseling</h6>
                <div className="card-icon">
                <i className="nc-icon nc-time-alarm" />
                </div>
                <p className="card-description">
                blah blah blah blah
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
        </Col>
        </Row>
        </Container>
        </div>
        </> 
    ); 
} 
