
// export default NavBarIndex;
import React , { useState , useEffect} from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// eslint-disable-next-line 
import ScrollAnimation from 'react-animate-on-scroll';
import { Progress } from "reactstrap";
import {
  // Button,
  Row,  
  Collapse,
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip, 
  Button ,
  NavItem 
} from "reactstrap";

import DropDown from "./DropDown"  




export default function NavBarIndex() {

  const target = React.createRef();

  const ReadingProgress = ({ target }) => {
    const [readingProgress, setReadingProgress] = useState(0);
    const scrollListener = () => {
      if (!target.current) {
        return;
      }
  
      const element         = target.current;
      const totalHeight     = element.clientHeight - element.offsetTop - window.innerHeight;
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (windowScrollTop === 0) {
        return setReadingProgress(0);
      }
  
      if (windowScrollTop > totalHeight) {
        return setReadingProgress(100);
      }
      
      console.log(windowScrollTop);
  
      setReadingProgress((windowScrollTop / totalHeight) * 100);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
  
    return <div className={`reading-progress-bar`} style={{width: `${readingProgress}%`}} />;
  };



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
        className={classnames("fixed-top ", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          
          <div className="navbar-translate">
            
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
            
            <img alt=" "src={require('./logo.png')} className="imagefixerupper" style={{maxWidth:"25%",height:"auto"}}/>
              
              {Title}
              
            </NavbarBrand>
  
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
            
              {Title}

            </UncontrolledTooltip>
            <button
              className="navbar-toggler "
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
                <DropDown/> 
          </Collapse>
          <NavItem>
            
          <Button
                  className="btn-round btn-magnify "
                  color="info"
                  tag = {Link}
                  to ="/"
                  
                >
                  <i className="nc-icon nc-shop " /> Home 
          </Button>
        
        </NavItem>
              
      


        </Container>
        
        
      </Navbar>
      <ReadingProgress target={target} /> 
      
      
      
    </>
  );
}


