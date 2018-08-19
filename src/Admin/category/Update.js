import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col
    ,Modal, ModalBody, ModalHeader} from 'reactstrap';

class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: props.modal,
            nameCategory: ''
        };
        // const env = dotenv.config().parsed;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleClosed = this.handleClosed.bind(this);        
        this.close = this.close.bind(this);
    }
    
    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Ubah Category</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="nameCategory" sm={2}>Nama</Label>
                                <Col sm={10}>
                                    <Input
                                        type="text"
                                        name="nameCategory"
                                        value={this.state.nameCategory}
                                        id="nameCategory"
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button>Ubah</Button>
                                    <Button type="button" onClick={this.close}>Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

    componentDidMount(){
        axios.get(`https://wicked-cow-10.localtunnel.me/productcategory/${this.props.id}`)
            .then(res => {
                this.setState({
                    nameCategory: res.data.nameCategory
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
        axios.put(`https://wicked-cow-10.localtunnel.me/productcategory/${this.props.id}`, this.state)
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