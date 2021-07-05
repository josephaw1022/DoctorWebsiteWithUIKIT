import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components

import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

const NavBar3 = () => {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    });
    return (
        <>
            <Navbar
                className="fixed-top"
                expand="lg"
                id="navbar-main"
                color="info"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            id="navbar-brand"
                            to="/"
                            tag={Link}
                            onClick={() => {
                                document.documentElement.classList.toggle(
                                    "nav-close"
                                );
                                setCollapseOpen(false);
                            }}
                        >
                            A+ Counselling
                            <br />& Consulting, LLC
                        </NavbarBrand>
                        <UncontrolledTooltip
                            placement="bottom"
                            target="navbar-brand"
                            style={{ fontSize: "2" }}
                        >
                            A+ Counselling & Consulting, LLC
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler"
                            id="navigation"
                            type="button"
                            onClick={() => {
                                document.documentElement.classList.toggle(
                                    "nav-open"
                                );
                                setCollapseOpen(true);
                            }}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse navbar isOpen={collapseOpen}>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button
                                    className="btn-round"
                                    color="info"
                                    tag={Link}
                                    to="/Contact"
                                    onClick={() => {
                                        setCollapseOpen(true);
                                    }}
                                >
                                    <i className="nc-icon nc-chat-33" /> Contact
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    className="btn-round"
                                    color="info"
                                    tag={Link}
                                    to="/#"
                                >
                                    <i className="nc-icon nc-box" /> Resources
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    className="btn-round"
                                    color="info"
                                    tag={Link}
                                    to="/Rates"
                                >
                                    <i className="nc-icon nc-paper" /> Insurance
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    className="btn-round"
                                    color="info"
                                    tag={Link}
                                    to="/FAQs"
                                >
                                    <i className="nc-icon nc-alert-circle-i" />{" "}
                                    FAQS
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    className="btn-round"
                                    color="info"
                                    tag={Link}
                                    to="/WhyUs"
                                >
                                    <i className="nc-icon nc-favourite-28" />{" "}
                                    Why Us
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar3;
