import React from 'react';
import axios from 'axios';

import {Form, FormGroup, Input, Label, Button, Col
    ,Modal, ModalBody, ModalHeader} from 'reactstrap';


class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameCategory: '',
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

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/productcategory/`, this.state)
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