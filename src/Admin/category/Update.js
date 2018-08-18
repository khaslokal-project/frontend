import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col} from 'reactstrap';

class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameCategory: ''
        };
        // const env = dotenv.config().parsed;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('www.google.com/kategory/1')
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return(
            <div >
                <Label>Ubah Category</Label>
                <Form>
                    <FormGroup row>
                        <Label for="nameCategory" sm={2}>Nama</Label>
                        <Col sm={10}>
                            <Input type="text" name="nameCategory" id="nameCategory" />
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