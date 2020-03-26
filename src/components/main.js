import React from 'react';
import LandingPage from "./landingpage";
import AboutMe from "./Aboutme";
import Contact from "./contact";
import Projects from "./projects"


import { Switch,Route } from "react-router-dom";
const Main= () =>(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/Aboutme" component={AboutMe} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />



    </Switch>
)
export default Main;