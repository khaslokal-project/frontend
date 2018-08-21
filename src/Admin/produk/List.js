import React from 'react';
import axios from 'axios'; 

import {Table, Button} from 'reactstrap';

import Update from './Update';
import Delete from './Delete';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModule: '',
            data:[],
            idUpdate: null,
            itemDelete: {}
        };
        this.showUpdate = this.showUpdate.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render(){
        return( 
            <div >
                <Table>
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Kategori</th>
                            <th>Name</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Merek</th>
                            <th>Keterangan</th>
                            <th>Tipe</th>
                            <th>Gambar</th>
                            <th>Penilaian</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.idseller}</td>
                                        <td>{item.idcategory}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.description}</td>
                                        <td>{item.type}</td>
                                        <td>{item.image}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.review}</td>
                                        <td> 
                                            <Button color="warning" onClick={
                                                () => {
                                                    this.showUpdate(item.id);
                                                }}
                                            >Edit</Button>
                                            <Button color="danger" 
                                                onClick={() => {
                                                    this.showDelete(item);
                                                }}
                                            >Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                { (this.state.showModule === 'update') && <Update modal={this.state.modal} closeModal={this.closeModal} fetchData={this.fetchData} id={this.state.idUpdate}/> }
                { (this.state.showModule === 'delete') && <Delete modal={this.state.modal} closeModal={this.closeModal} fetchData={this.fetchData} data={this.state.itemDeleted}/> }
            </div>
        );
    }

    componentDidMount(){
        this.fetchData();
    }

    showUpdate(id){
        this.setState({
            showModule: 'update',
            modal: true,
            idUpdate: id
        });
    }

    showDelete(item){
        this.setState({
            showModule: 'delete',
            modal: true,
            itemDeleted: item
        });
    }

    fetchData(){
        axios.get('http://192.168.10.40:8080/products/')
            .then( ({ data }) => {
                this.setState({
                    data: data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }

}

export default List;