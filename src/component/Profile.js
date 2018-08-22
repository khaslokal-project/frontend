import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            profiles:[]
            
        };
    }

    componentDidMount(){
        axios
            .get(`${process.env.REACT_APP_API_URL}/users`)
            .then(res => {
                const profiles = res.data.map(profiles =>
                    <div key={profiles._id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-text">{profiles.username}</h3>
                                <hr className="my-2" />
                                <h5 className="card-text">{profiles.phone}</h5>
                            </div>
                        </div>
                    </div>);

                this.setState({profiles});
                // console.log('state', this.state.profiles);
            });
    }

    render(){
        return(
            <div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {this.state.profiles}
                    </div>
                </div>
                <div>
                    <ListGroup>
                        <ListGroupItem>Notifikasi</ListGroupItem>
                    </ListGroup>
                </div>
                <div>
                    <ListGroup>
                        <ListGroupItem>Daftar Transaksi</ListGroupItem>
                        <ListGroupItem>Ulas Produk</ListGroupItem>
                        <ListGroupItem>Status Pengiriman</ListGroupItem>
                        <ListGroupItem>Pengembalian Order</ListGroupItem>
                    </ListGroup>
                </div>
                <div>
                    <ListGroup>
                        <ListGroupItem>Ubah Profil</ListGroupItem>
                        <ListGroupItem>Pengaturan Notifikasi</ListGroupItem>
                        <ListGroupItem>Keluar</ListGroupItem>
                    </ListGroup>
                </div>
                
            </div>
        );
    }
}