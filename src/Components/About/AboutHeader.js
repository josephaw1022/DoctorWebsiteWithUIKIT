import React from "react";
import {Container,Button } from "reactstrap"
import "./AboutHeader.css"
export default function AboutHeader(props) {
    AboutHeader.displayName = AboutHeader.name; 

   
    
      
    return ( 
        <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/forest-bg.jpg") + ")",}}
        className="page-header"
        data-parallax={true}
        ref={AboutHeader}
      >
        
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>"The good life is a process..." </h1>
            <h3>- Carl Rogers</h3>
            <br />
            <Button
              href="#"
              className="btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Learn more 
            </Button>
          </div>
        </Container>

      </div>
   
    </>
    );
} 