import React from "react" 
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
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
  

export default function PartFour(){ 

    return(
        <div className="projects-2 section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h6 className="text-muted">Our work</h6>
              <h2 className="title">Some of Our Awesome Products - 2</h2>
              <h5 className="description">
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
            </Col>
          </Row>
          <div className="space-top" />
          <Row>
            <Col md="4">
              <Card className="card-plain">
                <CardImg top tag="div">
                  <a
                    href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/opt_pk_react_thumbnail.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <a
                    href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <CardTitle tag="h4">Paper Kit Free React</CardTitle>
                    <br />
                  </a>
                  <h6 className="card-category text-muted">Free Ui kit</h6>
                  <p className="card-description">
                    Paper Kit React is a free Bootstrap 4, React, React Hooks
                    and Reactstrap UI Kit with pale colors, beautiful
                    typography and thoughtful drawings. We've created it
                    having paper and drawings in mind.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/argon-dashboard-pro-react.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <a
                    href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <CardTitle tag="h4">Argon Dashboard PRO React</CardTitle>
                    <br />
                  </a>
                  <h6 className="card-category text-muted">
                    Premium template
                  </h6>
                  <p className="card-description">
                    Argon is a completly new product built on our newest
                    re-built from scratch framework structure that is meant to
                    make our products more intuitive, more adaptive and,
                    needless to say, so much easier to customize. Let Argon
                    amaze you with its cool features and build tools and get
                    your project to a whole new level.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/blk-design-system-pro-react.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <a
                    href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <CardTitle tag="h4">
                      BLK Design System PRO React
                    </CardTitle>
                  </a>
                  <h6 className="card-category text-muted">Premium UI kit</h6>
                  <p className="card-description">
                    Start your development with a Premium Black Design System
                    for Bootstrap 4 made with React, Reactstrap and
                    create-react-app. It combines colors that are easy on the
                    eye, spacious cards, beautiful typography, and graphics.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
}