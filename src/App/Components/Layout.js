import React, { Component } from "react"
import DemoFooter from "./Footers/DemoFooter"
import NavBar2 from "./NavBars/NavBar2"
import NavBarIndex from "./NavBars/NavBarIndex"
import $ from "jquery"
export class Layout extends Component {
    render() {
        return (
            <>
                {$(window).width() > 900 ? <NavBarIndex /> : <NavBar2 />}
                {this.props.children}
                <DemoFooter />
            </>
        )
    }
}
