import React from 'react';
import List from './List';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

class Index extends React.Component {
    render(){
        return(
            <div>
                <List />
                <Create />
                <Update />
                <Delete />
            </div>
        );
    }
}

export default Index;