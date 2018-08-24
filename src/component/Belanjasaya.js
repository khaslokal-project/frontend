import React from 'react'
import { Table , Button} from 'reactstrap';
import axios from 'axios'

export default class Belanjasaya extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Produk</th>
            <th>Total Pembayaran</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}