import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import $ from "jquery"

import { Link } from "react-router-dom"

// core component

class Menu extends React.Component {


  constructor(props){ 
    super(props); 
    this.state={
      Menu:{}
    }; 
    
  }

  componentWillMount(){ 
    this.setState({Menu:this.props.data})
  }

  render(){ 
    
    let menuOptions = this.state.Menu.Options.map(
      
      (value) => { 


        let templink = null; 
        
        if (!value.Dont){ 
          templink = value.Link
        }
        let  speed = 1 ; 
        if(value.Spot==="In"){ 
           speed = .6
        }
        else{ 
           speed = .9
        }
        
          return( 
              <Col md="3">
                <ScrollAnimation animateIn={$(window).width()>400? "slideIn"+value.Direction : "slideInLeft"} animationOut="zoomOut"  animateOnce={true} duration={speed}>
                  <Button style={{backgroundColor:"transparent", borderColor:"transparent"}} tag={Link} to={templink}>
                <div className="info btn-magnify" >
                  <div className="icon icon-info " >
                  
                    <i className={"nc-icon "+value.Icon}/>
                
                  </div>
                  <div className="description">
                    <h3 className="info-title" style={{color:"#fff"}}>{value.Name}</h3>
                    <br/> 
                    <p style={{color:"#fff", textTransform:"initial"}}>
                      {value.Description}
                    </p>
                    <Button className="btn-link eights" color="info" tag={Link} to={templink}>
                      See more
                    </Button>
                  </div>
                </div>
                </Button> 
              </ScrollAnimation>
              </Col> 

          ); 
      }
    )

    

    return (
      
      <>
    
      <div className="wrapper">

        <div className="main" data-parallex="true">
          <div className="section text-center menubg" style={{backgroundcolor:"#333"}}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} animationOut="zoomOut"  duration={.6}>
                  <h2 className="title add-animation" style={{color:"#fff"}}>{this.state.Menu.Title} </h2>
                  <h5 className="description" id="Menu" style={{color:"#fff"}}>
                  {this.state.Menu.Description}
                  </h5>
                  </ScrollAnimation>
                  <br />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                {menuOptions}
              </Row>
            </Container>
        </div> 
      </div>
      </div>
 
      </>
      );
  }
}
export default Menu 