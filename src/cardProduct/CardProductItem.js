import React from 'react';
import { Container, Row, Col, Card, Button, CardImg, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

const AppContext = React.createContext();

class CardProductItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    render() {
        let { item } = this.props;

        return(
            <Card className="cardCard  mr-2 ml-2 mb-3" key={item.id}>
                <CardImg top width="219px" height="273.75px" src={item.image} alt="Card image cap" />
                <div>
                    <Container>
                        <CardTitle className="cardTitles">{item.name}</CardTitle>
                        <div ><span className=" cardPrice"> {item.price} yeah 
                            <AppContext.Consumer>
                                {(context) => context}
                            </AppContext.Consumer>
                        </span></div>
                    </Container>
                    <Container className="contCard">
                        <Row className="inline align-items-center">
                            <Col><CardText className="cardTexts">{item.brand}</CardText></Col>
                            <Col xs="3">
                                <Button className="cardButton" size="sm" color="danger" onClick={this.toggle}
                                >Beli</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                    Coba ya

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
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

    closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }
}

export default CardProductItem;