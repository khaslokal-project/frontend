import React from 'react';
import Create from './Create';
import Delete from './Delete';
import List from './List';
import Update from './Update';

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