
import React from "react";
import "./Footer.css"
// reactstrap components
import { Row, Container, DropdownToggle , Col , Form , FormGroup, Button, Input} from "reactstrap";

export default function DemoFooter() {
  return (
    <>
    
    <div className="subscribe-line subscribe-line-transparent" style={{ backgroundImage: "url(" + require("./sample.png") + ")",}}>
      <Container>
        <Row>
          <Col lg="9" md="8" sm="8">
            <Form className="form-bord ">
              <FormGroup>
                <Input
                  defaultValue=""
                  placeholder="Enter your email..."
                  type="text"
                  className="dasds8"
                />
              </FormGroup>
            </Form>
          </Col>
          <Col md="3" sm="4">
            <Button block className="btn-round" color="info" type="button">
              Subscribe Now!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/">
                  Whiteaker Productions
                </a>
              </li>
              <li>
                <a href="/">
                  Blog
                </a>
              </li>
              <li>
                <a href="/">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
    </>
  );
}


