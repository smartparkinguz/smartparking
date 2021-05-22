import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Section from "./components/Section";
import Map from "./components/Map";
import SectionTwo from "./components/Section-two";


class App extends Component {


    render() {

        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Section/>
                        <SectionTwo/>
                    </Route>

                    <Route path="/map">
                        <Map/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;

