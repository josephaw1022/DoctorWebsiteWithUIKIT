import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import {Layout } from "Components/Layout" 
import Index from "Components/Home/Index"
import AboutHeader from "Components/About/AboutHeader"
import Contact from "Components/Contact/Contact"
// import NotFoundPage from "Components/Error/NotFoundPage"
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        
        <Layout>
          <Route  exact path='/' component={Index} />
          <Route path="/About" component={AboutHeader}/> 
          <Route path="/Contact" component={Contact} />
          
        </Layout>
      </>
    );
  }
}