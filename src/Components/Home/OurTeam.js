import React from "react"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import  { Link} from "react-router-dom"; 
import photo1 from "assets/img/brownprofile.png"  


class OurTeam extends React.Component{
  constructor(props){ 
    super(props); 
    this.state={ 
      Title:"", 
      Description:"",
      Name:"" , 
      Position:"",
      Bio:""


    }
  }

  componentWillMount(){ 
    this.setState(
      {
        Title:this.props.data.Title, 
        Description:this.props.data.Description, 
        Name:this.props.data.Name, 
        Position:this.props.data.Position,
        Bio:this.props.data.Bio
        
      } 
    )
  }


  render(){ 
    
      return (
        <>
      
        <div className="team-3" id="OurTeam" style={{ height:"100%"}}>
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title"> {this.state.Title} </h2>
                    <h5 className="description">
                      {this.state.Description}
                    </h5>
                  </Col>
                </Row>
                <div className="space-top" />
                <Row>
                  <Col md="6" className="ml-auto mr-auto text-center">
                    <Card className="card-profile card-plain" tag={Link} to="/Bio" >
                      <Row >
                        <Col md="6">
                        <div className="card-image">
                              <img
                                style={{display:"initial"}}
                                alt="..."
                                className="image"
                                src={require("assets/img/brownprofile.png")}
                                
                              />
                            </div>
                        </Col>
                        <Col md="6">
                          <CardBody className="text-left">
                            <CardTitle tag="h4"> {this.state.Name} </CardTitle>
                            <h6 className="card-category">{this.state.Position}</h6>
                            <p className="card-description">
                              {this.state.Bio}
                            </p>
                            <CardFooter className="pull-left">
                              <Button
                                className="btn-just-icon btn-link mr-1"
                                color="twitter"
                                
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fa fa-twitter" />
                              </Button>
                              <Button
                                className="btn-just-icon btn-link mr-1"
                                color="facebook"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fa fa-facebook" />
                              </Button>
                              
                            </CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="section phonechange" style={{backgroundColor:"#fff"}} /> 
          
          </>
        );
  } 
}
export default OurTeam ;  

