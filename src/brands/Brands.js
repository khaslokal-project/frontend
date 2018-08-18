import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Mamma from './../assetImage/branded/mamma.png';
import Impactbyte from './../assetImage/branded/impactbyte.png';
import Kekpisangvilla from './../assetImage/branded/kekpisangvilla.png';

export default class Brands extends React.Component {
    render() {
        return (
            <Container className="contBrand">
                <p>Popular Brand</p>
                <Row className="rowBrands inline">
                    <Col xs="6" sm="4" ><img src={Mamma} alt="mamma"/></Col>
                    <Col xs="6" sm="4" ><img src={Impactbyte} alt="impact"/></Col>
                    <Col sm="4" ><img src={Kekpisangvilla} alt="kek"/></Col>
                </Row>
            </Container>
        );
    }
}