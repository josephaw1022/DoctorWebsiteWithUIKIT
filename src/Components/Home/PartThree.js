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
        <div className="section" style={{marginBottom:"250px", height:"100%"}}>
        <Container id="Contact">
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Is this what you are looking for?</h2>
            <h5 className="description">
            This is the paragraph where you can write more details about
            your product. Keep you user engaged by providing meaningful
            information. Remember that by this time, the user is curious,
            otherwise he wouldn't scroll to get here.
            </h5>
            <br />
        </Col>
        </Row>
        <Row>
        <Col md="4">
            <Card
            className="c3"
            data-background="image"
            
            >
            <CardBody>
                <h6 className="card-category">Design</h6>
                <div className="card-icon">
                <i className="nc-icon nc-world-2" />
                </div>
                <p className="card-description">
                Unlike fashionable design, it lasts many years – even in
                today’s throwaway society
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
            
            >
            <CardBody>
                <h6 className="card-category">UI Kits</h6>
                <div className="card-icon">
                <i className="nc-icon nc-single-copy-04" />
                </div>
                <p className="card-description">
                Imagine if you could go to the profile of a friend and
                instead of scrolling through...
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
            >
            <CardBody>
                <h6 className="card-category">Development</h6>
                <div className="card-icon">
                <i className="nc-icon nc-time-alarm" />
                </div>
                <p className="card-description">
                For starters, it seemed like a good idea to keep a running
                list of Vision investments.
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
