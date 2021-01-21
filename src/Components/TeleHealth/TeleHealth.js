import "./TeleHealth.css"
import React from 'react'
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";

class TeleHealth extends React.Component { 

    constructor(props){ 
        super(props); 
        this.state={ 
            Title:"",
            Description:"", 
            Color:""
        }
    }
    

    componentWillMount(){ 
        const file = require("./TeleHealth.json")
        this.setState({
            Title:file.TeleHealth.Title, 
            Description:file.TeleHealth.Description, 
            Color:file.TeleHealth.Color
        })
    }




    render(){ 
        let Title = this.state.Title ; 
        let Description = this.state.Description ; 
        let Color = this.state.Color ; 
  
        window.scrollTo(0, 0); 

        return(
            <>
            <div className="section " style={{backgroundColor:"#333"}}/>
            <div className="section section-grey fill" style={{backgroundColor:"#333"}}> 
                <div className="" id="TeleHealth">
                <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="10">
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                    <h2 className="title" style={{textAlign:"center", color:"#3", fontWeight:"bolder", color:"#fff"}} >Telehealth</h2>
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
                                <h3 onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className={Color+" fixh3"}>
                                {Title}
                                </h3>
                            </CardTitle>
                            <p className="card-description fixp" style={{color:"#fff", fontSize:"20px"}}>
                            {Description}
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
          <div className="section " style={{backgroundColor:"#333"}}/>
        </> 


        ) ; 
    }
}
export default TeleHealth; 