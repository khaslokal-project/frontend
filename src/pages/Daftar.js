import React from 'react';
import { Col, Button, Form, FormGroup, Input, Container, Row } from 'reactstrap';
import axios from 'axios';

export default class Daftar extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username:'',
            firstname:'',
            lastname:'',
            password:'',
            email:'',
            phone:'',
            address:'',
            userdata: null,
            success: false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    submitHandler(e){
        e.preventDefault();
        axios
            .post('http://192.168.10.40:8080/users/register', this.state)
            .then(result=>{
                if(result.data.errors){
                    return this.setState(result.data);
                }
                return this.setState({
                    userdata: result.data,
                    errors : null,
                    success : true
                });
            });
    }
    
    render(){
        return (
            <div>
                <Container className='formdaftar' style={{width: '35%'}}>
                    
                    <h4>Gabung Jadi Member Yuk!</h4> 
                    <h5>Daftar Disini</h5>
                    <Row>   
                        <Col>
                            {this.state.success && <p>Registrasi anda berhasil</p>}
                            <Form onSubmit={this.submitHandler}>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Nama Pengguna"/>{' '}
                                    {this.state.errors && this.state.errors.username &&
                             (<p>{this.state.errors.username.msg}</p>)}
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Nama Depan"/>{' '}
                                    {this.state.errors && this.state.errors.firstname &&
                            (<p>{this.state.errors.firstname.msg}</p>)}
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="Nama Belakang"/>{' '}
                                    {this.state.errors && this.state.errors.lastname && 
                            (<p>{this.state.errors.lastname.msg}</p>)}
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Kata Sandi"/> {' '}
                                    {this.state.errors && this.state.errors.password &&
                            (<p>{this.state.errors.password.msg}</p>)}
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Alamat Email"/> {' '}
                                    {this.state.errors&& this.state.errors.email&&
                            (<p>{this.state.errors.email.msg}</p>)}
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Nomor Telepon"/> {' '}
                                    {this.state.errors&& this.state.errors.phone&&
                            (<p>{this.state.errors.phone.msg}</p>)}
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        onChange={this.changeHandler}
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Alamat Rumah"/> {' '}
                                    {this.state.errors&& this.state.errors.address&&
                            (<p>{this.state.errors.address.msg}</p>)}
                                </FormGroup>
                        
                    
                                <FormGroup check row>
                                    <Button style={{width: '100%'}} color="secondary" type="Submit" >
                      Daftar Sekarang
                                    </Button>
                                </FormGroup>
                                
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
