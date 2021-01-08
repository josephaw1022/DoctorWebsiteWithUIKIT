import React, { Component } from 'react';
import DemoFooter from "./Footers/DemoFooter";
import ExamplesNavbar from "./NavBars/ExamplesNavbar";


export class Layout extends Component {
    render () {
      return (
        <>
        <ExamplesNavbar/>
        {this.props.children}
        <DemoFooter/> 
        </>
      );
    }
  } 