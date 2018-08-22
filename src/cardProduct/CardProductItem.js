import React from 'react';
import { Container, Row, Col, Card, Button, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

import AppContext from './../component/AppContext';

class CardProductItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.toggle = this.toggle.bind(this);
        this.beli = this.beli.bind(this);
    }
    render() {
        let { item } = this.props;

        return(
            <Card className="cardCard  mr-2 ml-2 mb-3" key={item.id}>
                <CardImg top width="219px" height="273.75px" src={item.image} alt="Card image cap" />
                <div>
                    <Container>
                        <CardTitle className="cardTitles">{item.name}</CardTitle>
                        <div ><span className=" cardPrice"> {item.price} 
                        </span></div>
                    </Container>
                    <Container className="contCard">
                        <Row className="inline align-items-center">
                            <Col><CardText className="cardTexts">{item.brand}</CardText></Col>
                            <Col xs="3">
                            {/* <Button className="cardButton" size="sm" color="danger" onClick={this.beli}>Beli</Button> */}
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

    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }
    beli(){
        console.log('terbeli');
        <AppContext.Consumer>
            {(context) => {
                debugger;
                console.log('helo')
            }}
        </AppContext.Consumer>
    }

    closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }
}

export default CardProductItem;