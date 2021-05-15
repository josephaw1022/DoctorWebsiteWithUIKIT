import React from "react";
import { Container, Row, Col } from "reactstrap";

import Bio from "./Modals/Bio/Bio";

class OurTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Description: "",
            Name: "",
            Position: "",
            Bio: "",
            ForModal: "",
        };
    }

    componentWillMount() {
        this.setState({
            Title: this.props.data.Title,
            Description: this.props.data.Description,
            Name: this.props.data.Name,
            Position: this.props.data.Position,
            Bio: this.props.data.Bio,
            ForModal: this.props.data.ModalBody,
        });
    }

    render() {
        return (
            <>
                <div className="team-3" id="OurTeam" style={{ height: "100%" }}>
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
                                {/* The modal component  */}
                                <Bio
                                    Name={this.state.Name}
                                    Bio={this.state.Bio}
                                    AboutMe={this.state.ForModal}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div
                    className="section phonechange"
                    style={{ backgroundColor: "#fff" }}
                />
            </>
        );
    }
}
export default OurTeam;
