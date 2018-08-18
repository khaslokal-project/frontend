import React from 'react';
import {Table, Label, Button} from 'reactstrap';
import Update from './Update';
// import Delete from './Delete';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModule: ''
        };
        this.showUpdate = this.showUpdate.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

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
                                <Button onClick={this.showUpdate}>Edit</Button>
                                <Button onClick={this.showDelete}>Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Minuman</td>
                            <td>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                { (this.state.showModule == 'update') && <Update modal={this.state.modal} closeModal={this.closeModal}/> }
            </div>
        );
    }

    showUpdate(){
        this.setState({
            showModule: 'update',
            modal: true
        });
    }

    showDelete(){
        this.setState({
            showModule: 'delete',
            modal: true
        });
    }

    closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }

}

export default List;
