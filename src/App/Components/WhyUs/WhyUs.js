import React from "react";
import "./WhyUs.css";
import { Card, CardBody, Container, Row, Col } from "reactstrap";

class WhyUs extends React.Component {
    render() {
        window.scrollTo(0, 0);

        return (
            <>
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
                                        }}
                                    >
                                        {" "}
                                        Why Us?{" "}
                                    </h2>
                                    <br />
                                    <Card className="card-plain card-blog">
                                        <Row>
                                            <Col md="4">
                                                <div className="card-image">
                                                    <img
                                                        alt="..."
                                                        className="img"
                                                        src={require("assets/img/FreeOnes/Photos8.png")}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="8">
                                                <CardBody>
                                                    <p
                                                        className="card-description"
                                                        style={{
                                                            color: "#fff",
                                                            fontWeight:
                                                                "bolder",
                                                        }}
                                                    >
                                                        Hello, and thanks for
                                                        visiting A+ Counseling
                                                        and Consulting, LLCs
                                                        website. My name is
                                                        Aldric Browne, and
                                                        below, I will provide
                                                        some insights about
                                                        myself to help you
                                                        decide if this practice
                                                        is the best fit to
                                                        assist you on this
                                                        journey. I was born and
                                                        raised in Georgetown,
                                                        South Carolina. I am
                                                        excited about starting a
                                                        counseling service that
                                                        integrates the values
                                                        gained from my
                                                        upbringing with the rich
                                                        South Carolina
                                                        traditions ingrained
                                                        within my soul. I am a
                                                        professionally Licensed
                                                        Professional Counselor
                                                        and Nationally Certified
                                                        Counselor who is
                                                        passionate about helping
                                                        others while using
                                                        Trauma-Focused Cognitive
                                                        Behavioral Therapy.
                                                    </p>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card className="card-plain card-blog">
                                        <Row>
                                            <Col md="8">
                                                <CardBody>
                                                    <p
                                                        className="card-description"
                                                        style={{
                                                            color: "#fff",
                                                            fontWeight:
                                                                "bolder",
                                                        }}
                                                    >
                                                        I earned my Bachelor of
                                                        Psychology degree at the
                                                        University of South
                                                        Carolina Upstate and a
                                                        master's degree in
                                                        Mental Health Counseling
                                                        at Capella University. I
                                                        have over 15 years of
                                                        experience working in
                                                        the human services
                                                        field, with experience
                                                        within a local public
                                                        school system, county
                                                        alcohol and drug
                                                        programs, community
                                                        mental health services,
                                                        and working in the
                                                        private counseling
                                                        setting. The knowledge
                                                        gained from each of
                                                        these experiences has
                                                        been vital to my growth
                                                        and development as a
                                                        clinician. I will be
                                                        incorporating my skills,
                                                        professional practices,
                                                        knowledge, and
                                                        understandings into A+
                                                        Counseling and
                                                        Consulting.
                                                    </p>
                                                </CardBody>
                                            </Col>
                                            <Col md="4">
                                                <div className="card-image">
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="img"
                                                            src={require("assets/img/FreeOnes/Photos12.png")}
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
                                                    <a
                                                        href="#pablo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="img"
                                                            src={require("assets/img/FreeOnes/Photos11.png")}
                                                        />
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col md="8">
                                                <CardBody>
                                                    <p
                                                        className="card-description"
                                                        style={{
                                                            color: "#fff",
                                                            fontWeight:
                                                                "bolder",
                                                        }}
                                                    >
                                                        I have intensive
                                                        experience in individual
                                                        counseling, working with
                                                        various patients
                                                        experiencing depression,
                                                        anxiety, trauma, grief
                                                        and loss,
                                                        self-esteem/self-worth
                                                        issues, life
                                                        transitions, mood
                                                        disorders, stressors
                                                        related to minority
                                                        populations/marginalized
                                                        groups, LGBTQIA, and
                                                        sexual identity/gender
                                                        identity concerns. I
                                                        adhere to all ethical
                                                        codes and guidelines
                                                        defined by the American
                                                        Counseling Association
                                                        (ACA) and the National
                                                        Board of Certified
                                                        Counselors (NBCC). I
                                                        pride myself on building
                                                        a strong rapport with my
                                                        clients and tailoring
                                                        the treatment plan to
                                                        meet your unique and
                                                        specific needs. By
                                                        getting to know you, we
                                                        can determine which type
                                                        of counseling will be
                                                        most beneficial to you
                                                        help you accomplish your
                                                        goals. If you are
                                                        interested in beginning
                                                        the therapeutic process,
                                                        please reach me by phone
                                                        at 843 949-9644 or by
                                                        email at
                                                        aplus21@gmail.com.
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
        );
    }
}
export default WhyUs;
