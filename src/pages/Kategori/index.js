import React from 'react';
import { ListGroup, ListGroupItem, NavLink } from 'reactstrap';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }

    render(){
        return (
            <div>
                {this.state.items.map(item => {
                    return(       
                        <ListGroup key={item.id}>
                            <NavLink href="">
                                <ListGroupItem>{item.nameCategory}</ListGroupItem>
                            </NavLink>
                        </ListGroup>   
                    );
                })
                }
            </div>
        );
    }
    componentDidMount(){
        this.fetchCategory();
    }
    
    fetchCategory(){
        const API_URL = `${process.env.REACT_APP_API_URL}/productcategory`;
        fetch(API_URL)
            .then (response => response.json())
            .then(items => {
                this.setState({
                    items 
                });
            })
            .catch(console.log);
    } 
}



