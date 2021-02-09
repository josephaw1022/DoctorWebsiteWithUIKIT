import React from 'react'
// import './TeleHealth.css'
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";
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

      console.log(this.state.Description)
    }
    

    render(){

      
      

    

        return(
            <>
          
          
            <div className="section parallax" 
            style={{
              backgroundImage: "url(" + require("assets/img/FreeOnes/Photos18.png") + ")",
              height:"110%"
                }}
              data-parallax="true"
              ref={this.myRef}
              > 
            <div className="" id="TeleHealth">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                  <h2 className="title" style={{textAlign:"center", fontWeight:"bolder", color:"#fff"}} > Telehealth</h2>
                    </Animated> 

                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        
                      </Col>
                      <Col md="12">
                          <div className="text-center">
                        <CardBody>
                          <CardTitle tag="h3">
                            
                            <h3 onClick={(e) => e.preventDefault()} style={{color:"bg-secondary", fontWeight:"bold", textAlign:"center"}} className={this.props.data.Color+" fixh3 text-center"}>
                            {this.props.data.Title} + " Hello "
                            </h3>
                          </CardTitle>
                          <p className="fixp" style={{color:"#fff"}} >
                          {this.state.Description}
                          </p>
                        </CardBody>
                        </div> 
                      </Col>
                    </Row>
                  </Card>
                  </Animated> 
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section" style={{backgroundColor:"transparent", margin:"30px"}} /> 
          </div> 
          
            </> 


        ); 
    }

}
export default TeleHealth; 