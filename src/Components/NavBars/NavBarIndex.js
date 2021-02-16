
// export default NavBarIndex;
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// eslint-disable-next-line 
// import ScrollAnimation from 'react-animate-on-scroll';
// import { Progress } from "reactstrap";
import {
  // Button,
  // Row,  
  Collapse,
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip, 
  // Button ,
  // NavItem 
} from "reactstrap";

import DropDown from "./DropDown"  

import $ from 'jquery'



export default function NavBarIndex() {

  // const target = React.createRef();

  


  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);


  React.useEffect(
    () => {
      let headroom = new Headroom(document.getElementById("navbar-main"));
      // initialise
      headroom.init();
      const updateNavbarColor = () => {

          if ( document.documentElement.scrollTop > 499 || document.body.scrollTop > 499) {
            setNavbarColor("invisible");
          } 
          else if ( document.documentElement.scrollTop < 500 || document.body.scrollTop < 500) {
            setNavbarColor("navbar-transparent");
          }

        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      }
  );

  const Title = "A+ Counselling & Consulting, LLC"
  
  function sizing(){ 
    if ( $(window).width() < 400) { 
      return "block"
    }
    return " "
  }

  return (
    <>
      {bodyClick ? (
        <div
          
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null} 


      <Navbar
        className={classnames("fixed-top headroom", navbarColor)}
        expand="lg"
        id="navbar-main"
        style={{}}
      >
        <Container>
          
          <div className="navbar-translate">
            
            <NavbarBrand id="navbar-brand" to="/" tag={Link} style={{fontSize:"80%"}}>
            
            <img alt=" " src={require('./logo.png')} className="imagefixerupper" style={{maxWidth:"100%",height:"auto",display:sizing()}}/>
              
              {Title}
              
            </NavbarBrand>
  
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
            
              {Title}

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

              <span className="navbar-toggler-bar bar1 bg-info" />
              <span className="navbar-toggler-bar bar2 bg-info" />
              <span className="navbar-toggler-bar bar3 bg-info" />
            </button>
          </div>
          
          
          
          <Collapse navbar isOpen={collapseOpen}>
                <DropDown/> 
          </Collapse>
        
              
        </Container>
        
        
      </Navbar>
      
      
      
      
    </>
  );
}


