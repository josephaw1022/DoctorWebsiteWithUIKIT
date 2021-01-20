
import React from "react";
// import {Link} from "react-router-dom"
import PartOne from "./PartOne"
import Menu from "./Menu"
import ServicesOffered from "./ServicesOffered"
import Convenient from "./Convenient"
import OurTeam from "./OurTeam"
// import BlogPosts from "./BlogPosts"
import Contact from "./Contact"
import SideNav from "./SideNav"
// import Exercise from "./Exercise"
import TeleHealth2 from "./TeleHealth2"
// import Menu2 from "./Menu2"
// import ClientResources from "./ClientResources"

import "./Home.css"

class Index extends React.Component{ 
    
    constructor(props){ 
        super(props); 
        this.state={ 
            PartOne:{},
            Menu:{},
            TeleHealth:{},
            ServicesOffered:{}
            
        } 
    }
    

    componentWillMount(){
        let file = require("./navjs.json")
        this.setState(
            {
            PartOne:file.PageHeader,
            Menu:file.Menu,
            TeleHealth:file.TeleHealth,
            ServicesOffered:file.ServicesOffered
            }
        )
    } 


    render(){
        
            
        return (
            <>
            <div className="section-space" />
            <PartOne data={this.state.PartOne}/>
            <Menu data={this.state.Menu}/> 
            <Convenient/>
            <ServicesOffered data={this.state.ServicesOffered}/>
            <OurTeam/> 
            <TeleHealth2 data={this.state.TeleHealth}/> 
            <Contact/> 
            <SideNav/> 

            </>
        ); 
    }
}
export default Index ; 