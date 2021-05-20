import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from "./utils";
import {toast} from "react-toastify";
import { Redirect } from "react-router-dom";

export default class PaymentForm extends React.Component {
    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null,
        redirect: null
    };



    handleCallback = ({issuer}, isValid) => {
        if (isValid) {
            this.setState({issuer});
        }
    };

    handleInputFocus = ({target}) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({target}) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({[target.name]: target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {allProductsPrice, toggle, deleteProductFromCart, orderedProducts, addToHistory,  cardInfo} = this.props
        const {issuer} = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        let counter = 0
        let tempObjectId = null

        cardInfo.map(item => {
            if (item.name === formData.name && item.cvc === formData.cvc && item.number === formData.number && item.expiry === formData.expiry) {
                counter = 1
                tempObjectId = item.id
            }
        })

        if (counter === 1) {
            let id = cardInfo.findIndex(obj => obj.id === tempObjectId)
            console.log(id)

            cardInfo[id].balance -= allProductsPrice

            console.log(cardInfo[id].balance)


            toast.success("To'lov muvaffaqiyatli amalga oshirildi")

            addToHistory(orderedProducts)
            deleteProductFromCart(null)
            this.setState({ redirect: "/por" });




        } else if (counter === 0) {
            toast.error('Xato')
        }

        this.setState({formData});
        this.form.reset();
        toggle()


    };




    render() {
        const {name, redirect, number, expiry, cvc, focused, issuer, formData} = this.state;

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div id="PaymentForm">
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focused}
                    name={name}
                    number={number}
                />
                <div className="col-lg-10 offset-1 mt-2">
                    <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="number"
                                className="form-control"
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="tel"
                                    name="expiry"
                                    className="form-control"
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="tel"
                                    name="cvc"
                                    className="form-control"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>
                        <input type="hidden" name="issuer" value={issuer}/>
                        <div className="col-lg-6 offset-3 form-actions mt-2">
                            <button className="btn btn-primary btn-block">PAY
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}