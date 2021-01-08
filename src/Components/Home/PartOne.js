/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import PartTwo from "./PartTwo"

// core components

 function PartOne() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
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
        style={{
          backgroundImage:
            "url(" + require("assets/img/brownprofile.png") + ")",}}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
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
      <PartTwo/>
    </>
  );
}

export default PartOne ; 
