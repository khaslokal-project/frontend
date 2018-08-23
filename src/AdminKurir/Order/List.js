import React from 'react';
import {Table, Button} from 'reactstrap';
import Sliporder from './PrintSlipOrder';
import Invoice from './PrintInvoice';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModule: ''
        };
        this.showSliporder = this.showSliporder.bind(this);
        this.showInvoice = this.showInvoice.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render(){
        return(
            <div className="sliporderno ">
                <Table>
                    
                    <tr>
                        <th>Tanggal</th>
                        <th>Pembeli</th>
                        <th>Produk</th>
                        <th>Status</th>
                        <th>Cetak</th>
                    </tr>
                    <tr>
                        <td>09/07/2018</td>
                        <td>Dillo</td>
                        <td>Richeese Nabati, Richeese Bisvit</td>
                        <td>Belum Diproses</td>
                        <td><Button onClick={this.showInvoice}>Invoice</Button></td>
                        <td><Button onClick={this.showSliporder}>Slip Order</Button></td>
                    </tr>
                    <tr>
                        <td>09/07/2018</td>
                        <td>Welly</td>
                        <td>Nissin biscuit</td>
                        <td>Proses Pengiriman</td>
                        <td><Button onClick={this.showInvoice}>Invoice</Button></td>
                        <td><Button onClick={this.showSliporder}>Slip Order</Button></td>
                    </tr>
                    <tr>
                        <td>09/07/2018</td>
                        <td>Indraak</td>
                        <td>Sendal, Maicih</td>
                        <td>Selesai</td>
                        <td><Button onClick={this.showInvoice}>Invoice</Button></td>
                        <td><Button onClick={this.showSliporder}>Slip Order</Button></td>
                    </tr>
                            
                </Table>
                { (this.state.showModule === 'sliporder') && <Sliporder modal={this.state.modal} closeModal={this.closeModal} /> }
                { (this.state.showModule === 'invoice') && <Invoice modal={this.state.modal} closeModal={this.closeModal} /> }
            </div>
        );
    }
    showSliporder(){
        this.setState({
            showModule: 'sliporder',
            modal: true
        });
    }
     showInvoice(){
        this.setState({
            showModule: 'invoice',
            modal: true
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
