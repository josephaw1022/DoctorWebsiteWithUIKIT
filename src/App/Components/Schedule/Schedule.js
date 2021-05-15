import React from "react";
import "./Schedule.css";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import { CardBody, Card, Container } from "reactstrap";

export const Schedule = () => {
    return (
        <>
            <div
                className="section"
                style={{
                    backgroundColor: "#333",
                    height: "100px",
                }}
            />
            <div div className="section" style={{ backgroundColor: "#333" }}>
                <div className="text-center">
                    <Container>
                        <Card>
                            <CardBody>
                                <InfiniteCalendar
                                    width="80%"
                                    style={{
                                        left: "50%",
                                        position: "relative",
                                    }}
                                    displayOptions={{
                                        layout: "portrait",
                                        showOverlay: false,
                                        shouldHeaderAnimate: false,
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Schedule;
