import React from 'react';
import axios from 'axios';
import {Row, Col, Card, CardImg, Container, CardTitle, CardText, Button} from 'reactstrap';

// import Cake from '../../assetImage/product/sc00002.jpg';
// import Kripik from '../../assetImage/product/sc00001.jpg';

class Makanan extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }
    render() {
        return (
            <div className="apps">
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
                                                <div >
                                                    <span className=" cardPrice">{item.price}</span></div>
                                            </Container>
                                            <Container className="contCard">
                                                <Row className="inline align-items-center">
                                                    <Col><CardText className="cardTexts">{item.brand}</CardText></Col>
                                                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
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
                    </Col> */}
                </Row>
            </div>
        );
    }

    componentDidMount(){
        this.fetchData();
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

}

export default Makanan;



