import React from 'react'
// import './TeleHealth.css'
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";
import TeleHealth from "./ParallaxSections/TeleHealth" 
import { Parallax } from 'react-parallax';
 

export default function TeleHealth2() {
    let TelehealthSection = React.createRef();
  
    React.useEffect(() => {
      if (window.innerWidth < 991) {
        const updateScroll = () => {
          let windowScrollTop = window.pageYOffset / 3;
          TelehealthSection.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
          window.removeEventListener("scroll", updateScroll);
        };
      }
    });
  
    return (
      <>
        <div
          
          data-parallax={true}
          style={{
            backgroundImage: "url(" + require("assets/img/FreeOnes/Photos22.png") + ")"
          }}
          ref={TelehealthSection}
          className="parallax"
        >

         
        </div>
      </>
    );
  }
  