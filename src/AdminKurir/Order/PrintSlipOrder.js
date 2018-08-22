import React from 'react';
import {Table, Button, Modal, ModalBody, ModalHeader} from 'reactstrap';

export default class PrintSlipOrder extends React.Component{
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
            <div >
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Slip Order</ModalHeader>
                    <ModalBody>
                        <p>No.invoice : 01</p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nama Toko</th>
                                    <th>Alamat</th>
                                    <th>Produk</th>
                                    <th>Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Munjul</td>
                                    <td>Jl Ahmad Yani No 3</td>
                                    <td>Richeese Nabati</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Julmun</td>
                                    <td>Jl Ahmad Yani No 6</td>
                                    <td>Richeese Bisvit</td>
                                    <td>5</td>
                                </tr>
                                <tr >
                                    <td colSpan='4'></td>
                                    <td><Button className="print" onClick={ () => {

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