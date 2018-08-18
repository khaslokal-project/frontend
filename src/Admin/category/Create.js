import React from 'react';
import axios from 'axios';
// const dotenv = require('dotenv');

import {Form, FormGroup, Input, Label, Button, Col
    ,Modal, ModalBody, ModalHeader} from 'reactstrap';


class Create extends React.Component {
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

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('https://blue-parrot-39.localtunnel.me/productcategory/add', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return(
            <div >
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Tambah Category</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="nameCategory" sm={2}>Nama</Label>
                                <Col sm={10}>
                                    <Input type="text" name="nameCategory" id="nameCategory" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button>Tambah</Button>
                                    <Button type="button" onClick={this.close}>Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
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

export default Create;