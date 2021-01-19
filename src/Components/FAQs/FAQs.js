import "./FAQs.css" ; 
import React from 'react'; 
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";
// import $ from 'jquery';

class FAQs extends React.Component{ 
    

    

    

    componentDidMount(){ 
       
    
    }


    render(){ 
      
        window.scrollTo(0, 0); 
        return( 
            <>
            <div className="section" style={{backgroundColor:"#333333"}}/> 
            <div className="section section-grey" style={{backgroundColor:"#333333"}}> 
            <div className="blog-3" id="Exercise">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                  <h2 className="title" style={{textAlign:"center", color:"#fff", fontWeight:"bolder"}} >FAQs -</h2>
                    </Animated> 
                  <br />
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          
                          <CardTitle tag="h3">
                            <a href="/FAQs"  onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-info">
                            Why do people consider using therapy?
                            </a>
                          </CardTitle>
                          <p className="card-description " style={{color:"#fff"}}>
                          <br/><br/> - Therapy is a partnership between an individual and a professional trained to help people understand their feelings and help them change their behavior. People often consider therapy under the following circumstances:
                          <br/><br/> - They feel an overwhelming and prolonged sense of sadness and helplessness in their futures.
                          <br/><br/> - Their emotional difficulties make it hard for them to function from day to day.
                          <br/><br/> - Their actions are harmful to themselves or others.
                          <br/><br/> - They are troubled by emotional problems facing family members or close friends.

                            
                          </p>
                          
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                  </Animated> 
                  <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="8">
                        <CardBody>
                         
                          <CardTitle tag="h3">
                            <a  href="/FAQs"  onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-danger">
                            How do I schedule an appointment?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          You may schedule an appointment by calling our office Monday-Friday from 8am - 8pm using this number: (###)-###-####. 
                          <br/> <br/> 
                          You can also send us a message by clicking on the Contact tab. We will then get in touch with you to schedule an appointment.
                            
                            
                          </p>
                         
                        </CardBody>
                      </Col>
                      <Col md="4">
                        <div className="card-image">
                          <a  href="/FAQs"   onClick={(e) => e.preventDefault()}>
                            
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                  </Animated>
                  
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          <a  href="/FAQs"   onClick={(e) => e.preventDefault()}>
                            
                          </a>
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          
                          <CardTitle tag="h3">
                            <a href="/FAQs"   onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-success">
                            What is your cancellation policy?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          A notice of 24 hours is required for all canceled or rescheduled
                          appointments. Missed appointments and late cancellations are charged at $25.
                            
                          </p>
                          
                        </CardBody>
                      </Col>
                    </Row>
                    </Card> 
                    </Animated>

                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                    <Card className="card-plain card-blog">
                    <Row>
                      <Col md="8">
                        <CardBody>
                         
                          <CardTitle tag="h3">
                            <a href="/FAQs"   onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-primary">
                            What forms of payment do you accept?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          We accept Cash, Check, Credit Card, Paypal, Cashapp, or Venmo.
                          If using a credit card, a processing fee may apply. Payment is due at the time of service.
                            
                            
                          </p>
                         
                        </CardBody>
                      </Col>
                      <Col md="4">
                        <div className="card-image">
                          
                        </div>
                      </Col>
                    </Row>
                  </Card>
                  </Animated>

                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          <a href="/FAQs"  onClick={(e) => e.preventDefault()}>
                            
                          </a>
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          
                          <CardTitle tag="h3">
                            <a href="/F" onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-warning">
                            How much does counseling cost?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          The fees range from $100 – $140 per session. The agency will be accepting various insurances shortly.
                           Co-payment is driven by your insurance plan and is due at the end of each session.
                            
                          </p>
                          
                        </CardBody>
                      </Col>
                    </Row>
                    </Card> 
                    </Animated>

                    <Animated  animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                    <Card className="card-plain card-blog">
                    <Row>
                      <Col md="8">
                        <CardBody>
                         
                          <CardTitle tag="h3">
                            <a href="/FAQs"  onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-neutral">
                            How long is each session? 
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          The sessions are approximately 50 minutes in length.
                          </p>                 
                        </CardBody>
                      </Col>
                      <Col md="4">
                        <div className="card-image">
                          
                        </div>
                      </Col>
                    </Row>
                  </Card>
                  </Animated>
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                        
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          
                          <CardTitle tag="h3">
                            <a href="/FAQs"  onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-danger">
                            Is Online Therapy Effective?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          A 2014 study published in the Journal of Affective Disorders found
                        that online therapy is just as effective as a face-to-face treatment for depression.
                          </p>
                        </CardBody>
                      </Col>
                    </Row>
                    </Card> 
                    </Animated>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                    <Card className="card-plain card-blog">
                    <Row>
                      <Col md="8">
                        <CardBody>
                          <CardTitle tag="h3">
                            <a href="/FAQs"  onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-info">
                            How many sessions will I need?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          The treatment length depends on your reason for seeking treatment, your effort toward therapy, and your goals.
                            Your progress will be monitored and frequently discussed during the sessions.
                          </p>
                        </CardBody>
                      </Col>
                      <Col md="4">
                        <div className="card-image">
                          <a href="/FAQs"  onClick={(e) => e.preventDefault()}>
                            
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                  </Animated>
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          <a href="/FAQs"  onClick={(e) => e.preventDefault()}>
                            
                          </a>
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          
                          <CardTitle tag="h3">
                            <a href="/FAQs"  onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-success">
                            What about confidentiality?
                            </a>
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          <br/><br/> 
                          The relationship between therapist and client is protected by law, and information cannot 
                          be disclosed without written consent. The only exceptions are if and when there is suspected 
                          child abuse/neglect or when the client threatens grave harm to self or others, in which case
                          every effort is made to ensure the safety of those affected as required by law.
                          </p>
                          
                        </CardBody>
                      </Col>
                    </Row>
                    </Card> 
                    </Animated>

                    
                  
                </Col>
              </Row>
            </Container>
          </div>
          </div> 
            </> 
        ) ; 
    }
}
export default FAQs ; 