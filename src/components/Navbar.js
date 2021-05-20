import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-block">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img className="logo" src="/images/TV-sony.jpg" alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="icon navbar-icon"></span>
                            <span className="icon navbar-icon"></span>
                            <span className="icon navbar-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <div className="d-flex justify-content-between w-100">
                                <div className="nav-left ">
                                    <ul className="navbar-nav">
                                        <li className="nav-item  active">
                                            <a className="nav-link" href="#">
                                                Biz haqimizda
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                MAKTABIMIZ HAYOTI
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                ALOQA
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-right">
                                    <button className="btn btn-outline-primary mr-2">
                                        Kirish
                                    </button>
                                    <button className="btn btn-primary">
                                        Ro'yhatdan o'tish
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;