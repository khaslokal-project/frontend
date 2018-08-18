import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class Footers extends React.Component{
    render(){
        return(
            <div>
                <Container className="contFooters">
                    <Row>
                        <Col>
                            <center>
                                <div className="iconButton ">
                                    <Button outline size="md"><img className="mx-auto " src={require('../assetImage/logo/store.png')} alt="store"/> AYO JUALAN</Button>
                                </div>

                                <p> 
                                    <a className=" text-dark" href="">Makanan Khas, </a>
                                    <a className=" text-dark" href="">Minuman Khas, </a>
                                    <a className=" text-dark" href="">Oleh-Oleh</a>
                                </p>

                                <div className="iconFooter d-inline">
                                    <a href="" target="_blank" rel="noopener norefferer">
                                        <img src={require('../assetImage/logo/facebook.png')} alt="fb"/>
                                    </a>
                                </div>

                                <div className="iconFooter d-inline">
                                    <a href="" target="_blank" rel="noopener norefferer">
                                        <img src={require('../assetImage/logo/instagram.png')} alt="insta"/>
                                    </a>
                                </div>

                                <div className="iconFooter d-inline">
                                    <a href="" target="_blank" rel="noopener norefferer">
                                        <img src={require('../assetImage/logo/line.png')} alt="line"/>
                                    </a>
                                </div>
                            </center>
                        </Col>
                    </Row>
                </Container> 
            </div>
        );
    }
}