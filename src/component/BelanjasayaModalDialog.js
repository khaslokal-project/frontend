import React from 'react';
import axios from 'axios';
import { Table, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

class BelanjasayaModalDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: []
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.modal == true && this.props.modal == false ){
            axios.get(`${process.env.REACT_APP_API_URL}/orders/vieworderitem/${nextProps.dataModalDialog.idorder}`)
                .then( ({data}) => {
                    this.setState({
                        data
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
        return true;
    }
    
    render() {
        const {
            idorder
        } = this.props.dataModalDialog;

        console.log(this.state.data);

        return (
            <div>
                <Modal isOpen={this.props.modal} centered>
                    <ModalHeader>Order No {idorder}</ModalHeader>
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
                                {
                                    this.state.data.map(item => {
                                        return(
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>{item.price}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={ this.props.closeModalDialog } >Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default BelanjasayaModalDialog;