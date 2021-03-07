import React from "react"
// reactstrap components
import {
    Button,
    //  FormGroup, Input,
    Modal,
    Card,
    Col,
    Row,
    CardBody,
    CardTitle,
    CardFooter,
    //  CardImg
} from "reactstrap"

function Bio(props) {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(
        false
    )

    return (
        <>
            <Card className="card-profile card-plain">
                <Row>
                    <Col md="6">
                        <Button
                            style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                            }}
                            onClick={() => setScrollingLongContent(true)}
                        >
                            <Card
                                className="card-profile card-contact"
                                style={{ borderRadius: "25px" }}
                            >
                                <div className="card-image">
                                    <img
                                        style={{
                                            display: "initial",
                                            borderRadius: "25px",
                                        }}
                                        alt="..."
                                        className="image"
                                        src={require("assets/img/brownprofile.png")}
                                    />
                                </div>
                            </Card>
                        </Button>
                    </Col>
                    <Col md="6">
                        <CardBody className="text-left">
                            <CardTitle tag="h4"> {props.Name} </CardTitle>
                            <h6 className="card-category">{props.Position}</h6>
                            <p className="card-description">{props.Bio}</p>
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

            <Modal
                isOpen={scrollingLongContent}
                toggle={() => setScrollingLongContent(false)}
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                        About me
                    </h5>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setScrollingLongContent(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">{props.AboutMe}</div>
            </Modal>
        </>
    )
}

export default Bio
