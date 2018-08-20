import React from 'react';
import BarTopProduct from './BarTopProduct';

import Tileorder from '../component/Tileorder';
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText } from 'reactstrap';

class CardProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data :  [],
            idTileorder : null
        };
        
        this.showTileorder = this.showTileorder.bind(this);
        this.showModal = this.closeModal.bind(this);
    }

    render() {
    
        return (
            <div>
                <Container>
                    <Row>
                        <BarTopProduct />
                    </Row>
                    <Row>
                        <Col>
                            {
                                this.state.data.map(item => {
                                    return(
                                        <Card className="cardCard" key={item.id}>
                                            <CardImg top width="219px" height="273.75px" src={item.image} alt="Card image cap" />
                                            <div>
                                                <Container>
                                                    <CardTitle className="cardTitles">{item.name}</CardTitle>
                                                    <div ><del className="text-muted">Rp. 68.000</del>
                                                        <span className=" cardPrice"> {item.price}</span></div>
                                                </Container>
                                                <Container className="contCard">
                                                    <Row className="inline align-items-center">
                                                        <Col><CardText className="cardTexts">{item.brand}</CardText></Col>
                                                        <Col xs="3"><Button className="cardButton" size="sm" color="danger" onClick={
                                                            () => {
                                                                this.showTileorder(item.id);
                                                            }}
                                                        >Beli</Button></Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </Card>
                                    );
                                })
                            }
                        </Col>
                    </Row>

                </Container>
                {
                    (this.showModal === 'Tileorder') 
                    && <Tileorder modal={this.state.modal} closeModal={this.closeModal} data={this.fetchData} id={this.state.idTileorder} /> 
                }
            </div>
        );
    }
    componentDidMount() {
        this.fetchData();
    }

    showTileorder(id) {
        this.setState({
            showModule: 'Tileorder',
            modal: true,
            idTileorder: id
        });
    }

    fetchData() {
        const API_URL = 'http://192.168.10.40:3000/products/';
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    this.showTileorder(item.id);
                });
                this.setState({
                    data: data
                });
            })
            .catch(err => console.log(err));
    }
    closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }

}

export default CardProduct;