import React, { Component } from 'react'
import { Route , Redirect} from 'react-router-dom'


import {Layout } from "Components/Layout";
import LandingPageHeader from "Components/Headers/LandingPageHeader";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        <Layout>
         <Route  exact path='/' component={LandingPageHeader} />
         <Redirect from="/index" to="/"/> 
 
        </Layout>
      </>
    );
  }
}