import React from 'react'
// import './TeleHealth.css'
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
// import {Animated} from "react-animated-css";
import "./Home.css"
class TeleHealth extends React.Component { 

    constructor(props){ 
      super(props); 

      this.state={
        TeleHealth:{
          Title:"",
          Description:"" , 
          Color:""
      }}

      this.myRef = React.createRef();
    }

    componentWillMount(){ 
      this.setState(
        {
          Title:this.props.data.Title,
          Description:this.props.data.Description, 
          Color: this.props.data.Color 
        }
      )
    }
    

    render(){

      
      

    

        return(
            <>
          
          
            <div className="section parallax" 
            style={{
              backgroundImage: "url(" + require("assets/img/FreeOnes/Photos3.png") + ")",
              height:"110%"
                }}
              data-parallax="true"
              ref={this.myRef}
              > 

            <div className="" id="TeleHealth">
            <div className="section" style={{backgroundColor:"transparent"}} /> 
            <Container style={{top:"50%"}}>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    

                    

                
                <Card className="card-contact">
                  <CardTitle className="text-center" tag="h3" style={{color:"#f5593d"}}>
                  {this.state.Title} <hr/> 
                  </CardTitle>
                    <Row>
                      <Col md="4">
                        
                      </Col>
                      <Col md="12">
                          <div className="text-center">
                        <CardBody>
                          
                          <h5 className="fixp" style={{color:"#333"}} >
                          {this.state.Description}
                          </h5>
                        </CardBody>
                        </div> 
                      </Col>
                    </Row>
                  </Card>
              
                </Col>
              </Row>
            </Container>
            <div className="section" style={{backgroundColor:"transparent"}} /> 
          </div>
        
          </div> 
          
            </> 


        ); 
    }

}
export default TeleHealth; 