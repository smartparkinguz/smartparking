import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class FooterNew extends Component {
    render() {
        return (
            <footer>
                <div className={'container-fluid'}>
                    <div className={'row bg-dark  p-0  pt-3'}>
                        <div className={'col-md-4 mt-5 pl-5'}>
                            <img src={'images/TV-sony.jpg'} style={{width:'20%'}}/>
                        </div>
                        <div className={'col-md-4'}>
                            <Router>
                                <div className={'m-4'}>
                                    <h5 className={'text-white'}>Asosiy</h5>
                                    <nav>
                                        <ul className={'list-unstyled'}>
                                            <li >
                                                <Link  className={'text-white'} to="/">Kompaniya haqida</Link>
                                            </li>
                                            <li className={'my-2'}>
                                                <Link  className={'text-white '} to="/about">Filialllar</Link>
                                            </li>
                                            <li>
                                                <Link  className={'text-white'} to="/users">Murojaat uchun</Link>
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
                        </div>
                        <div className={'col-md-4 mt-4 '}>
                            <h5 className={' text-white'}>Biz bilan aloqa</h5>
                            <p className={' text-white'}>(+998 90) 646 57 29</p>
                            <a href={'#'} style={{textDecoration:"none"}}><span className={" text-white"}>100111 Toshkent sh, Mirobod tumani,Zarqaynar ko'chasi,55-uy</span></a>
                        </div>
                        <div className={'col-md-12 mt-3 lastFooter d-flex justify-content-between text-white  px-5'}>
                            <div className={'col-md-6 p-2'}>
                                <h3>Smart Parking</h3>
                            </div>
                            <div className={' col-md-6 d-flex justify-content-end p-3 pr-5'}>
                                <div className={'bg-white px-2 py-1  rounded-circle  '}><a href={'#'}><i className="fab fa-facebook-f text-dark mx-1"></i></a></div>
                                <div className={'bg-white px-2 py-1    rounded-circle ml-3  '}><a href={'#'}><i className="fab fa-twitter text-dark"></i></a></div>
                                <div className={'bg-white  px-2 py-1 rounded-circle  ml-3'}><a href={'#'}> <i className="fab fa-telegram-plane text-dark"></i></a></div>
                                <div className={'bg-white  px-2 py-1 rounded-circle  ml-3'}><a href={'#'}><i className="fab fa-instagram text-dark"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterNew;