import React from 'react';
import {Table, Button} from 'reactstrap';

export default class PrintSlipOrder extends React.Component{
    render(){
        return(
            <div>
                <h3>Slip Order</h3>
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
                        <tr>
                            <td colSpan='4'></td>
                            <td><Button Button onClick={ () => {

                                window.print();
                            }
                            }>Cetak</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}