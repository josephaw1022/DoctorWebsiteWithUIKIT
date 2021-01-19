import React from 'react'
import './WhyUs.css'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

  
class WhyUs extends React.Component{ 

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
                  <h2 className="title" style={{textAlign:"center", color:"#fff"}}> Why Us? f</h2>
                  <br />
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/sections/jeff-sheldon.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          <h6 className="card-category text-info">Mental</h6>
                          <CardTitle tag="h3">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Title 1 
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            blah blah blah blah 
                            
                          </p>
                          
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="8">
                        <CardBody>
                          <h6 className="card-category text-danger">
                            <i className="fa fa-free-code-camp mr-1" />
                            Spiritual
                          </h6>
                          <CardTitle tag="h3">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                             Title 2 
                            </a>
                          </CardTitle>
                          <p className="card-description">
                          blah blah 
                          blah blah 
                          blah blah 
                            
                            
                          </p>
                         
                        </CardBody>
                      </Col>
                      <Col md="4">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img"
                              src={require("assets/img/sections/rawpixel-comm.jpg")}
                            />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img"
                              src={require("assets/img/sections/jeremy-yap.jpg")}
                            />
                          </a>
                        </div>
                      </Col>
                      <Col md="8">
                        <CardBody>
                          <h6 className="card-category text-success">Physical</h6>
                          <CardTitle tag="h3">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              Title 3
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            Streaming services once again top the list of this
                            year’s Emmy nominations – another indicator of the
                            shift in how today’s consumers are watching TV. HBO,
                            which has been available.{" "}
                            
                          </p>
                          
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          </div> 
          </> 

        ) ; 
    }
}
export default WhyUs ; 