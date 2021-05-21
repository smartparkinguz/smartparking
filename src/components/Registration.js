import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Modal, ModalBody} from "reactstrap";

class Registration extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-md-12">
                            <Modal>
                                <ModalBody>
                                    <AvForm>
                                        <AvField
                                            type="text"
                                            style={{width:"100%",opacity:"0.7"}}
                                            placeholder="F.I.SH..."
                                            name="firstName"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            style={{width:"100%",opacity:"0.7"}}
                                            className="my-3"
                                            placeholder="Telefon raqami..."
                                            name="telnumber"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            style={{width:"100%",opacity:"0.7"}}
                                            placeholder="avto raqami..."
                                            name="carnumber"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            style={{width:"100%",opacity:"0.7"}}
                                            className="my-3"
                                            placeholder="avto rusumi..."
                                            name="model"
                                            required
                                        />
                                        <AvField
                                            type="select"
                                            style={{width:"100%",backgroundColor:"white"}}
                                            placeholder="avto rangi"
                                            name="position"
                                        >
                                            <option value="Director">avto rangi</option>
                                            <option value="Director">red</option>
                                            <option value="Developer">green</option>
                                            <option value="Manager">white</option>
                                        </AvField>
                                        <button type={'submit'} className="btn btn-primary my-3" style={{width:"100%"}}>Registratsiya</button>
                                    </AvForm>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Registration;