import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import {
    Collapse,
    NavbarBrand,
    Navbar,
    Container,
    UncontrolledTooltip,
} from "reactstrap"
import DropDown from "./DropDown"
import $ from "jquery"
import ProgressBar from "react-scroll-progress-bar"
import Sticky from "react-stickynode"
import Headroom from "react-headroom"
export default function NavBarIndex() {
    const [navbarColor, setNavbarColor] = React.useState("transparent")
    const [bodyClick, setBodyClick] = React.useState(false)
    const [collapseOpen, setCollapseOpen] = React.useState(false)

    const Title = "A+ Counselling & Consulting, LLC"

    return (
        <>
            {bodyClick ? (
                <div
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open")
                        setBodyClick(true)
                        setCollapseOpen(true)
                    }}
                />
            ) : null}

            <Sticky>
                <ProgressBar bgcolor="#51bcda" />
            </Sticky>
            <Headroom style={{ zIndex: "8000", backgroundColor: "#333" }}>
                <Navbar
                    className={classnames("", navbarColor)}
                    expand="md"
                    id="navbar-main"
                    style={{ backgroundColor: navbarColor }}
                >
                    <Container>
                        <div className="navbarColor">
                            <NavbarBrand
                                id="navbar-brand"
                                to="/"
                                tag={Link}
                                style={{ fontSize: "80%", color: "#51bcda" }}
                            >
                                <img
                                    alt=" "
                                    src={require("./logo.png")}
                                    className="imagefixerupper"
                                />

                                {Title}
                            </NavbarBrand>

                            <UncontrolledTooltip
                                placement="bottom"
                                target="navbar-brand"
                                style={{ color: "#51bcda" }}
                            >
                                {Title}
                            </UncontrolledTooltip>
                            <button
                                className="navbar-toggler"
                                id="navigation"
                                type="button"
                                style={{ backgroundColor: "transparent" }}
                                onClick={() => {
                                    document.documentElement.classList.toggle(
                                        "nav-open"
                                    )
                                    setBodyClick(true)
                                    setCollapseOpen(true)
                                }}
                            >
                                {$(window).width() < 400 ? null : (
                                    <>
                                        {" "}
                                        <span className="navbar-toggler-bar bar1 bg-info" />{" "}
                                        <span className="navbar-toggler-bar bar2 bg-info" />{" "}
                                        <span className="navbar-toggler-bar bar3 bg-info" />{" "}
                                    </>
                                )}
                            </button>
                        </div>

                        <Collapse
                            navbar
                            isOpen={collapseOpen}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <DropDown />
                        </Collapse>
                    </Container>
                </Navbar>
            </Headroom>
        </>
    )
}
