<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {List, Divider, Typography, Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';


const styles = theme => ({
    root: {
        flexGrow: '1',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    center :{
        textAlign: 'center',
        display: 'inline-block',
    },
    menuButton:{
        marginTop: '10px',
        marginLeft:  '-25%',
        marginBottom: '10px',
=======
import React, { Component } from 'react';
import { Button, Form, Input, Card, CardTitle, Row, Col } from 'reactstrap';
import axios from 'axios';


class Masuk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            error: null,
            valerrors: null
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
            .post('http://192.168.10.40:8080/users/login', this.state)
            .then(res => {
                if (res.data.error) {
                    return this.setState({ error: res.data.message });
                }
                if (res.data.errors) {
                    return this.setState({ valerrors: res.data.errors });
                }
                return (window.location = '/login');
            });
    }
    render() {
        return (
            <div>
                <Row>
                    <Col sm="4" className="justify-content-md-center Card">
                        <Card className="text-center" body outline color="info">
                            <CardTitle className="CardText">Login</CardTitle>
                            {this.state.error && <p>{this.state.error}</p>}
                            <Form onSubmit={this.submitHandler}>
          
                                {this.state.valerrors &&
              this.state.valerrors.username && (
                                        <p>{this.state.valerrors.username.msg}</p>
                                    )}
                                <Input
                                    onChange={this.changeHandler}
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                />{' '}
                                
                                {this.state.valerrors &&
              this.state.valerrors.password && (
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
                            <a href="/#/Daftar" className="CardText"> Belum memiliki akun? </a>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
>>>>>>> ca5b5da1461ddd679f2c0c8ee8950f30feea2307
    }
});


function SimpleList (props) {
    const { classes } = props;
    return (
        <div >
            <List component="nav" className={classes.center} style={{width: '35%'}}>
                <ListItem className={classes.center}>
                    <Typography variant="subheading">
                            Masuk Khas Local 
                    </Typography>
                </ListItem>
                <ListItem className={classes.center}>
                    <Typography variant="caption"  style={{textAlign: 'center'}} >
                        Ceki-ceki poin Sale Stock <br />
                        Pake kupon dan promo member <br />
                        Ceki-ceki pesanan sebelumnya <br />
                        Menyimpan produk kesukaan dulu <br />
                        Bisa cek riwayat transaksi sebelumnya
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem className={classes.center}>
                    <Typography variant="subheading" >
                        Dengan Media Sosial                       
                    </Typography>
                </ListItem>
                <ListItem className={classes.center}>
                    <Button style={{width: '80%'}} variant="contained" color="primary" >
                        Facebook
                    </Button>
                </ListItem>
                <Divider />
                <ListItem className={classes.center} >
                    <Typography variant="subheading" >
                        Dengan No.HandPhone
                    </Typography>
                </ListItem>
                <ListItem>
                    <Form>
                        <FormGroup>
                            <Input invalid placeholder="Username"/>
                        </FormGroup>
                        <FormGroup>
                            <Input invalid  placeholder="Password"/>
                        </FormGroup>
                    </Form>
                </ListItem>
                <ListItem className={classes.center}>
                    <Button style={{width: '100%'}} variant="contained" color="secondary" >
          Daftar Sekarang
                    </Button>
                </ListItem>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
