import React from 'react';
import {Row, Col, Card, CardImg, Container, CardTitle, CardText, Button} from 'reactstrap';

import Cake from '../../assetImage/product/sc00002.jpg';
import Kripik from '../../assetImage/product/sc00001.jpg';

class Makanan extends React.Component {
    render() {
        return (
            <div className="apps">
                <Row>
                    <Col>
                        <Card className="cardCard">
                            <CardImg top width="219px" height="273.75px" src={Cake} alt="Card image cap" />
                            <div>
                                <Container>
                                    <CardTitle className="cardTitles">Cake Pisang</CardTitle>
                                    <div ><del className="text-muted">Rp. 68.000</del>
                                        <span className=" cardPrice"> Rp. 65.000</span></div>
                                </Container>
                                <Container className="contCard">
                                    <Row className="inline align-items-center">
                                        <Col><CardText className="cardTexts">Villa Group Batam</CardText></Col>
                                        <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardCard">
                            <CardImg top width="219px" height="273.75px" src={Kripik} alt="Card image cap" />
                            <div>
                                <Container>
                                    <CardTitle className="cardTitles">Keripik Pisang</CardTitle>
                                    <div ><del className="text-muted">Rp. 20.000</del>
                                        <span className="cardPrice"> Rp. 18.000</span></div>
                                </Container>
                                <Container className="contCard"> 
                                    <Row className="inline align-items-center">
                                        <Col><CardText className="cardTexts">Narata Batam</CardText></Col>
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



