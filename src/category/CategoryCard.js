import React from 'react';
import { Row, Col} from 'reactstrap';
import CategoryAllFind from './CategoryAllFind';
import Makanan from './../assetImage/category/makanan.png';
import Minuman from './../assetImage/category/minuman.png';
import Oleholeh from './../assetImage/category/oleholeh.png';
import Jasa from './../assetImage/category/jasa.png';
import Kerajinan from './../assetImage/category/kerajinan.png';
import Izinukm from './../assetImage/category/izinukm.png';



export default class CategoryCard extends React.Component {
    render() {
        return (
            <div className="divTable" >
                <ul>
                    <li className="innerTable">
                        <a className="aTable text-dark" href="">
                            <div>
                                <Row className="align-items-center">
                                    <Col>
                                        <img src={Makanan} width="32px" height="32px" alt="makanan"></img>
                                        <span style={{padding: '10px 15px 10px 20px'}}>Makanan</span>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </li>

                    <li className="innerTable">
                        <a className="aTable text-dark" href="">
                            <div>
                                <Row className="align-items-center">
                                    <Col>
                                        <img src={Minuman} width="32px" height="32px" alt="minuman" ></img>
                                        <span style={{padding: '10px 15px 10px 20px'}}>Minuman</span>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </li>

                    <li className="innerTable">
                        <a className="aTable text-dark" href="">
                            <div>
                                <Row className="align-items-center">     
                                    <Col>
                                        <img src={Oleholeh} width="32px" height="32px" alt="oleh-oleh"></img>
                                        <span style={{padding: '10px 15px 10px 20px'}}>Oleh-Oleh Batam</span>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </li>

                    <li className="innerTable">
                        <a className="aTable text-dark" href="">
                            <div>
                                <Row className="align-items-center">                                       
                                    <Col>
                                        <img src={Kerajinan} width="32px" height="32px" alt="kerajinan"></img>
                                        <span style={{padding: '10px 20px 10px 20px'}}>Kerajinan</span>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </li>

                    <li className="innerTable">
                        <a className="aTable text-dark" href="">
                            <div>
                                <Row className="align-items-center">
                                    <Col>
                                        <img src={Jasa} width="32px" height="32px" alt="jasa"></img>
                                        <span style={{padding: '10px 20px 10px 20px'}}>Jasa Desain</span>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </li>
                    
                    <li className="innerTable">
                        <a className="aTable text-dark" href="">
                            <div>
                                <Row className="align-items-center">
                                    <Col>
                                        <img src={Izinukm} width="32px" height="32px" alt="izinukm"></img>
                                        <span style={{padding: '10px 20px 10px 20px'}}>Perizinan UKM</span>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </li>
                    <CategoryAllFind/>  
                </ul>
                              
            </div>
        );
    }
}