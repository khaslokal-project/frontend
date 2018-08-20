import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col,
    Modal, ModalBody, ModalHeader} from 'reactstrap';

class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idseller: '',
            idcategory: '',
            name: '',
            price: '',
            stock: '',
            brand: '',
            description: '',
            type: '',
            image: '',
            rating: '',
            review: '',
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
                    <ModalHeader>Tambah Produk</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="idseller" sm={2}>Id Seller</Label>
                                <Col sm={10}>
                                    <Input type="select" name="idseller" id="idseller" onChange={this.handleChange }>
                                        <option value="1">Balkis</option>
                                        <option value="2">Wondo</option>
                                        <option value="3">Welly</option>
                                        <option value="4">Jamale</option>
                                        <option value="5">Indra</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="idcategory" sm={2}>Id Kategori</Label>
                                <Col sm={10}>
                                    <Input type="select" name="idcategory" id="idcategory" onChange={this.handleChange }>
                                        <option value="1">Makanan</option>
                                        <option value="2">Minuman</option>
                                        <option value="3">Jasa</option>
                                        <option value="4">Kerajinan</option>
                                        <option value="5">Tanaman</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="name" sm={2}>Nama</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" id="name" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2}>Harga</Label>
                                <Col sm={10}>
                                    <Input type="text" name="price" id="price" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="stock" sm={2}>Stok</Label>
                                <Col sm={10}>
                                    <Input type="text" name="stock" id="stock" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="brand" sm={2}>Merek</Label>
                                <Col sm={10}>
                                    <Input type="text" name="brand" id="brand" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={2}>Keterangan</Label>
                                <Col sm={10}>
                                    <Input type="text" name="description" id="description" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="type" sm={2}>Tipe</Label>
                                <Col sm={10}>
                                    <Input type="text" name="type" id="type" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="image" sm={2}>Gambar</Label>
                                <Col sm={10}>
                                    <Input type="text" name="image" id="image" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="rating" sm={2}>Penilaian</Label>
                                <Col sm={10}>
                                    <Input type="text" name="rating" id="rating" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="review" sm={2}>Ulasan</Label>
                                <Col sm={10}>
                                    <Input type="text" name="review" id="review" onChange={this.handleChange }/>
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

    componentDidMount(){
        
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('https://192.168.10.40:3000/products/', this.state)
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