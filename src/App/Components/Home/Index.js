import React from "react";
import Convenient from "./Convenient";
import "./Home.css";
import Menu from "./Menu";
import OurTeam from "./OurTeam";
import PartOne from "./PartOne";
import ServicesOffered from "./ServicesOffered";
import SideNav from "./SideNav";
import TeleHealth from "./TeleHealth";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PartOne: {},
            Menu: {},
            TeleHealth: {},
            ServicesOffered: {},
            modalServicesOffered: {},
            OurTeam: {},
            ServiceModals: {},
        };
    }

    componentWillMount() {
        let file = require("./navjs.json");
        this.setState({
            PartOne: file.PageHeader,
            Menu: file.Menu,
            TeleHealth: file.TeleHealth,
            ServicesOffered: file.ServicesOffered,
            OurTeam: file.OurTeam,
            ServiceModals: file.ServiceModals,
        });
    }

    render() {
        return (
            <>
                <div className="section-space" />
                <PartOne data={this.state.PartOne} />
                <Menu data={this.state.Menu} />
                <Convenient />
                <ServicesOffered
                    data={this.state.ServicesOffered}
                    data2={this.state.ServiceModals}
                />
                <OurTeam data={this.state.OurTeam} />
                <TeleHealth data={this.state.TeleHealth} />
                <SideNav />
            </>
        );
    }
}
export default Index;
