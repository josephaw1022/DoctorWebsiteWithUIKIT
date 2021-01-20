import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import {

  Card,
  CardFooter,
  CardBody,


} from "reactstrap";
 
class ServicesOffered extends React.Component{
    constructor(props){
        super(props); 
        this.state={ 
            ServicesOffered:{}
        }
    }
    componentWillMount(){ 
        this.setState({ServicesOffered:this.props.data},()=> {})
    } 

    render(){  
        // eslint-disable-next-line
        let cards = this.state.ServicesOffered.Services.map(
            (index)=>{
                    return (
                        <Col md="4">
                                <Card
                                className="c3"
                                data-background="image"
                                style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos3.png") + ")"}}
                                >
                                <CardBody>
                                    <h6 className="card-category">Individual</h6>
                                    <div className="card-icon">
                                    <i className="nc-icon nc-chat-33" />
                                    </div>
                                    <p className="card-description">
                                    blah blah blah blah 
                                    </p>
                                    <CardFooter>
                                    <Button
                                        className="btn-neutral"
                                        color="link"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fa fa-book mr-1" />
                                        Show more
                                    </Button>
                                    </CardFooter>
                                </CardBody>
                                </Card>
                            </Col>

                    ) ; 
                }
        )

    return (
      <>
        <div className="section menubg" >
        <Container id="Services">
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title textc" >Services Offered</h2>
            <h5 className="description">
            
            </h5>
            <br />
        </Col>
        </Row>
        <Row>
        <Col md="4">
            <Card
            className="c3"
            data-background="image"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos3.png") + ")"}}
            >
            <CardBody>
                <h6 className="card-category">Individual</h6>
                <div className="card-icon">
                <i className="nc-icon nc-chat-33" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
        </Col>
        <Col md="4">
            <Card
            className="c2"
            data-background="image"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos21.png") + ")"}}
            
            >
            <CardBody>
                <h6 className="card-category">Group Therapy</h6>
                <div className="card-icon">
                <i className="nc-icon nc-shop" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
        </Col>
        <Col md="4">
            <Card
            data-background="image"
            className="c1"
            style={{backgroundImage:"url(" + require("assets/img/FreeOnes/Photos1.png") + ")"}}
            >
            <CardBody>
                <h6 className="card-category">Faith Counseling</h6>
                <div className="card-icon">
                <i className="nc-icon nc-send" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
        </Col>
        </Row>
        </Container>
        </div>
        </> 
    );
    }  
} 
export default ServicesOffered ; 

// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Container,
//   Row,
//   Col
// } from "reactstrap";

// import {

//   Card,
//   CardFooter,
//   CardBody,


// } from "reactstrap";
 
// class ServicesOffered extends React.Component{
//     constructor(props){
//         super(props); 
//         this.state={ 
//             ServicesOffered:{}
//         }
//     }
//     componentWillMount(){ 
//         this.setState({ServicesOffered:this.props.data},()=> {})
//     } 

//     render(){  

//         let cards = this.state.ServicesOffered.Services.map(
//             (index)=>{
//                 var address = index.Photo
//                     return (
//                             <Col md="4">
//                                 <Card
//                                 className={"c3"+index.Class}
//                                 data-background="image"
//                                 style={{backgroundImage:'url(' + require(address) + ')'}}
                                
//                                 >
//                                 <CardBody>
//                                     <h6 className="card-category">{index.Type} </h6>
//                                     <div className="card-icon">
//                                     <i className="nc-icon nc-chat-33" />
//                                     </div>
//                                     <p className="card-description">
//                                     {index.Description}
//                                     </p>
//                                     <CardFooter>
//                                     <Button
//                                         className="btn-neutral"
//                                         color="link"
//                                         href="#pablo"
//                                         onClick={(e) => e.preventDefault()}
//                                     >
//                                         <i className="fa fa-book mr-1" />
//                                         Show more
//                                     </Button>
//                                     </CardFooter>
//                                 </CardBody>
//                                 </Card>
//                             </Col>

//                     ) ; 
//                 }
//         )

//     return (
//       <>
//         <div className="section" >
//         <Container id="Services">
//         <Row>
//         <Col className="ml-auto mr-auto text-center" md="8">
//             <h2 className="title">Services Offered</h2>
//             <h5 className="description">
            
//             </h5>
//             <br />
//         </Col>
//         </Row>
//         <Row>
//             {cards}
//         </Row>
//         </Container>
//         </div>
//         </> 
//     );
//     }  
// } 
// export default ServicesOffered ; 