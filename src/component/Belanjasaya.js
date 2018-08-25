import React from 'react';
import axios from 'axios';
import ItemBelanja from './ItemBelanja';
import { Table, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';


class Belanjasaya extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            idorder: ``,
            modal: false
        };

        this.showDetail = this.showDetail.bind(this);
        this.closeModalDialog = this.closeModalDialog.bind(this);
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/orders/vieworder`)
            .then( ({data}) => {
                this.setState({
                    data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    render() {
        const item = {
            name: `23`,
            qty: 2,
            price: 1000
        };

        const ModalDialog = (
            <div>
                <Modal isOpen={this.state.modal} centered>
                    <ModalHeader>{item.idorder}</ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Produk</th>
                                    <th>Jumlah</th>
                                    <th>Harga</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty * item.price}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={ this.closeModalDialog } >Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );


        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>Kurir</th>
                            <th>Total Pembayaran</th>
                            <th>Status</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(item => {
                            return(
                                <ItemBelanja { ...item } key={item.idorder} showDetail={this.showDetail}/>
                            );
                        })
                        }
                    </tbody>
                </Table>
                {ModalDialog}
            </div>
        );
    }

    showDetail(idorder){
        this.setState({
            modal: true
        });
    }
    closeModalDialog(){
        this.setState({
            modal: false
        });
    }
}

export default Belanjasaya;