import React from 'react';
import { Container, Row, Col, Card, Button, CardImg, CardText, CardTitle } from 'reactstrap';

import AppContext from './../component/AppContext';

class CardProductItem extends React.Component {
    render() {
        let { item } = this.props;

        return(
            <Card className="cardCard  mr-2 ml-2 mb-3" key={item.id}>
                <CardImg top width="219px" height="273.75px" src={item.image} alt="Card image cap" />
                <div>
                    <Container>
                        <CardTitle className="cardTitles">{item.name}</CardTitle>
                        <div ><span  className=" cardPrice"> {item.price} 
                        </span></div>
                    </Container>
                    <Container className="contCard">
                        <Row className="inline align-items-center">
                            <Col><CardText className="cardTexts">{item.brand}</CardText></Col>
                            <Col xs="3">
                                <AppContext.Consumer>
                                    {(context) => {
                                        return(
                                            <Button className="cardButton" size="sm" color="danger" onClick={() => {
                                                context.handlers.addOrderItem(item, 1)
                                            }}>Beli</Button>
                                        )
                                    }}
                                </AppContext.Consumer>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Card>
        );
    }
}

export default CardProductItem;