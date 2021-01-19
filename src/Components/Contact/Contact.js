import React from "react";
// react plugin used to create google maps

// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
// import {

//     Card,
//     CardBody,
//     CardFooter,
//     CardTitle
//   } from "reactstrap";
  


function ContactUs() {
    
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
    
    };
  });
  return (
    <>

    
      <div className="section" style={{backgroundColor:"#333"}}/>
      <div className="main contact-page" id="ContactUs">
      <div className="bg-success">
        <div className="section reddy" style={{backgroundColor:"#333"}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style={{color:"#fff"}}>Get in touch with us</h2>
                <p style={{color:"#fff"}}>
                Questions? Please contact me for further information at 843-589-1517
                <br/><br/>
                PATIENTS ARE ASKED NOT TO SEND MESSAGES TO THIS ADDRESS AS STAFF MAY
                 NOT SEE THEM IN A TIMELY MANNER. IF YOU ARE EXPERIENCING A PSYCHIATRIC 
                 (MENTAL HEALTH) CRISIS, PLEASE CALL OUR MOBILE CRISIS/COMMUNITY CRISIS 
                 RESPONSE AND INTERVENTION TEAM, TOLL-FREE, AT (833) 364-2274. IT IS 
                 AVAILABLE AT ALL TIMES. AS ALWAYS, IF YOU ARE EXPERIENCING A MEDICAL 
                EMERGENCY, PLEASE CALL 911.
                <br/><br/> 
                PRIVACY NOTICE: THIS COMMUNICATION IS INTENDED ONLY FOR THE USE OF THE 
                INDIVIDUAL OR ENTITY TO WHICH IT IS ADDRESSED AND MAY CONTAIN SCDMH PATIENT
                OR OTHER INFORMATION THAT IS PRIVATE AND PROTECTED FROM DISCLOSURE BY
                APPLICABLE LAW INCLUDING: 45 CFR PART 160 (HIPAA), § 44-22-100, S.C.
                CODE OF LAWS (SCDMH PATIENT CONFIDENTIALITY), AND WHEN APPLICABLE, 
                42 CFR PART 2 (ALCOHOL AND DRUG PROGRAM CONFIDENTIALITY.) IF THE 
                READER OF THIS MESSAGE IS NOT THE INTENDED RECIPIENT OR RESPONSIBLE 
                FOR DELIVERING THE MESSAGE TO THE INTENDED RECIPIENT, YOU ARE HEREBY 
                NOTIFIED THAT ANY DISSEMINATION, DISTRIBUTION OR COPYING OF THIS 
                COMMUNICATION, OR THE INFORMATION CONTAINED WITHIN IT, IS STRICTLY
                PROHIBITED AND MAY SUBJECT THE VIOLATOR TO CIVIL AND/OR CRIMINAL 
                PENALTIES. IF YOU HAVE RECEIVED THIS COMMUNICATION IN ERROR, 
                PLEASE NOTIFY US IMMEDIATELY BY TELEPHONE, REPLY E-MAIL OR FAX USING 
                THE PHONE NUMBER OR ADDRESS IDENTIFIED IN THIS COMMUNICATION AND DESTROY 
                OR DELETE ALL COPIES OF THIS COMMUNICATION AND ALL ATTACHMENTS.
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
                
                <Button className="btn-just-icon mr-1" color="instagram">
                  <i className="fa fa-instagram" />
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
      </div> 
      

      

    </>
  );
}

export default ContactUs;
