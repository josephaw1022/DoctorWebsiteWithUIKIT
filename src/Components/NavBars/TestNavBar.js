
// export default TestNavBar;
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button, 
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem, 
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
// core components

function TestNavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("invisible");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top ", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
            <img src={require('./logo.png')} className="imagefixerupper" style={{maxWidth:"25%",height:"auto"}}/>
              A+ Counseling
            </NavbarBrand>
            
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              A+ Counseling & Consulting
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
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
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  More
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                <DropdownItem to="/" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Home
                  </DropdownItem>
                  <DropdownItem to="/About" tag={Link}>
                    <i className="nc-icon nc-alert-circle-i" />
                    About
                  </DropdownItem>
                  <DropdownItem to="/Contact" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Contact
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Client Resources
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="nc-icon nc-calendar-60" />
                    Staff 
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="nc-icon nc-laptop" />
                    Telehealth
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
             
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TestNavBar;
