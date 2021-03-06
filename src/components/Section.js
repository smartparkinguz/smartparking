import React from 'react';
import {Form, Input} from "reactstrap";
import Search from "./Search";

function Section() {

    return (
        <div className="section-one">
            <div className="container-fluid">
                <div className="row">
                    <div className="section">
                        <div className="fon1"></div>
                        <div className="fon2">
                            <Search/>
                        </div>
                        <img className="w-100 vh-100" src="/images/img.png" alt="img"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section