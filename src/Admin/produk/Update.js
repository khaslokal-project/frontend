import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col, 
    Modal, ModalBody, ModalHeader } from 'reactstrap';

class Update extends React.Component {
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
            modal: props.modal,
            dataSeller: [],
            dataCategory: []
        };
    
        // const env = dotenv.config().parsed;
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    

        this.handleClosed = this.handleClosed.bind(this);        
        this.close = this.close.bind(this);
    }
    
    
    render(){
        return(
            <div >
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Ubah Category</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="idseller" sm={2}>Seller</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="select" 
                                        name="idseller" 
                                        value={this.state.idseller}
                                        id="idseller" 
                                        onChange={this.handleChange}/>
                                    {
                                        this.state.dataSeller.map(item => (<option key={item.id} value={item.id} >{item.username}</option>))
                                    }
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="idcategory" sm={2}>Kategori</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="select" 
                                        name="idcategory"
                                        value={this.state.idcategory} 
                                        id="idcategory"
                                        onChange={this.handleChange} />
                                    {
                                        this.state.dataCategory.map(item => (<option key={item.id} value={item.id}>{item.nameCategory}</option>))
                                    }
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="name" sm={2}>Nama</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="name" 
                                        value={this.state.name}
                                        id="name" 
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2}>Harga</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="price" 
                                        value={this.state.price}
                                        id="price" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="stock" sm={2}>Stok</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="stock" 
                                        value={this.state.stock}
                                        id="stock" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="brand" sm={2}>Merek</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="brand" 
                                        value={this.state.brand}
                                        id="brand" 
                                        onChane={this.state.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={2}>Keterangan</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="description" 
                                        value={this.state.description}
                                        id="description" 
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="image" sm={2}>Gambar</Label>
                                <Col sm={10}>
                                    <Input 
                                        type="text" 
                                        name="image" 
                                        value={this.state.image}
                                        id="image" 
                                        onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button>Ubah</Button>
                                    <Button type="button" onClick={this.close}> Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            
            </div>
        );
    }

   


    componentDidMount(){
        axios.get(`http://192.168.10.40:8080/products/${this.props.id}`)
            .then(res => {
                this.fetchDataSeller();
                this.fetchDataCategory();
                this.setState({
                    idseller: res.data.idseller,
                    idcategory: res.data.idcategory,
                    name: res.data.name,
                    price: res.data.price,
                    stock: res.data.stock,
                    brand: res.data.brand,
                    description: res.data.description,
                    type: res.data.type,
                    image: res.data.image,
                    rating: res.data.rating,
                    review: res.data.review

                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    fetchDataSeller(){
        axios.get('http://192.168.10.40:8080/sellers/')
            .then(({ data }) => {
                this.setState({
                    dataSeller: data
                });
            });
    }

    fetchDataCategory(){
        axios.get('http://192.168.10.40:8080/productcategory/')
            .then(({ data }) => {
                this.setState({
                    dataCategory: data
                });
            });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.put(`http://192.168.10.40:8080/products/${this.props.id}`, this.state)
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