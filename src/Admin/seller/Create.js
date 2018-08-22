import React from 'react';
import axios from 'axios';

import {Form, FormGroup, Input, Label, Button, Col, 
    Modal, ModalBody, ModalHeader} from 'reactstrap';

class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            firstname:'',
            lastname:'',
            address:'',
            password:'',
            email:'',
            phone: '',
            modal: props.modal
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleClosed = this.handleClosed.bind(this);
        this.close = this.close.bind(this);
    }


    render(){
        return(
            <div >
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Tambah Seller</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="username" sm={2}>Username</Label>
                                <Col sm={10}>
                                    <Input type="text" name="username" id="username" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="firstname" sm={2}>Nama Depan</Label>
                                <Col sm={10}>
                                    <Input type="text" name="firstname" id="firstname" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" sm={2}>Nama Belakang</Label>
                                <Col sm={10}>
                                    <Input type="text" name="lastname" id="lastname" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="address" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input type="text" name="address" id="address" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="text" name="password" id="password" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="text" name="email" id="email" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="text" name="phone" id="password" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button>Tambah</Button>
                                    <Button onClick={this.close}>Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('http://192.168.10.40:8080/sellers/register', this.state)
            .then(res => {
                this.close();
                console.log(this.props);
                this.props.fetchData();
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

export default Create;