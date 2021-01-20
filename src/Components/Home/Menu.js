import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

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
          return( 
              <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                <i className={"nc-icon "+value.Icon} />
                </div>
                <div className="description">
                  <h4 className="info-title">{value.Name}</h4>
                  <p>
                    {value.Description}
                  </p>
                  <Button className="btn-link eights" color="info" tag={Link} to={value.Link}>
                    See more
                  </Button>
                </div>
              </div>
              </Col> 
          ); 
      }
    )

    return (
      <>
      <div class="wrapper">

        <div className="main" data-parallex="true">
          <div className="section text-center">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title add-animation">{this.state.Menu.Title} </h2>
                  <h5 className="description" id="Menu">
                  {this.state.Menu.Description}
                  </h5>
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