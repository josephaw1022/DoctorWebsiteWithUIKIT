import "./Bio.css";
import React from "react";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="section" style={{ backgroundColor: "#333" }} />
        <div className="section " style={{ backgroundColor: "#333" }}></div>
      </>
    );
  }
}

export default Bio;
