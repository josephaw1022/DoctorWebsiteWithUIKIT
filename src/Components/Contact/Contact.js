import React from "react";

// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

function Contact() {

  return (
    <>
      <div className="main"
      style={{
        backgroundImage:
          "url(" + require("assets/img/forest-bg.jpg") + ")",}}
      
      data-parallax={true}
      ref={Contact}
      >
        <div className="section section-gray">
          <Container style={{backgroundColor:"transparent"}}>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Get in touch with us</h2>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualise customer
                  directed convergence without revolutionary ROI.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>Find us on social networks</small>
                </h3>
                <Button className="btn-just-icon mr-1" color="twitter">
                  <i className="fa fa-twitter" />
                </Button>
                <Button className="btn-just-icon mr-1" color="facebook">
                  <i className="fa fa-facebook" />
                </Button>
                <Button className="btn-just-icon mr-1" color="google">
                  <i className="fa fa-google" />
                </Button>
                <Button className="btn-just-icon mr-1" color="dribbble">
                  <i className="fa fa-dribbble" />
                </Button>
                <Button className="btn-just-icon mr-1" color="instagram">
                  <i className="fa fa-instagram" />
                </Button>
                <Button className="btn-just-icon" color="youtube">
                  <i className="fa fa-youtube" />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>Or drop us a note</small>
                </h3>
                <Form className="contact">
                  <Row>
                    <Col md="6">
                      <Input placeholder="First Name" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Last Name" type="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Input placeholder="Email" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Subject" type="text" />
                    </Col>
                  </Row>
                  <Input placeholder="Message" rows="7" type="textarea" />
                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button block className="btn-round" color="primary">
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <h3 className="visit">
                  <small>Or come and visit</small>
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      

    </>
  );
}

export default Contact;
