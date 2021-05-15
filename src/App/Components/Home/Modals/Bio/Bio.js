import React from "react";
// reactstrap components
import {
    Button,
    Modal,
    Card,
    Col,
    Row,
    CardBody,
    CardTitle,
    CardFooter,
} from "reactstrap";

function Bio(props) {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(
        false
    );

    const myobj = document.getElementById("navbar-main-here");

    function hideNav() {
        setScrollingLongContent(true);
        if (myobj === null) {
            return;
        } else if (myobj.style.display === "none") {
            myobj.style.display = "block";
        } else {
            myobj.style.display = "none";
        }
    }

    function showNav() {
        setScrollingLongContent(false);
        if (myobj === null) {
            return;
        } else if (myobj.style.display === "block") {
            myobj.style.display = "none";
        } else {
            myobj.style.display = "block";
        }
    }

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
                            onClick={() => hideNav()}
                        >
                            <Card
                                className="card-profile card-contact"
                                style={{
                                    borderRadius: "25px",
                                }}
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
                        onClick={() => showNav()}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">{props.AboutMe}</div>
            </Modal>
        </>
    );
}

export default Bio;
