
import "./FAQs.css" ; 
import React from 'react'; 
import {Row, Col , Card, CardBody, CardTitle, Container} from "reactstrap"; 
import {Animated} from "react-animated-css";
// import $ from 'jquery';

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
      this.setState({FAQ:file.FAQ, update:true},()=> { 
        console.log(" hello? ", this.state.FAQ)
      })

    }

    componentWillMount(){ 
      this.updateQuestion()
    }


    render(){ 
        let ComponentPieces = this.state.FAQ.Questions.map(
          
          (piece)=> {
            console.log("piece = ", piece.Name)

            if (piece.Weird == "true"){ 
              
              piece.Answer = <p>- Therapy is a partnership between an individual and a professional trained to help people understand their feelings and help them change their behavior. People often consider therapy under the following circumstances:<br/><br/>- They feel an overwhelming and prolonged sense of sadness and helplessness in their futures.<br/><br/>- Their emotional difficulties make it hard for them to function from day to day.<br/><br/>- Their actions are harmful to themselves or others.<br/><br/>- They are troubled by emotional problems facing family members or close friends.</p>
            }
            return(
              <>
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
              <Card className="card-plain card-blog">
                <Row>
                  <Col md="8">
                    <CardBody>
                      <CardTitle tag="h4">
                        <h4   onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className={piece.Color}>
                          {piece.Question}
                        </h4>
                      </CardTitle>
                      <p style={{color:"#fff"}}>
                        <br/>
                        <br/>
                      {piece.Answer}
                      </p>
                    </CardBody>
                  </Col>
                  <Col md="4">
                  </Col>
                </Row>
              </Card>
              </Animated>
              
              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true }>
              <Card className="card-plain card-blog">
                <Row>
                  <Col md="4">
                  </Col>
                  <Col md="8">
                    <CardBody>
                      
                      <CardTitle tag="h4">
                        <h4 onClick={(e) => e.preventDefault()} style={{color:"#fff", fontWeight:"bold"}} className={piece.Color2}>
                        {piece.Question2}
                        </h4 >
                      </CardTitle>
                      <p className="card-description" style={{color:"#fff"}}>
                      <br/><br/> 
                      {piece.Answer2}  
                      </p>
                    </CardBody>
                  </Col>
                </Row>
                </Card> 
                </Animated>
                </>
          ); 
        })
    
        window.scrollTo(0, 0); 
        return( 
            <>
            <div className="section" style={{backgroundColor:"#333333"}}/> 
            <div className="section section-grey" style={{backgroundColor:"#333333"}}> 
            <div className="blog-3" id="Exercise">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true }>
                  <h1 className="title" style={{textAlign:"center", color:"#fff", fontWeight:"bolder"}} >FAQs  </h1>
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