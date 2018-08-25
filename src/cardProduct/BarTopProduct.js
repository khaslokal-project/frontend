import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class BarTopProduct extends React.Component {
    render() {
        return (
            <Container className="divTopProduct">
                <Row className="inline">
                    <Col className="pTopPro "> <span className="align-items-center"> Top produk bulan ini </span></Col>
                    <Col className="aTopPro "> <a className=" text-white align-items-center" href="">MORE > </a></Col>
                </Row>
            </Container>

        );
    }

}