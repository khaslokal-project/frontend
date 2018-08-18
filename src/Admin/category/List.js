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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Makanan</td>
                            <td> 
                                <Button> Edit </Button> <Button> Delete </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Minuman</td>
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
