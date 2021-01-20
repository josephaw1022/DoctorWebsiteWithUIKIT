
import React from "react";
import { Container, Row, Col} from "reactstrap";
import {Animated} from "react-animated-css";
// import Headroom from "headroom.js";

 class PartOne extends React.Component {
  constructor(props){ 
    super(props); 
    this.state={ 
      Quote:'',
      QuoteBy:'',
      Change:false
    }
  }
  
  componentWillMount(){ 
    this.setState({Quote: this.props.data.Quote, QuoteBy: this.props.data.QuoteBy, Change: true}) 
  }


  render(){
    if(this.state.Change){ 
      var Quote = this.state.Quote ; 
      var QuoteBy = this.state.QuoteBy ; 
    }


  return (
  
    <>
    <div className="" id="Home" data-parallax="true">
    <div className="page-header" data-parallax="true" style={{ backgroundImage: "url(" + require("assets/img/FreeOnes/Photos8.png") + ")", }}  >
      <div className="filter" />
      <div className="content-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
              <h1 className="title" id="navbarstuff">
                "{Quote}"
              </h1>
              </Animated>
              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
              <h5 className="description">
              - {QuoteBy}
              </h5>
              </Animated>
              <br />
            </Col>
            <Col className="ml-auto mr-auto" md="10">
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>
  </>
  );
  } 
}

export default PartOne ; 
