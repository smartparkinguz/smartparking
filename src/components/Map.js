import React, {Component} from 'react';

class Map extends Component {
    render() {
        return (
            <div className="map-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 maps">
                            <iframe
                                src="https://yandex.com/map-widget/v1/?um=constructor%3A0992c918f7ac209af014a8f07a7289e19333578f9c3aad0d507c77e4e6073ea1&amp;source=constructor"
                                width="100%" height="657" frameBorder="0"></iframe>
                        </div>
                        <div className="col-md-4 col-right">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Xalqlar do'stligi</h3>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <h4>Bo'sh o'rinlar soni:<span className="bg-primary n-text">5</span></h4>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="col-lg-6 box-left">
                                            <h3>1000 UZS</h3>
                                            <span className="m-text">1 soat</span>
                                        </div>
                                        <div className="col-lg-6 box-right">
                                          <h3><span className="icon people"></span> 26 <span className="minut">daqiqa</span></h3>
                                            <span className="m-text">manzilgacha</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Bron qilish</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3>Tashkent City</h3>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <h4>Bo'sh o'rinlar soni:<span className="bg-primary n-text">2</span></h4>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="col-lg-6 box-left">
                                            <h3>1000 UZS</h3>
                                            <span className="m-text">1 soat</span>
                                        </div>
                                        <div className="col-lg-6 box-right">
                                          <h3 ><span className="icon people"></span> 22 <span className="minut">daqiqa</span></h3>
                                            <span className="m-text">manzilgacha</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Bron qilish</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3>Chorsu bozori</h3>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <h4>Bo'sh o'rinlar soni:<span className="bg-primary n-text">5</span></h4>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="col-lg-6 box-left">
                                            <h3>1000 UZS</h3>
                                            <span className="m-text">1 soat</span>
                                        </div>
                                        <div className="col-lg-6 box-right">
                                          <h3><span className="icon people"></span> 16 <span className="minut">daqiqa</span></h3>
                                            <span className="m-text">manzilgacha</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Bron qilish</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3>Malika bozori</h3>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <h4>Bo'sh o'rinlar soni:<span className="bg-primary n-text">3</span></h4>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="col-lg-6 box-left">
                                            <h3>1000 UZS</h3>
                                            <span className="m-text">1 soat</span>
                                        </div>
                                        <div className="col-lg-6 box-right">
                                          <h3><span className="icon people"></span> 30 <span className="minut">daqiqa</span></h3>
                                            <span className="m-text">manzilgacha</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Bron qilish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                



            </div>
        );
    }
}

export default Map;