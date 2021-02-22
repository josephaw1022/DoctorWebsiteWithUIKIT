import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  //  CardImg
} from "reactstrap";
import { Animated } from "react-animated-css";
import "./Future.css";

class Future extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title1: "",
      Title2: "",
      Content1: "",
      Content2: "",
      Header: "",
    };
  }

  componentWillMount() {
    const file = require("./Future.json");
    this.setState({
      Title1: file.Future.Articles.Title,
      Title2: file.Future.Articles.Title2,
      Content1: file.Future.Articles.Content,
      Content2: file.Future.Articles.Content2,
      Header: file.Future.Articles.Header,
    });
  }

  render() {
    window.scrollTo(0, 0);

    return (
      <>
        <div id="fadeInAnim">
          <div className="section" style={{ backgroundColor: "#333" }} />
          <div
            className="section section-grey"
            style={{ backgroundColor: "#333" }}
          >
            <div className="blog-3" id="Exercise">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="10">
                    <h2
                      className="title"
                      style={{
                        textAlign: "center",
                        color: "#fff",
                        fontWeight: "bolder",
                      }}
                    >
                      {this.state.Header}{" "}
                    </h2>
                    <br />
                    <Card className="card-plain card-blog">
                      <Row>
                        <Col md="4">
                          <Row></Row>
                          <Row>
                            <Animated
                              animationIn="bounceInLeft"
                              animationOut="fadeOut"
                              isVisible={true}
                            >
                              <div
                                className="card-image"
                                style={{ top: "50%" }}
                              >
                                <img
                                  alt="..."
                                  className="img togglershow opfd"
                                  src={require("assets/img/FreeOnes/Photos20.png")}
                                  style={{ top: "50%" }}
                                />
                              </div>
                            </Animated>
                          </Row>
                          <Row></Row>
                        </Col>
                        <Col md="8">
                          <Row></Row>
                          <Row style={{ marginLeft: "10px" }}>
                            <Animated
                              animationIn="bounceInRight"
                              animationOut="fadeOut"
                              isVisible={true}
                            >
                              <CardBody>
                                <h6 className="card-category text-info">
                                  {this.state.Title1}
                                </h6>
                                <CardTitle tag="h3"></CardTitle>
                                <p
                                  className="card-description"
                                  style={{ color: "#fff" }}
                                >
                                  {this.state.Content1}
                                </p>
                              </CardBody>
                            </Animated>
                          </Row>
                          <Row></Row>
                        </Col>
                      </Row>
                    </Card>
                    <Card className="card-plain card-blog padheight">
                      <Row>
                        <Col md="8">
                          <Animated
                            animationIn="bounceInLeft"
                            animationOut="fadeOut"
                            isVisible={true}
                          >
                            <CardBody>
                              <h6 className="card-category text-success">
                                {this.state.Title2}
                              </h6>
                              <CardTitle tag="h3"></CardTitle>
                              <p
                                className="card-description"
                                style={{ color: "#fff" }}
                              >
                                {this.state.Content2}
                              </p>
                            </CardBody>
                          </Animated>
                        </Col>

                        <Col md="4" className="ml-auto mr-auto">
                          <Row></Row>
                          <Animated
                            animationIn="bounceInRight"
                            animationOut="fadeOut"
                            isVisible={true}
                          >
                            <Row md="4">
                              <div
                                className="card-image"
                                style={{ top: "50%" }}
                              >
                                <img
                                  alt="..."
                                  className="img togglershow opfd"
                                  src={require("assets/img/FreeOnes/Photos19.png")}
                                />
                              </div>
                            </Row>
                          </Animated>
                          <Row></Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="section" style={{ backgroundColor: "#333" }} />
        </div>
      </>
    );
  }
}
export default Future;
