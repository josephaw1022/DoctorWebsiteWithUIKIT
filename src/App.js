import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import {Layout } from "Components/Layout" 
import PartOne from "Components/Home/PartOne"
import AboutHeader from "Components/About/AboutHeader"
import Contact from "Components/Contact/Contact"

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        
        <Layout>
         <Route  exact path='/' component={PartOne} />
         
         <Route path="/About" component={AboutHeader}/> 
         <Route path="/Contact" component={Contact} /> 
        </Layout>
      </>
    );
  }
}