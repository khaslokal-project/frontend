import React from 'react';
import BarTopProduct from './BarTopProduct';
import axios from 'axios';

import Tileorder from '../component/Tileorder';
import {Container, Row, Col, Card, Button, CardImg, CardTitle, CardText} from 'reactstrap';
   
class CardProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            idTileorder: null
        };

        this.showTileorder = this.showTileorder.bind(this);
        this.showModal = this.closeModal.bind(this);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <BarTopProduct/>
                    </Row>
                    <Row>
                        <Col>
                            {
                                this.state.data.map(item => {
                                    return (
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

                        
                        {/* <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/cr00001.jpg')} alt="Card image cap" />
                                <div>
                                    <Container>
                                        <CardTitle className="cardTitles">Tempat Tisu</CardTitle>
                                        <div><del className="text-muted">Rp. 150.000</del>
                                            <span > Rp. 130.000</span></div>       
                                    </Container>
                                    <Container className="contCard">   
                                        <Row className="inline align-items-center">
                                            <Col><CardText className="cardTexts">Rumah Kreatif Bunda Elviana Tanjung Pinang</CardText></Col>
                                            <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Card>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00001.jpg')} alt="Card image cap" />
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
    
                        <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sd00001.jpg')} alt="Card image cap" />
                                <div>
                                    <Container>
                                        <CardTitle className="cardTitles">Teh Tarik Botol</CardTitle>
                                        <div><del className="text-muted">Rp. 10.500</del>
                                            <span className="cardPrice"> Rp. 10.000</span></div>    
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
    
                    <Row>
                        <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/fd00001.jpg')} alt="Card image cap" />
                                <div>
                                    <Container>
                                        <CardTitle className="cardTitles">Bakso</CardTitle>
                                        <div><del className="text-muted">Rp. 12.000</del>
                                            <span className="cardPrice"> Rp. 10.000</span></div>
                                    </Container>
                                    <Container className="contCard">  
                                        <Row className="inline align-items-center">
                                            <Col><CardText className="cardTexts">Ki-Bakso Batam</CardText></Col>
                                            <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Card>
                        </Col>
    
                        <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00003.jpeg')} alt="Card image cap" />
                                <div>
                                    <Container>
                                        <CardTitle className="cardTitles">Keripik Gong-gong</CardTitle>
                                        <div><del className="text-muted">Rp. 16.000</del>
                                            <span className="cardPrice"> Rp. 15.000</span></div>
                                    </Container>
                                    <Container className="contCard">
                                        <Row className="inline align-items-center">
                                            <Col><CardText className="cardTexts">UKM - Fartiana</CardText></Col>
                                            <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Card>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00005.jpg')} alt="Card image cap" />
                                <div>
                                    <Container>
                                        <CardTitle className="cardTitles">Kerupuk Tulang Ikan</CardTitle>
                                        <div ><del className="text-muted">Rp. 15.500</del>
                                            <span className="cardPrice"> Rp. 15.000</span></div>
                                    </Container>
                                    <Container className="contCard">
                                        <Row className="inline align-items-center">
                                            <Col><CardText className="cardTexts">La-Rest</CardText></Col>
                                            <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Card>
                        </Col>
    
                        <Col>
                            <Card className="cardCard">
                                <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00004.jpg')} alt="Card image cap" />
                                <div>
                                    <Container>
                                        <CardTitle className="cardTitles">Keripik Singkong</CardTitle>
                                        <div> <del className="text-muted">Rp. 15.500</del>
                                            <span className="cardPrice"> Rp. 15.000</span></div> 
                                    </Container>
                                    <Container className="contCard">  
                                        <Row className="inline align-items-center">
                                            <Col><CardText className="cardTexts">Aruna Food Crispy</CardText></Col>
                                            <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Card>
                        </Col> */}
                    </Row>
    
                </Container>
                {(this.state.showModule == 'Tileorder') && <Tileorder modal={this.state.modal} closeModal={this.closeModal} fetchData={this.fetchData} id={this.state.idTileorder}/> }
            </div>
        );
    }

    componentDidMount(){
        this.fetchData();
    }

    showTileorder(id){
        this.setState({
            showModule: 'Tileorder',
            modal: true,
            idTileorder: id
        });
    }

    fetchData(){
        axios.get('http://192.168.10.40:3000/products/')
            .then( ({ data }) => {
                this.setState({
                    data: data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    closeModal(){
        this.setState({
            showModule: '',
            modal: false
        });
    }

}

export default CardProduct;