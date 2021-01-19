
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
import Exercise from "./Exercise"
import TeleHealth2 from "./TeleHealth2"
// import Menu2 from "./Menu2"
// import ClientResources from "./ClientResources"

import "./Home.css"

class Index extends React.Component{ 
    
    

    render(){
            
        return (
            <>
            <div className="section-space" />
        
            <PartOne />
            <Menu/> 
            <Convenient/>
            <ServicesOffered/>
            <OurTeam/> 
            {/* <BlogPosts/> */}
            {/* <Exercise/> */}
            {/* <Menu2/>  */}
            <TeleHealth2/> 
            <Contact/> 
            <SideNav/> 

            </>
        ); 
    }
}
export default Index ; 