import React from 'react';
import axios from 'axios';
// const dotenv = require('dotenv');

import {Form, FormGroup, Input, Label, Button, Col} from 'reactstrap';


class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameCategory: ''
        };
        // const env = dotenv.config().parsed;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        debugger // eslint-disable-line
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

    render(){
        return(
            <div >
                <Label>Tambah Category</Label>
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
                            <Button type="button">Batal</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Create;