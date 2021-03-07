import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import Headroom from "headroom.js"
import {
    Collapse,
    NavbarBrand,
    Navbar,
    Container,
    UncontrolledTooltip,
} from "reactstrap"
import DropDown from "./DropDown"
import $ from "jquery"

export default function NavBarIndex() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent")
    const [bodyClick, setBodyClick] = React.useState(false)
    const [collapseOpen, setCollapseOpen] = React.useState(false)

    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"))
        // initialise
        headroom.init()
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 499 ||
                document.body.scrollTop > 499
            ) {
                setNavbarColor("invisible")
            } else if (
                document.documentElement.scrollTop < 200 ||
                document.body.scrollTop < 200
            ) {
                setNavbarColor("navbar-transparent")
            }
        }
        window.addEventListener("scroll", updateNavbarColor)
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor)
        }
    })

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

            <Navbar
                className={classnames("fixed-top headroom", navbarColor)}
                expand="md"
                id="navbar-main"
            >
                <Container>
                    <div className="navbarColor">
                        <NavbarBrand
                            id="navbar-brand"
                            to="/"
                            tag={Link}
                            style={{ fontSize: "80%" }}
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
        </>
    )
}
