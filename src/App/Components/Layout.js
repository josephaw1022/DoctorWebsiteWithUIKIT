import React from "react";
import DemoFooter from "./Footers/DemoFooter";
import NavBar2 from "./NavBars/NavBar2";
import NavBarIndex from "./NavBars/NavBarIndex";
import $ from "jquery";

export const Layout = (props) => {
    return (
        <>
            {$(window).width() > 900 ? <NavBarIndex /> : <NavBar2 />}
            {props.children}
            <DemoFooter />
        </>
    );
};
