
import "./FAQs.css" ; 
import React from 'react'; 
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";
import $ from 'jquery'
import ScrollAnimation from 'react-animate-on-scroll';

class FAQs extends React.Component{ 
    
    constructor(props){ 
      super(props); 
      this.state= {
        FAQ:{ } , 
        update:false 
      }
    }

    updateQuestion(){ 
      let file = require("./faqInfo.json");
      this.setState({FAQ:file.FAQ, update:true})
    }

    componentWillMount(){ 
      this.updateQuestion()
    }

    render(){ 
        let ComponentPieces = this.state.FAQ.Questions.map(
          
          (index)=> {
            if (index.Weird === true){ 
              index.Answer = <p style={{color:"#333", fontWeight:"bolder"}}>- Therapy is a partnership between an individual and a professional trained to help people understand their feelings and help them change their behavior. People often consider therapy under the following circumstances:<br/><br/>- They feel an overwhelming and prolonged sense of sadness and helplessness in their futures.<br/><br/>- Their emotional difficulties make it hard for them to function from day to day.<br/><br/>- Their actions are harmful to themselves or others.<br/><br/>- They are troubled by emotional problems facing family members or close friends.</p>
            }
            return(
              <>
              <Row>
              <Col md="6">
              <ScrollAnimation animateIn="slideInLeft"animationOut="zoomOut" animatePreScroll={true}  duration={.5}  animateOnce={true} >
              <Card className="card-contact" style={{}}>
                <Row>
                  <Col md="12">
                    <CardBody>
                      <CardTitle tag="h4">
                        <h4   onClick={(e) => e.preventDefault()} style={{color:"#333", fontWeight:"bold", textAlign:"center"}} className={index.Color}>
                          {index.Question}
                        </h4>
                      </CardTitle> 
                      <hr/> 
                      <p style={{color:"#333", fontWeight:"bolder"}}>
                        <br/>
                    
                      {index.Answer}
                      </p>
                    </CardBody>
                  </Col>
                  
                </Row>
              </Card>
              </ScrollAnimation> 
              </Col> 
              </Row>
              <br/> 
              <br/> 

              <Row>
              <Col md={6}>
              </Col>
              <Col md="6">
              <ScrollAnimation animateIn={$(window).width()<900? "slideInLeft": "slideInRight"} animationOut="zoomOut" animatePreScroll={true} duration={.5} animateOnce={true} >
              <Card className="card-blog" style={{textAlign:"center"}}>
                <Row>
                  
                  <Col md="12">
                    <CardBody> 
                      <CardTitle tag="h4">
                        <h4 onClick={(e) => e.preventDefault()} style={{color:"#333", fontWeight:"bold", textAlign:"center"}} className={index.Color2}>
                        {index.Question2}
                        </h4 >
                      </CardTitle>
                      <hr style={{overflow:"auto"}}/>
                      <p style={{color:"#333", fontWeight:"bolder"}}>
                      <br/>
                      {index.Answer2}  
                      </p>
                    </CardBody>
                  </Col>
                </Row>
                </Card> 
                </ScrollAnimation>
                </Col> 
                </Row> 
                
                </>
          ); 
        })
    
        window.scrollTo(0, 0); 
        return( 
            <>
            <div className="section" style={{backgroundColor:"#333333"}}/> 
            <div className="section " style={{backgroundColor:"#333333"}}> 
            <div className="blog-3" id="Exercise">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
                  <h1 className="title" style={{textAlign:"center", color:"#fff", fontWeight:"bolder"}} >
                    Frequently Asked Questions
                  </h1>
                    </Animated> 
                  <br />
                  {ComponentPieces} 
                </Col>
              </Row>
            </Container>
          </div>
          </div> 
            </> 
        ) ; 
    }
}
export default FAQs ; 