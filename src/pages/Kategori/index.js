import React from 'react';
import { ListGroup, ListGroupItem, Container, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }

    render(){
        return (
            <Container>
                <Row>
                    {this.state.items.map(item => {
                        return(
                            <Col xs="6" md="4" key={item.id}>
                                <Link to={`/kategori/${item.name}`}>
                                    <ListGroup>
                                        <ListGroupItem>{item.name}</ListGroupItem>
                                    </ListGroup>
                                </Link>
                            </Col>
                        );
                    })
                    }
                </Row>
            </Container>
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



