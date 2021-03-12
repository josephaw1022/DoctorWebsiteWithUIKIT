import React, { Component } from "react"
import DemoFooter from "./Footers/DemoFooter"
// import ExamplesNavbar from "./NavBars/ExamplesNavbar";
import NavBarIndex from "./NavBars/NavBarIndex"

export class Layout extends Component {
    render() {
        return (
            <>
                <NavBarIndex />
                {this.props.children}
                <DemoFooter />
            </>
        )
    }
}
