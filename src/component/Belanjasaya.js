import React from 'react'
import { Table , Button } from 'reactstrap'
import axios from 'axios'

export default class Belanjasaya extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    componentDidMount(){
      axios.get(`${process.env.REACT_APP_API_URL}/orders`)
      .then( ({data}) => {
            this.setState({
              data
            })
        })
        .catch(error => {
          console.log(error);
      })
    }

    onClose(){
      this.setState({

      })
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
                {this.state.data.map(item => {
                  return(
                    <tr key={item.id}>
                      <th scope="row">{item.date}</th>
                      <td>{item.idproduct}</td>
                      <td>{item.qty}</td>
                      <td></td>
                    </tr>
                    )
                  })
                }
                </tbody>
                {/* <tfoot>
                <tr>
                  <td><Button onClick={browserHistory.goBack}>Kembali</Button></td>
                </tr>
                </tfoot> */}
          </Table>
        );
      }
    }