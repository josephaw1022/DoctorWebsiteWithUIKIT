import React from "react";
import DemoFooter from "./Footers/DemoFooter";
import NavBar3 from "./NavBars/NavBar3";
import NavBarIndex from "./NavBars/NavBarIndex";
import $ from "jquery";

export const Layout = (props) => {
    return (
        <>
            {$(window).width() > 900 ? <NavBarIndex /> : <NavBar3 />}
            {props.children}
            <DemoFooter />
        </>
    );
};
