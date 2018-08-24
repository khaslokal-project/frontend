import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { Button, Form, Input, Card, CardTitle, Row, Col } from 'reactstrap';
import axios from 'axios';

class Masuk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            error: null,
            valerrors: null,
            islogin: false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
  
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler(e) {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_API_URL}/users/login`, this.state)
            .then(res => {
                if (res.data.error) {
                    return this.setState({ error: res.data.message });
                }
                if (res.data.errors) {
                    return this.setState({ valerrors: res.data.errors });
                }

                this.setState({
                    islogin: true
                })
            });
    }
    render() {
        let view  = undefined;
        if (this.state.islogin){
            view = (<Redirect to="/"/>)
        }
        else{
            view = (
                <div>
                    <Row>
                        <Col sm="4" className="justify-content-md-center Card">
                            <Card className="text-center" body outline color="info">
                                <CardTitle className="CardText">Login</CardTitle>
                                {this.state.error && <p>{this.state.error}</p>}
                                <Form onSubmit={this.submitHandler}>
            
                                    {this.state.valerrors && this.state.valerrors.username && (
                                        <p>{this.state.valerrors.username.msg}</p>
                                    )}
                                    <Input
                                        onChange={this.changeHandler}
                                        type="username"
                                        name="username"
                                        id="username"
                                        placeholder="Username anda"
                                    />{' '}
                                    
                                    {this.state.valerrors && this.state.valerrors.password && (
                                        <p>{this.state.valerrors.password.msg}</p>
                                    )}
                                    <Input
                                        onChange={this.changeHandler}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Kata Sandi"
                                    />{' '}
                                    
                                    <Button color="warning" type="submit"> Login </Button>
                                
                                </Form>
                                <a href="/pages/Daftar" className="CardText"> Belum memiliki akun? </a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
    
        return (<div>{ view }</div>)
        //return ( { this.state.isLogin } );
        //return ({ (this.state.islogin) ? (<Redirect to="/dashboard"/>) : loginView });
    }
}

export default Masuk;