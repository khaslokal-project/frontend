import React from 'react';
import BarTopProduct from './BarTopProduct';
import CardProductItem from './CardProductItem';
import { Container, Row, Col} from 'reactstrap';
class CardProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data :  [],
            idTileorder : null
        };
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <BarTopProduct />
                    </Row>
                    <Row>
                        <Col>
                            {this.state.data.map(item => {
                                return(
                                    <CardProductItem item={item} key={item.id}/>
                                );
                            })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const API_URL = `${process.env.REACT_APP_API_URL}/products/`;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data : data
                });
            })
            .catch(console.log);
    }
}

export default CardProduct;