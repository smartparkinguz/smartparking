import React, {Component} from 'react';

class SectionTwo extends Component {
    render() {
        return (
            <div className="container">
                <div className={'row  my-4 d-block'}>
                    <div className={'bg-primary py-3 px-3 col-md-4 rounded text-center text-white offset-4 my-4'}><h4>Biz bilan
                        yanada tezroq!</h4>
                    </div>
                    <span className={'hompage_hint'}></span>
                    <div><img src={'images/img_1.png'} className={'img-fluid offset-3 my-3'}/></div>
                    <div className={'my-3 d-flex justify-content-center'}>
                        <ul className={'list-unstyled'}>
                            <li className={'d-flex'}><h2
                                className={'bg-primary mx-1  text-white py-1 px-3 rounded'}>1</h2><h2
                                className={'bg-primary text-white px-3 rounded py-1'}>2</h2></li>
                            <li className={'text-center'}><h4>Viloyatlar</h4></li>
                        </ul>
                        <ul className={'list-unstyled mx-5'}>
                            <li className={'d-flex'}><h2
                                className={'bg-primary mx-1  text-white py-1 px-3 rounded'}>8</h2><h2
                                className={'bg-primary text-white px-3 rounded py-1'}>0</h2></li>
                            <li className={'text-center'}><h4>Tumanlar</h4></li>
                        </ul>
                        <ul className={'list-unstyled'}>
                            <li className={'d-flex'}><h2
                                className={'bg-primary mx-1  text-white py-1 px-3 rounded'}>1</h2><h2
                                className={'bg-primary text-white px-3 rounded py-1'}>2</h2><h2
                                className={'bg-primary mx-1  text-white py-1 px-3 rounded'}>1</h2><h2
                                className={'bg-primary mr-1  text-white py-1 px-3 rounded'}>1</h2>
                                <h2 className={'bg-primary   text-white py-1 px-3 rounded'}>{50}</h2></li>
                            <li className={'text-center'}><h4>Bo'sh joylar soni</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionTwo;