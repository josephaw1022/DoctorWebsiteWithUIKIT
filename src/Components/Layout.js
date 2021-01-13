import React, { Component } from 'react';
import DemoFooter from "./Footers/DemoFooter";
// import ExamplesNavbar from "./NavBars/ExamplesNavbar";
import TestNavBar from "./NavBars/TestNavBar";

export class Layout extends Component {
    render () {
      return (
        <>
        <TestNavBar/>
        {this.props.children}
        <DemoFooter/> 
        </>
      );
    }
  } 