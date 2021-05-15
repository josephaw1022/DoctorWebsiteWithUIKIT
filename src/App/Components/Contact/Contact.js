import React from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Header: "",
            SubHeader: "",
            Content1: "",
            Content2: "",
            Social: "",
            Note: "",
            Send: "",
            Visit: "",
            Form: [],
            SocialNetworks: [],
        };
    }

    componentDidMount() {
        const file = require("./Contact.json");
        this.setState({
            Header: file.Contact.Header,
            SubHeader: file.Contact.SubHeader,
            Content1: file.Contact.Content1,
            Content2: file.Contact.Content2,
            Social: file.Contact.Social,
            Note: file.Contact.Note,
            Send: file.Contact.Send,
            Visit: file.Contact.Visit,
            Form: file.Contact.Form,
            SocialNetworks: file.Contact.SocialNetworks,
        });
    }

    render() {
        window.scrollTo(0, 0);

        const SocialNetworks = this.state.SocialNetworks.map((index) => {
            return (
                <Button className="btn-just-icon mr-1" color={index.Name}>
                    <i className={"fa fa-" + index.Name} />
                </Button>
            );
        });

        const Forms = this.state.Form.map((index) => {
            let md = "6";
            if (String(index.Type) === "textarea") {
                md = "12";
            }
            return (
                <Col md={md}>
                    <label style={{ color: "#fff" }} htmlFor={index.Name}>
                        {" "}
                        {index.Name}
                    </label>
                    <Input
                        placeholder={index.Name}
                        type={index.Type}
                        rows={index.Rows}
                    />
                </Col>
            );
        });

        return (
            <>
                <div className="section" style={{ backgroundColor: "#333" }} />
                <div className="main contact-page" id="ContactUs">
                    <div className="bg-success">
                        <div
                            className="section reddy"
                            style={{
                                backgroundColor: "#333",
                            }}
                        >
                            <Container>
                                <Row>
                                    <Col
                                        className="ml-auto mr-auto text-center"
                                        md="8"
                                    >
                                        <h2
                                            className="title"
                                            style={{
                                                color: "#fff",
                                            }}
                                        >
                                            {this.state.Header}
                                        </h2>
                                        <p
                                            style={{
                                                color: "#fff",
                                            }}
                                        >
                                            {this.state.SubHeader}
                                            <br />
                                            <br />
                                            {this.state.Content1}
                                            <br />
                                            <br />
                                            {this.state.Content2}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col
                                        className="ml-auto mr-auto text-center"
                                        md="6"
                                    >
                                        <h3 className="title">
                                            <small>{this.state.Social}</small>
                                        </h3>
                                        {SocialNetworks}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col
                                        className="ml-auto mr-auto text-center"
                                        md="6"
                                    >
                                        <h3 className="title">
                                            <small>{this.state.Note}</small>
                                        </h3>
                                        <Form className="contact">
                                            <Row>{Forms}</Row>

                                            <Row>
                                                <Col
                                                    className="ml-auto mr-auto"
                                                    md="6"
                                                >
                                                    <Button
                                                        block
                                                        className="btn-round"
                                                        color="primary"
                                                    >
                                                        {this.state.Send}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <h3 className="visit">
                                            <small>{this.state.Visit}</small>
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
}

export default ContactUs;
