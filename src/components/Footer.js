import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <div>
                <div className="row bg-dark py-5  ">
                    <div className={'col-md-4 text-dark text-center offset-4'}>
                        <div className={'d-flex justify-content-center border-bottom my-3 ml-3 pb-4'}>
                            <div className={'bg-white ml-3 px-2 py-1  rounded-circle  mr-2'}><a href={'#'}><i className="fab fa-facebook-f text-dark mx-1"></i></a></div>
                            <div className={'bg-white  px-2 py-1 rounded-circle  ml-1'}><a href={'#'}><i className="fab fa-twitter text-dark"></i></a></div>
                        </div>
                        <Router>
                            <div className={'border-bottom ml-3 p-2'}>
                                <nav>
                                    <ul className={'list-unstyled pl-4'}>
                                        <li >
                                            <Link  className={'text-white'} to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link  className={'text-white my-3'} to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link  className={'text-white'} to="/users">Users</Link>
                                        </li>
                                        <li>
                                            <Link  className={'text-white my-3'} to="/users">Contact</Link>
                                        </li>
                                        <li>
                                            <Link  className={'text-white'} to="/users">Policies</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <Switch>
                                    <Route path="/about">

                                    </Route>
                                    <Route path="/users">

                                    </Route>
                                    <Route path="/">

                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                        <div className={'text-white mt-4 ml-2'}>
                            <h6>© 2021 Smart Parking - All rights reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;