import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import {Layout } from "Components/Layout" 
import HomeIndex from "Components/Home/HomeIndex"
import AboutHeader from "Components/About/AboutHeader"
import Contact from "Components/Contact/Contact"
// import NotFoundPage from "Components/Error/NotFoundPage"
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        
        <Layout>
          <Route  exact path='/' component={HomeIndex} />
          <Route path="/About" component={AboutHeader}/> 
          <Route path="/Contact" component={Contact} />
          
         

        </Layout>
      </>
    );
  }
}