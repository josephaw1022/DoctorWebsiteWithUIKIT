import React from "react"

import { Link } from "react-router-dom"
// nodejs library that concatenates strings
import classnames from "classnames"
import "./NavBar.css"

// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownItem,
} from "reactstrap"

export default function ExamplesNavbar() {
    ExamplesNavbar.displayName = ExamplesNavbar.name
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent")
    const [navbarCollapse, setNavbarCollapse] = React.useState(true)

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse)
        document.documentElement.classList.toggle("nav-open")
    }

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("transparent")
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("transparent")
            }
        }

        window.addEventListener("scroll", updateNavbarColor)

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor)
        }
    })
    return (
        <Navbar
            className={classnames("fixed-top" + "transparent") + " fsd8a9a"}
            color-on-scroll="300"
            expand="lg"
        >
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        to="/"
                        title="A+ Counseling & Consulting, LLC"
                        tag={Link}
                        className="items"
                    >
                        A+ Counseling & Consulting, LLC
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                                className="mr-2"
                                color="default"
                                caret
                                nav
                            >
                                More
                            </DropdownToggle>

                            <DropdownItem to="/sections#headers" tag={Link}>
                                <i className="nc-icon " />
                                Client Resources
                            </DropdownItem>
                            <DropdownMenu className="dropdown-danger" right>
                                <DropdownItem to="/sections#headers" tag={Link}>
                                    <i className="nc-icon nc-tile-56" />
                                    Client Resources
                                </DropdownItem>
                                <DropdownItem
                                    to="/sections#features"
                                    tag={Link}
                                >
                                    <i className="nc-icon nc-settings" />
                                    Services
                                </DropdownItem>
                                <DropdownItem to="/sections#blogs" tag={Link}>
                                    <i className="nc-icon nc-bullet-list-67" />
                                    Our Counselors
                                </DropdownItem>

                                <DropdownItem to="/sections#pricing" tag={Link}>
                                    <i className="nc-icon nc-money-coins" />
                                    Rates & Insurance
                                </DropdownItem>
                                <DropdownItem
                                    to="/sections#testimonials"
                                    tag={Link}
                                >
                                    <i className="nc-icon nc-badge" />
                                    Testimonials
                                </DropdownItem>
                                <DropdownItem
                                    to="/sections#contact-us"
                                    tag={Link}
                                >
                                    <i className="nc-icon nc-mobile" />
                                    Contact Us
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                title="Follow us on Twitter"
                            >
                                <i className="fa fa-twitter" />
                                <p className="d-lg-none">Twitter</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                title="Like us on Facebook"
                            >
                                <i className="fa fa-facebook-square" />
                                <p className="d-lg-none">Facebook</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                title="Follow us on Instagram"
                            >
                                <i className="fa fa-instagram" />
                                <p className="d-lg-none">Instagram</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}
