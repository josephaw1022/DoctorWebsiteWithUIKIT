import React from 'react'
// import './TeleHealth.css'
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"
import {Animated} from "react-animated-css"

class TeleHealth2 extends React.Component { 

    constructor(props){ 
      super(props); 
      this.state={
        TeleHealth:{
          Title:"",
          Description:"" , 
          Color:""
        }
      }
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
            <div className="section phonechange" style={{backgroundColor:"transparent"}}/> 
            <div className="section section-grey fill" > 
            <div className="" id="TeleHealth">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                  <h2 className="title" style={{textAlign:"center", fontWeight:"bolder", color:"#fff"}} > Telehealth</h2>
                    </Animated> 
                  <br />
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <Card className="card-plain card-blog">
                    <Row>
                      <Col md="4">
                        
                      </Col>
                      <Col md="12">
                          <div className="text-center">
                        <CardBody>
                          <CardTitle tag="h3">
                            <h3 onClick={(e) => e.preventDefault()} style={{color:"#000", fontWeight:"bold"}} className={this.state.Color+" fixh3"}>
                            {this.state.Title}
                            </h3>
                          </CardTitle>
                          <p className="card-description fixp" style={{color:"#fff", fontSize:"20px"}}>
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
          </div> 
          <div className="section phonechange" style={{backgroundColor:"#333"}} /> 
            </> 


        ); 
    }

}
export default TeleHealth2; 