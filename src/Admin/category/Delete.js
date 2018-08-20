import React from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.modal
        };
    
        this.handleClosed = this.handleClosed.bind(this);        

        this.delete = this.delete.bind(this);
        this.close = this.close.bind(this);
    }
   

    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal}  onClosed={this.handleClosed}>
                    <ModalHeader>Konfirmasi</ModalHeader>
                    <ModalBody>Apakah anda ingin menghapus kategori  {this.props.data.nameCategory} ini?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.delete}>Ya</Button>{' '}
                        <Button color="secondary" onClick={this.close}>Tidak</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

     
    delete() {
        axios.delete(`http://192.168.10.40:3000/productcategory/${this.props.data.id}`)
            .then(res => {
                this.close();
                this.props.fetchData();
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleClosed() {
        this.props.closeModal();
    }

    close() {
        this.setState({
            modal: false
        });
    }
}

export default Delete;