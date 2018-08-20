import React from 'react';
import {Table, Button} from 'reactstrap';

export default class PrintInvoice extends React.Component{
    render(){
        return(
            <div>
                <h3>Invoice Order</h3>
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
            </div>
        );
    }
}