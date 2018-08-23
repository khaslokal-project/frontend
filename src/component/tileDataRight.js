import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { List, Typography } from '@material-ui/core';
import { Table } from 'reactstrap';

import AppContext from './AppContext';
import axios from 'axios';


class MailFolder extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick = (options) => {
        const self = this;
        const { event, shippingcost, orderItem } = options;
        event.stopPropagation();
        
        axios.post(`${process.env.REACT_APP_API_URL}/checkout`,
        {
            shippingcost,
            orderItem
        })
        .then( ({ data }) => {
            this.closeRight();
            console.log('berhasil')
        })
        .catch(error => {
            self.props.closeRight();
            console.log(error);
        });
      }

    render(){
        return(
                <div>
                    <AppContext.Consumer>
                        {(context) => {
                            let view = (
                                <List>
                                    <ListItem>
                                        <Typography>
                                            Keranjang belanja Sista masih kosong. Ayo diborong Sis, sebelum kehabisan.                       
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Button style={{marginRight: '10px', width: '100%'}} variant="contained" color="secondary" >
                                            Lanjut Belanja
                                        </Button>
                                    </ListItem>
                                </List>
                            )


                            if (context.orderItem.length) {
                                let total = 0;
                                let subTotal = 0;
                                let thetotal =0;
                                let shippingcost = 10000;

                                let tbody = context.orderItem.map( item  => {
                                    subTotal = item.total * item.price;
                                    total += subTotal;
                                    thetotal = total + shippingcost;
                                    return (<tr key={item.productId}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.total}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {subTotal}
                                        </td>
                                    </tr>
                                    )
                                })
                                
                                const tfooter = (<tr><td colSpan="3"></td><td>Total Harga= {thetotal}</td></tr>)
                                const shipping = (<tr><td colSpan="3">Ongkos Kirim = 10.000</td></tr>)

                                view = (<Table>
                                    <thead>
                                        <tr>
                                            <th>Barang</th>
                                            <th>Item</th>
                                            <th>Harga</th>
                                            <th>Sub total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tbody}
                                        {shipping}
                                    </tbody>
                                    <tfoot>
                                        {tfooter}
                                        <tr>
                                            <td>
                                                <Button onClick={(event) =>
                                                {
                                                    this.handleClick({
                                                        event,
                                                        orderItem: context.orderItem,
                                                        shippingcost
                                                    })
                                                }} color="secondary">Checkout
                                                </Button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    
                                </Table>
                               
                                );
                            }

                            return (<div>{ view }</div>);
                        }    
                    }
                    </AppContext.Consumer>   
                </div>
        )
    }
} 

export default MailFolder;
    
    