import React from 'react';
import {Row, Col, Card, CardImg, Container, CardTitle, CardText, Button} from 'reactstrap';

import Teh from '../../assetImage/product/sd00001.jpg';
import Sirup from '../../assetImage/product/sd00003.JPG';

class Makanan extends React.Component {
    render() {
        return (
            <div className="apps">
                <Row>
                    <Col>
                        <Card className="cardCard">
                            <CardImg top width="219px" height="273.75px" src={Teh} alt="Card image cap" />
                            <div>
                                <Container>
                                    <CardTitle className="cardTitles">Teh Tarik Botol</CardTitle>
                                    <div >
                                        <del className="text-muted">Rp. 10.500</del>
                                        <span className=" cardPrice"> Rp. 10.000</span></div>
                                </Container>
                                <Container className="contCard">
                                    <Row className="inline align-items-center">
                                        <Col><CardText className="cardTexts">Meltea Batam</CardText></Col>
                                        <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardCard">
                            <CardImg top width="219px" height="273.75px" src={Sirup} alt="Card image cap" />
                            <div>
                                <Container>
                                    <CardTitle className="cardTitles">Jus Kedondong</CardTitle>
                                    <div ><del className="text-muted">Rp. 10.000</del>
                                        <span className="cardPrice"> Rp. 12.000</span></div>
                                </Container>
                                <Container className="contCard"> 
                                    <Row className="inline align-items-center">
                                        <Col><CardText className="cardTexts">Meltea Batam</CardText></Col>
                                        <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Makanan;



