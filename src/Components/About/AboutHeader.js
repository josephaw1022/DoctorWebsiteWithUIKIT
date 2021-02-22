import React from "react";
import "./AboutHeader.css";
// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader() {
  return (
    <>
      <div className="page-header page-header-small hjsd8a">
        <div className="filter danger" />
        <div className="content-center">
          <Container>
            <h1>Welcome to Lowcountry Couneseling and & Consulting, LLC</h1>
            <h3>Let us tell you more about what we do.</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
