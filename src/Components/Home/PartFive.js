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
  
export default function PartFive(){ 
    const [activePill, setActivePill] = React.useState("1");
    const [pillActive, setPillActive] = React.useState("personal");

    return ( 
        <>
        <div className="pricing-5 section-gray" >
        <Container style={{marginTop:"90px",marginBottom:"90px"}}>
          <Row>
            <Col md="4">
              <h2 className="title">Choose a plan for your next project</h2>
              <div className="choose-plan">
                <Nav className="nav-pills-danger" pills role="tablist">
                  <NavItem>
                    <NavLink
                      className={pillActive === "personal" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setPillActive("personal");
                      }}
                    >
                      Personal
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pillActive === "commercial" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setPillActive("commercial");
                      }}
                    >
                      Commercial
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <br />
              <p className="description text-gray">
                You have Free Unlimited Updates and Premium Support on each
                package. You also have 20 days to request a refund if you're
                not happy with your purchase.
              </p>
            </Col>
            <Col className="ml-auto" md="7">
              <TabContent className="text-center" activeTab={pillActive}>
                <TabPane tabId="personal">
                  <div className="space-top" />
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing">
                        <CardBody>
                          <h6 className="card-category text-primary">
                            HTML Package
                          </h6>
                          <CardTitle tag="h1">$0</CardTitle>
                          <ul>
                            <li>
                              <b>1</b> Developer
                            </li>
                            <li>
                              <b>99+</b> Components
                            </li>
                            <li>
                              <b>HTML</b> Elements
                            </li>
                            <li>
                              <b>14</b> Page Examples
                            </li>
                          </ul>
                          <Button
                            className="btn-round"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Free download
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing" data-color="orange">
                        <CardBody>
                          <h6 className="card-category text-success">
                            HTML Package
                          </h6>
                          <CardTitle tag="h1">$59</CardTitle>
                          <ul>
                            <li>
                              <b>5</b> Developer
                            </li>
                            <li>
                              <b>129+</b> Components
                            </li>
                            <li>
                              <b>HTML</b> Elements
                            </li>
                            <li>
                              <b>24</b> Page Examples
                            </li>
                          </ul>
                          <Button
                            className="btn-neutral btn-round"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Free download
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="commercial">
                  <div className="space-top" />
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing">
                        <CardBody>
                          <h6 className="card-category text-warning">
                            HTML Package
                          </h6>
                          <CardTitle tag="h1">$159</CardTitle>
                          <ul>
                            <li>
                              <b>5+</b> Developers
                            </li>
                            <li>
                              <b>199+</b> Components
                            </li>
                            <li>
                              <b>HTML</b> Elements
                            </li>
                            <li>
                              <b>34</b> Page Examples
                            </li>
                          </ul>
                          <Button
                            className="btn-round"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Buy Now !
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing" data-color="orange">
                        <CardBody>
                          <h6 className="card-category text-success">
                            HTML Package
                          </h6>
                          <CardTitle tag="h1">$359</CardTitle>
                          <ul>
                            <li>
                              <b>15</b> Developer
                            </li>
                            <li>
                              <b>229+</b> Components
                            </li>
                            <li>
                              <b>HTML</b> Elements
                            </li>
                            <li>
                              <b>44</b> Page Examples
                            </li>
                          </ul>
                          <Button
                            className="btn-neutral btn-round"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Free download
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>

      </div>
      </>
    ); 
    } 

