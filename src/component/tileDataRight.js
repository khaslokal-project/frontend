import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { List, Typography } from '@material-ui/core';
import { Table } from 'reactstrap';

import AppContext from './AppContext';

export const mailFolderListItemsRight = (
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


                if (context.orderItem.length){
                    let total = 0;
                    let subTotal = 0

                    let tbody = context.orderItem.map( item  => {
                        subTotal = item.total * item.price;
                        total += subTotal;
                        return (<tr key={item.id}>
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
                    
                    const tfooter = (<tr><td colspan="3"></td><td>{total}</td></tr>)

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
                        </tbody>
                        <tfooter>
                            {tfooter}
                        </tfooter>
                    </Table>);
                }

                return (<div>{ view }</div>);
            }}
        </AppContext.Consumer>   
    </div>
);
