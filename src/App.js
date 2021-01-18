import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import {Layout } from "Components/Layout" 
import Index from "Components/Home/Index"
import AboutHeader from "Components/About/AboutHeader"
import Contact from "Components/Contact/Contact"
import Rates from "Components/Rates/Rates"
import FAQs from "Components/FAQs/FAQs"
import GettingStarted from "Components/GettingStarted/GettingStarted"

// import NotFoundPage from "Components/Error/NotFoundPage"
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        
        <Layout>
          <Route  exact path='/' component={Index} />
          
          <Route path="/Contact" component={Contact} />
          <Route path="/Rates" component={Rates}/> 
          <Route path="/FAQs" component={FAQs}/> 
          <Route path="/GettingStarted" component={GettingStarted}/> 
        </Layout>
      </>
    );
  }
}