import React from 'react';
import {Table, Button} from 'reactstrap';
import axios from 'axios';

class List extends React.Component {

    render(){
        return(
            <div>
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
                            <td><Button>Invoice</Button></td>
                            <td><Button>Slip Order</Button></td>
                        </tr>
                        <tr>
                            <td>09/07/2018</td>
                            <td>Welly</td>
                            <td>Nissin biscuit</td>
                            <td>Proses Pengiriman</td>
                            <td><Button>Invoice</Button></td>
                            <td><Button>Slip Order</Button></td>
                        </tr>
                        <tr>
                            <td>09/07/2018</td>
                            <td>Indraak</td>
                            <td>Sendal, Maicih</td>
                            <td>Selesai</td>
                            <td><Button>Invoice</Button></td>
                            <td><Button>Slip Order</Button></td>
                        </tr>
                            
                   </Table>
            </div>
        )
    }
}

export default List
