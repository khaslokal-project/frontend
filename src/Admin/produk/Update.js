import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col} from 'reactstrap';

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
            review: ''
        };
    
        // const env = dotenv.config().parsed;
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('www.google.com/kategory', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
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
                <Label>Ubah Produk</Label>
                <Form>
                    <FormGroup row>
                        <Label for="idseller" sm={2}>Id Seller</Label>
                        <Col sm={10}>
                            <Input type="text" name="idseller" id="idseller" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="idcategory" sm={2}>Id Kategori</Label>
                        <Col sm={10}>
                            <Input type="text" name="idcategory" id="idcategory" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={2}>Nama</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" id="name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="price" sm={2}>Harga</Label>
                        <Col sm={10}>
                            <Input type="text" name="price" id="price" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="stock" sm={2}>Stok</Label>
                        <Col sm={10}>
                            <Input type="text" name="stock" id="stock" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="brand" sm={2}>Merek</Label>
                        <Col sm={10}>
                            <Input type="text" name="brand" id="brand" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" sm={2}>Keterangan</Label>
                        <Col sm={10}>
                            <Input type="text" name="description" id="description" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="type" sm={2}>Tipe</Label>
                        <Col sm={10}>
                            <Input type="text" name="type" id="type" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image" sm={2}>Gambar</Label>
                        <Col sm={10}>
                            <Input type="text" name="image" id="image" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="rating" sm={2}>Penilaian</Label>
                        <Col sm={10}>
                            <Input type="text" name="rating" id="rating" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="review" sm={2}>Ulasan</Label>
                        <Col sm={10}>
                            <Input type="text" name="review" id="review" />
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