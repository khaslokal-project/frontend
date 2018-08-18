import React from 'react';
import {Table, Label, Button} from 'reactstrap';

class List extends React.Component {
    render(){
        return( 
            <div >
                <Label> List Kategory </Label>
                <Table>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Merek</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kek Pisang</td>
                            <td>70000</td>
                            <td>5</td>
                            <td>Kek pisang villa</td>
                            <td> 
                                <Button> Edit </Button> <Button> Delete </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Teh tarik</td>
                            <td>13000</td>
                            <td>20</td>
                            <td>teh tarik</td>
                            <td>
                                <Button> Edit </Button> <Button> Delete </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default List;
