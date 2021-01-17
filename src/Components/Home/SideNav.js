import React from "react"
import "./Home.css"

class SideNav extends React.Component{ 

    constructor(props){
        super(props);
        this.state=null ; 

    }

    render(){ 

        return(
            <nav id="cd-vertical-nav" style={{marginRight:"35px"}}>
                <ul>
                <li>
                    <a
                    data-number="1"
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("home").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label">Home</span>
                    </a>
                </li>
                <li>
                    <a
                    data-number="2"
                    href="#About"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("About").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label">About</span>
                    </a>
                </li>
                <li>
                    <a
                    data-number="3"
                    href="#Services"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("Services").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label"> Something</span>
                    </a>
                </li>
                <li>
                    <a
                    data-number="3"
                    href="#Contact"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("Contact").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label">Something</span>
                    </a>
                </li>
                
                <li>
                    <a
                    data-number="5"
                    href="#OurTeam"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("OurTeam").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label">Something</span>
                    </a>
                </li>
                <li>
                    <a
                    data-number="6"
                    href="#Counseling"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("Counseling").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label">Something</span>
                    </a>
                </li>
                <li>
                    <a
                    data-number="3"
                    href="#Exercise"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("Exercise").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label"> Something</span>
                    </a>
                </li>
                
                <li>
                    <a
                    data-number="3"
                    href="#contact-us"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact-us").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                        });
                    }}
                    >
                    <span className="cd-dot pointercolor" />
                    <span className="cd-label"> Something</span>
                    </a>
                </li>
                
                
                </ul>
            </nav>

        ) ; 
    }

}
export default SideNav ; 