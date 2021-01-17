import React from 'react' ; 
import './Home.css'

import  {
Card,
CardBody, 
// CardHeader, 
// CardFooter,
CardTitle,
Container,
// Row,
// Col,
// Button 
} from "reactstrap"
import {Animated} from "react-animated-css";


export default function ClientResources(){ 
    
    
    
    
    
    return( 
        <div className="section">
        <Container>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Card className="my-element" style={{backgroundColor:"#50bcdb"}}>
                            <CardTitle>Hello</CardTitle>
                            <CardBody>
                                Hello Again
                            </CardBody>
                        </Card>
        </Animated>
        </Container>
        </div> 
        
        
    ); 

}