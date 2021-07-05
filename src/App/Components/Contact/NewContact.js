import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
    const [state, setState] = useState(require("./Contact.json"));
    let history = useHistory();

    useEffect(() => {
        setState(state.Contact);
    }, []);

    const submitDATA = async (data) => {
        axios.post("https://all-sites-api-22.herokuapp.com/api/message/", {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            subject: data.subject,
            message: data.message,
        });
    };

    const formData = useFormik({
        initialValues: {
            first_name: " ",
            last_name: " ",
            email: " ",
            message: " ",
            subject: " ",
        },
        onSubmit: (values) => {
            console.log("values = ", values);

            submitDATA(values);
            history.push("/");
            // axios.post("https://all-sites-api-22.herokuapp.com/api/message/", );
        },
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
                                        {state.Header}
                                    </h2>
                                    <p
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        {state.SubHeader}
                                        <br />
                                        <br />
                                        {state.Content1}
                                        <br />
                                        <br />
                                        {state.Content2}
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    className="ml-auto mr-auto text-center"
                                    md="6"
                                >
                                    <h3 className="title">
                                        <small>{state.Social}</small>
                                    </h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    className="ml-auto mr-auto text-center"
                                    md="6"
                                >
                                    <h3 className="title">
                                        <small>{state.Note}</small>
                                    </h3>
                                    <Form
                                        className="contact"
                                        onSubmit={formData.handleSubmit}
                                    >
                                        {/* Form Inputs  */}
                                        <Row>
                                            <Col md={6}>
                                                <label
                                                    style={{ color: "#fff" }}
                                                    htmlFor="first_name"
                                                >
                                                    First Name
                                                </label>
                                                <Input
                                                    onChange={
                                                        formData.handleChange
                                                    }
                                                    placeholder={"first name"}
                                                    type={"text"}
                                                    rows={1}
                                                    id="first_name"
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <label
                                                    style={{ color: "#fff" }}
                                                    htmlFor="last_name"
                                                >
                                                    Last Name
                                                </label>
                                                <Input
                                                    onChange={
                                                        formData.handleChange
                                                    }
                                                    placeholder={"last name"}
                                                    type={"text"}
                                                    rows={1}
                                                    id="last_name"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <label
                                                    style={{ color: "#fff" }}
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <Input
                                                    onChange={
                                                        formData.handleChange
                                                    }
                                                    placeholder={"email"}
                                                    type={"email"}
                                                    rows={1}
                                                    id="email"
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <label
                                                    style={{ color: "#fff" }}
                                                    htmlFor="subject"
                                                >
                                                    Subject
                                                </label>
                                                <Input
                                                    onChange={
                                                        formData.handleChange
                                                    }
                                                    placeholder={"subject"}
                                                    type={"text"}
                                                    rows={1}
                                                    id="subject"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Input
                                                onChange={formData.handleChange}
                                                placeholder={"message"}
                                                type={"textarea"}
                                                id="message"
                                                rows={6}
                                            />
                                        </Row>

                                        <Row>
                                            <Col
                                                className="ml-auto mr-auto"
                                                md="6"
                                            >
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <h3 className="visit">
                                        <small>{state.Visit}</small>
                                    </h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
