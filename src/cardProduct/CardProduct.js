import React from 'react';
import BarTopProduct from './BarTopProduct';
import Tileorder from '../component/Tileorder';
import CardProductItem from './CardProductItem';
import { Container, Row, Col} from 'reactstrap';
class CardProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data :  [],
            idTileorder : null
        };
        
        //this.showTileorder = this.showTileorder.bind(this);
        
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
                {
                    (this.showModal === 'Tileorder') 
                    && <Tileorder modal={this.state.modal} closeModal={this.closeModal} data={this.fetchData} id={this.state.idTileorder} /> 
                }
            </div>
        );
    }
    componentDidMount() {
        this.fetchData();
    }

    // showTileorder(id) {
    //     this.setState({
    //         showModule: 'Tileorder',
    //         modal: true,
    //         idTileorder: id
    //     });
    // }

    fetchData() {
        const API_URL = `${process.env.REACT_APP_API_URL}/products/`;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                // data.forEach(item => {
                //     this.showTileorder(item.id);
                // });
                this.setState({
                    data: data
                });
            })
            .catch(console.log);
    }


}

export default CardProduct;