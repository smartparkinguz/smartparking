import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Section from "./components/Section";


class App extends Component {


    render() {

        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route>
                        <Section/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;

