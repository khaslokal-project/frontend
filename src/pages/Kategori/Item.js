import React from 'react';
import axios from 'axios';
import {Row, Col, Card, CardImg, Container, CardTitle, CardText, Button} from 'reactstrap';

class Item extends React.Component {
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
        console.log(this.props)
        axios.get(`${process.env.REACT_APP_API_URL}/productcategory?name=${this.props.match.params.name}`)
            .then( ({ data }) => {
                this.setState({
                    data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

}

export default Item;



