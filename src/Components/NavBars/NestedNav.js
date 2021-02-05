import React  from "react"
import "./NAV.json" 
import "./NavBar.css" 
import { Link } from "react-router-dom" 
import {DropdownItem} from "reactstrap" 

class NestedNav extends React.Component{ 

    constructor(props){ 
        super(props) ; 
        this.state={ 
            menu: {}  
        }
    }

    OpenJsonFile(){ 
        const file = require("./NAV.json")
        this.setState({ menu: file.menu.list})
    } 

    componentWillMount(){ 
        this.OpenJsonFile() ; 
    }

    render(){ 

        let MenuPieces = this.state.menu.map( 
            (index) => { 
                return( 
                    <>
                        <DropdownItem to={index.Link} tag={Link}>
                            <i className={"nc-icon "+ index.Icon} />
                            {index.Name}
                        </DropdownItem>
                    </> 
                ); 
            }
        )

        return(
            <>
            {MenuPieces}
            </> 
        ) ; 

    }
}

export default NestedNav ; 