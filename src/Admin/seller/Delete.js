import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Konfirmasi</ModalHeader>
                    <ModalBody>Apakah anda ingin menghapus item ini?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Ya</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Tidak</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Delete;