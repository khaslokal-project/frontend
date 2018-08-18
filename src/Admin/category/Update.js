import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col
    ,Modal, ModalBody, ModalHeader} from 'reactstrap';

class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameCategory: '',
            modal: props.modal
        };
        // const env = dotenv.config().parsed;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleClosed = this.handleClosed.bind(this);        
        this.close = this.close.bind(this);
    }
    
    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Ubah Category</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="nameCategory" sm={2}>Nama</Label>
                                <Col sm={10}>
                                    <Input type="text" name="nameCategory" id="nameCategory" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button>Ubah</Button>
                                    <Button type="button" onClick={this.close}>Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

    componentDidMount(){
        axios.get('www.google.com/kategory/1')
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('www.google.com/kategory', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleClosed() {
        this.props.closeModal();
    }

    close() {
        this.setState({
            modal: false
        });
    }
}

export default Update;