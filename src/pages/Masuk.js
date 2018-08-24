import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { Button, Form, Input, Card, CardTitle, Row, Col } from 'reactstrap';
import axiosInstance from './../component/AxiosInstance';
import { reactLocalStorage } from 'reactjs-localstorage';
import AppContext from './../component/AppContext';

class Masuk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            error: null,
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
        axiosInstance
            .post(`/users/login`, this.state)
            .then( ( { data } ) => {
                reactLocalStorage.set('token',data.token);
                this.setState({
                    islogin: true,
                    dataLogin: data
                })
                console.log(data)
                
            })
            .catch( error => {
                this.setState({ error: ( error && error.response && error.response.data && error.response.data.message ) })
            });
    }
    render() {
        let view  = undefined;
        let viewButton = (
            <div>
                <AppContext.Consumer>
                    {(context) => {
                        let login = () => {
                            axiosInstance
                                .post(`/users/login`, this.state)
                                .then( ( { data } ) => {
                                    reactLocalStorage.set('token',data.token);
                                    context.handlers.signin(data)
                                    this.setState({
                                        islogin: true
                                    })
                                })
                                .catch( error => {
                                    this.setState({ error: ( error && error.response && error.response.data && error.response.data.message ) })
                                });
                        }
                        return (
                            <Button color="warning" type="button" onClick={login}> Login </Button>
                        )
                    }}
                </AppContext.Consumer>
            </div>
        )              

        if (this.state.islogin){
            view = (
                <Redirect to="/"/>
            )
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
                                    <Input
                                        onChange={this.changeHandler}
                                        type="username"
                                        name="username"
                                        id="username"
                                        placeholder="Username anda"
                                    />{' '}
                                    <Input
                                        onChange={this.changeHandler}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Kata Sandi"
                                    />{' '}
                                        { viewButton }              
                                                
                                      

                                </Form>
                                <a href="/pages/Daftar" className="CardText"> Belum memiliki akun? </a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
        return (<div>{ view }</div>)
    }
}

export default Masuk;