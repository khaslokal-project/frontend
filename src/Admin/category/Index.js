import React from 'react';

import { Button } from 'reactstrap';
import List from './List';
import Create from './Create';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModule: ''
        };
        //debugger // eslint-disable-line 
        this.showCreate = this.showCreate.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }



    render(){
        return(
            <div>
                <Button color="primary" onClick={this.showCreate}>
                    Tambah
                </Button>
                <List />
                { (this.state.showModule == 'create') && <Create modal={this.state.modal} closeModal={this.closeModal}/> }
            </div>
        );
    }



    showCreate(){
        this.setState({
            showModule: 'create',
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

export default Index;