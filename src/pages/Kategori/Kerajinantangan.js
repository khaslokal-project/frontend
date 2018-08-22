import React from 'react';
import axios from 'axios';
import {Row, Col, Card, CardImg, Container, CardTitle, CardText, Button} from 'reactstrap';

class Kerajinan extends React.Component {
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
                </Row>
            </div>
        );
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        axios.get(`${process.env.REACT_APP_API_URL}/products/category/4`)
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

export default Kerajinan;



