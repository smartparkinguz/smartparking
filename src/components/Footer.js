import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex row1">
                        <div className="col-lg-8 d-flex">
                            <div>
                                <img className="logo" src="/images/TV-sony.jpg" alt="TV-sony"/>
                            </div>
                            <ul className="text">
                                <p>Smart Parking</p>
                                <li className="footer-text d-flex">
                                    <div className="text1">Tel:</div>
                                    <div className="text2">
                                        <span>+998936473997</span><br/>
                                        <span>+998936473997</span>
                                    </div>
                                </li>
                                <li className="footer-text d-flex">
                                    <div className="text1">Manzil:</div>
                                    <div className="text2"><p>Qashqadaryo viloyati Qarshi shahri</p></div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer