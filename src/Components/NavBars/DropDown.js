import React from "react"
import "./NAV.json"
import "./NavBar.css"
import { Link } from "react-router-dom"
import { DropdownItem } from "reactstrap"

import {
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    Nav,
} from "reactstrap"

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: {},
            collapse: false,
        }
    }

    OpenJsonFile() {
        const file = require("./NAV.json")
        this.setState({ menu: file.menu.list })
    }

    componentWillMount() {
        this.OpenJsonFile()
    }

    render() {
        let MenuPieces = this.state.menu.map((index) => {
            return (
                <>
                    <DropdownItem
                        to={index.Link}
                        tag={Link}
                        className="btn-magnify "
                    >
                        <i className={"nc-icon " + index.Icon} />
                        {index.Name}
                    </DropdownItem>
                </>
            )
        })

        return (
            <>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                            className="mr-2"
                            color="default"
                            caret
                            nav
                        >
                            More
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-info" right>
                            {MenuPieces}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </>
        )
    }
}

export default DropDown
