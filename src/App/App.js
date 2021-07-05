import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Index from "./Components/Home/Index";
import Rates from "./Components/Rates/Rates";
import FAQs from "./Components/FAQs/FAQs";
import GettingStarted from "./Components/GettingStarted/GettingStarted";
import WhyUs from "./Components/WhyUs/WhyUs";
import Future from "./Components/Future/Future";
import TeleHealth from "./Components/TeleHealth/TeleHealth";
import Bio from "./Components/Bio/Bio";
import Schedule from "./Components/Schedule/Schedule";
import NewContact from "./Components/Contact/NewContact";

export const App = () => {
    return (
        <Layout style="overflow-x:hidden ">
            <Route exact path="/" component={Index} />
            <Route path="/Contact" component={NewContact} />
            <Route path="/Rates" component={Rates} />
            <Route path="/FAQs" component={FAQs} />
            <Route path="/GettingStarted" component={GettingStarted} />
            <Route path="/WhyUs" component={WhyUs} />
            <Route path="/Future" component={Future} />
            <Route path="/TeleHealth" component={TeleHealth} />
            <Route path="/Bio" component={Bio} />
            <Route path="/Schedule" component={Schedule} />
        </Layout>
    );
};

export default App;
