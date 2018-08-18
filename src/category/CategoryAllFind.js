import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Route, BrowserRouter, Link} from 'react-router-dom';
import Kategori from '../pages/Kategori';
import Menu from './../assetImage/category/menu.png';
export default class CategoryAllFind extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                    <ul className="ulTable">
                        <li className="liTable">
                            <a className="text-dark" href="">
                                <div>
                                    <Container >
                                        <Row className="align-items-center">
                                            <img  src={Menu} width="32px" height="32px" alt="makanan"></img>
                                            <Col ><span className="spanTab" button component={Link} to="/kategori">Temukan kategori lain</span></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </a>
                        </li>
                    </ul>
                    
                    <Route path="/kategori" component={Kategori} />
                </div>
            </BrowserRouter>
        );
    }
}