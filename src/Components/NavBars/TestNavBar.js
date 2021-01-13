
// export default TestNavBar;
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {

  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,

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
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
            <img src={require('./logo.png')}  width="200" height="100" />
              A+ Counseling & Consulting 
            </NavbarBrand>
            {/* <UncontrolledTooltip placement="bottom" target="navbar-brand">
            <img src={require('./logo.png')} style={{backgroundColor:"transparent"}}/>
              A+ Counseling & Consulting
            </UncontrolledTooltip> */}
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
                  Components
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/" tag={Link}>
                    All Components
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    Presentation
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/paper-kit-pro-react/#/documentation/introduction?ref=pkpr-color-navbar"
                    target="_blank"
                  >
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Pages
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Home
                  </DropdownItem>
                  <DropdownItem to="/About" tag={Link}>
                    <i className="nc-icon nc-settings" />
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
                    <i className="nc-icon nc-money-coins" />
                    
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
