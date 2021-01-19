import React from 'react'
// import './TeleHealth.css'
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";

class TeleHealth2 extends React.Component { 


    render(){
        window.scrollTo(0, 0); 
        return(
            <>
            
            <div className="section section-grey fill" style={{backgroundColor:"#333333"}}> 
            <div className="" id="TeleHealth">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                  <h2 className="title" style={{textAlign:"center", color:"#fff", fontWeight:"bolder"}} >Telehealth</h2>
                    </Animated> 
                  <br />
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          
                        </div>
                      </Col>
                      <Col md="12">
                          <div className="text-center">
                        <CardBody>
                          
                          <CardTitle tag="h3">
                            <h3 onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className="text-info fixh3">
                            Why do people consider using therapy?
                            </h3>
                          </CardTitle>
                          <p className="card-description fixp" style={{color:"#fff", fontSize:"20px"}}>
                          Telehealth therapy is counseling and psychological services using live video interaction. 
                          It allows the therapist to continue to provide counseling in the event of illness or when in-office 
                          visits are not available. A+ Counseling and Consulting, LLC offers Telehealth on our HIPPA secured 
                          platform where clinicians deliver professional counseling on the forum. Patients can access the 
                          platform on most devices, including smartphones, tablets, and laptops. If you are interested in 
                          making an appointment for telehealth sessions, please contact us. Note that we are licensed to see 
                          clients who live in the state of South Carolina.
                            
                          </p>
                          
                        </CardBody>
                        </div> 
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


        ); 
    }

}
export default TeleHealth2; 