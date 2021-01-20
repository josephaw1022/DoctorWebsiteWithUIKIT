import React  from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import "./Future.css"

class Future extends React.Component { 

    render(){
        window.scrollTo(0, 0);

        return(
            <>
            <div className="section" style={{backgroundColor:"#333"}}/> 
            <div className="section section-grey" style={{backgroundColor:"#333"}}> 
            <div className="blog-3" id="Exercise">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <h2 className="title" style={{textAlign:"center", color:"#fff"}}> What To Expect</h2>
                  <br />
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                          <Row></Row>
                        <Row> 
                        <div className="card-image">
                          <img
                            alt="..."
                            className="img togglershow"
                            src={require("assets/img/FreeOnes/Photos20.png")}
                            
                          />
                        </div>
                        </Row> 
                        <Row></Row>
                        
                      </Col>
                      <Col md="8">
                          <Row></Row>
                          <Row style={{marginLeft:"10px"}}>
                        <CardBody>
                          <h6 className="card-category text-info">Mental Health Month (October) </h6>
                          <CardTitle tag="h3">
                            
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          Mental Health Month raises awareness of trauma and its impact on the physical, emotional, and mental well-being of children, families, and communities. Mental Health Month was established in 1949 to increase awareness of the importance of mental health and wellness in Americans' lives and celebrate recovery from mental illness. Mental health is essential for a person's overall health. Prevention works, treatment is effective, and people can recover from mental disorders and live full and productive lives.

                            
                          </p>
                          
                        </CardBody>
                        </Row>
                        <Row></Row>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="card-plain card-blog padheight" >
                    <Row>
                      <Col md="8">
                        <CardBody>
                          <h6 className="card-category text-success">
                            
                            Walk-Therapy
                          </h6>
                          <CardTitle tag="h3">
                          </CardTitle>
                          <p className="card-description" style={{color:"#fff"}}>
                          Walk therapy will allow patients to practice mindfulness skills to increase their ability to cope with life events. Increasing mindfulness can make it easier for clients to relax, process thoughts, release physical tension, practice breath control, and receive mind-body insight while processing and analyzing life's experiences.
                        As the name describes, clients talk with me while walking outdoors rather than sitting or lying down in the therapy office. The initial assessment will occur online, by phone, or in the office. As we walk at a slow pace side by side, we'll discuss current events related to your therapy goal. The benefits of walk therapy are teaching patients to utilize their five senses to improve their mental well-being. This form of treatment is not for everyone, so consider your personality when determining whether this therapy style will meet your needs.
                        <br/> <br/> Cognitive behavior therapy training for athletes coming in 2022!
                            
                            
                          </p>
                         
                        </CardBody>
                      </Col>
                      <Col md="4" className="ml-auto mr-auto">
                        <Row></Row>
                        <Row md="4">
                            <div className="card-image" >
                          
                            <img
                              alt="..."
                              className="img togglershow opfd"
                              src={require("assets/img/FreeOnes/Photos19.png")}
                              style={{top:"50%"}}
                              
                             
                              
                              
                            />
                            </div> 
                        </Row> 
                        <Row></Row>
                        
    
                      </Col>
                    </Row>
                  </Card>
                 
                </Col>
              </Row>
            </Container>
          </div>
          </div> 
          </> 
        );

    }

}
export default Future ;