import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Route, HashRouter} from 'react-router-dom';
import Kategori from './../pages/Kategori';
import Menu from './../assetImage/category/menu.png';
export default class CategoryAllFind extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="ulTable">
                        <li className="liTable">
                            <a className="text-dark" href="">
                                <Container>
                                    <Row className="align-items-center">
                                        <img  src={Menu} width="32px" height="32px" alt="makanan"></img>
                                        <Col to="/kategori">
                                            <span className="spanTab">Temukan kategori lain</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </a>
                        </li>
                    </ul>
                    <Route path="/kategori" component={Kategori} />
                </div>
            </HashRouter>
        );
    }
}