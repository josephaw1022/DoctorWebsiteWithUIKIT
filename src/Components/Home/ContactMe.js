
import React from 'react';
import "./changecolor.css"
import { InputGroupAddon, InputGroup, InputGroupText, Row, Col, Input , Container, Form , Button} from 'reactstrap';


class ContactMe extends React.Component{ 
    render(){ 
        return( 
            <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center tob"  >Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label className="tob">Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label className="tob">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label className="tob">Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        ); 
    }
}
export default ContactMe; 