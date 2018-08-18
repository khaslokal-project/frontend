import React from 'react';
import {Form, FormGroup, Input, Label, Button, Col} from 'reactstrap';

class Update extends React.Component {
    render(){
        return(
            <div >
                <Label>Ubah Category</Label>
                <Form>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input type="text" name="username" id="username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="firstname" sm={2}>Nama Depan</Label>
                        <Col sm={10}>
                            <Input type="text" name="firstname" id="firstname" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="lastname" sm={2}>Nama Belakang</Label>
                        <Col sm={10}>
                            <Input type="text" name="lastname" id="lastname" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="address" sm={2}>Address</Label>
                        <Col sm={10}>
                            <Input type="text" name="address" id="address" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="text" name="password" id="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="text" name="email" id="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phone" sm={2}>Phone</Label>
                        <Col sm={10}>
                            <Input type="text" name="phone" id="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{size: 10, offset: 2 }}>
                            <Button>Ubah</Button>
                            <Button>Batal</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Update;