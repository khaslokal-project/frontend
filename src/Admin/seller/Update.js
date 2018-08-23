import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col,
    Modal, ModalBody, ModalHeader} from 'reactstrap';

class Update extends React.Component {
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
            <div>
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Ubah Seller</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="username" sm={2}>Username</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="username"
                                        value={this.state.username}
                                        id="username"
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="firstname" sm={2}>Nama Depan</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text"
                                        name="firstname"
                                        value={this.state.firstname}
                                        id="firstname" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" sm={2}>Nama Belakang</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="lastname" 
                                        value={this.state.lastname}
                                        id="lastname" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="address" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="address" 
                                        value={this.state.address}
                                        id="address" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input
                                        type="text" 
                                        name="password" 
                                        value={this.state.password}
                                        id="password" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="email" 
                                        value={this.state.email}
                                        id="email" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="phone"
                                        value={this.state.phone}
                                        id="phone"
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button>Ubah</Button>
                                    <Button onClick={this.close}>Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/sellers/${this.props.id}`)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    address: res.data.address,
                    password: res.data.password,
                    email: res.data.email,
                    phone: res.data.phone
                });
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
        axios.put(`${process.env.REACT_APP_API_URL}/sellers/${this.props.id}`, this.state)
            .then(res => {
                this.close();
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

export default Update;