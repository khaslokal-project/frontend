import React from 'react';
import axios from 'axios';
import ItemBelanja from './ItemBelanja';
import { Table } from 'reactstrap';
import BelanjasayaModalDialog from './BelanjasayaModalDialog';

class Belanjasaya extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            idorder: ``,
            modal: false,
            dataModalDialog : {}
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
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Id Order</th>
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
                                <ItemBelanja { ...item } key={item.idorder} showDetail={
                                    () => {
                                        this.showDetail(item);
                                    }}/>
                            );
                        })
                        }
                    </tbody>
                </Table>
                {/* {ModalDialog} */}
                <BelanjasayaModalDialog
                    modal={this.state.modal}
                    dataModalDialog = {this.state.dataModalDialog}
                    closeModalDialog = {this.closeModalDialog}
                />
            </div>
        );
    }

    showDetail(data){
        this.setState({
            modal: true,
            dataModalDialog: data
        });
    }

    closeModalDialog(){
        this.setState({
            modal: false
        });
    }
}

export default Belanjasaya;