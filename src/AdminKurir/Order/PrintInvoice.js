import React from 'react';
import {Table, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

export default class PrintInvoice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: props.modal
        };

        this.handleClosed = this.handleClosed.bind(this);
        this.close = this.close.bind(this);
    }
    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Invoice Order</ModalHeader>
                    <ModalBody>
                        <p>Ke : Dillo</p>
                        <p>Alamat : Magelang </p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Produk</th>
                                    <th>Harga</th>
                                    <th>Item</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Richeese Nabati</td>
                                    <td>1.000</td>
                                    <td>1</td>
                                    <td>1.000</td>
                    
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Richeese Bisvit</td>
                                    <td>2.000</td>
                                    <td>5</td>
                                    <td>10.000</td>
                    
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Daren</td>
                                    <td>10.000</td>
                                    <td>1</td>
                                    <td>10.000</td>
                  
                                </tr>
                                <tr>
                                    <td colSpan='4'>Grand Total</td>
                                    <td>21.000</td>
                                </tr>
                                <tr>
                                    <td colSpan='4'></td>
                                    <td><Button onClick={ () => {

                                        window.print();
                                    }
                                    }>Cetak</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </div>
        );
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