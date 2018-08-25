import React from 'react';
import CardProductItem from './../../cardProduct/CardProductItem';
import { Container, Row, Col} from 'reactstrap';
import axios from 'axios';

export default class CardProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data :  [],
            idTileorder : null
        };
    }
    
    componentDidMount() {
        axios.get (`${process.env.REACT_APP_API_URL}/products/`)
            .then (res=> {
                const data = res.data.map(item =>
                    <div key={item.id}>
                        <CardProductItem item={item} />
                    </div>
                );
                this.setState({data});
                // console.log("state", this.state.data)
            });
    }

    render(){
        return(
            <div className="apps">
                <Container>
                    <Row>
                        <Col>
                            {this.state.data}
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}