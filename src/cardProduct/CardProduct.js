import React from 'react';
import BarTopProduct from './BarTopProduct'

import {Container, Row, Col, Card, Button, CardImg, CardTitle, CardText} from 'reactstrap';
   
   const CardProduct = (props) => {
     return (
    <div>
    <Container>
    <Row>
    <BarTopProduct/>
    </Row>
      <Row>
        <Col>
          <Card className="cardCard">
            <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00002.jpg')} alt="Card image cap" />
            <div>
                <Container>
                <CardTitle className="cardTitles">Cake Pisang</CardTitle>
                  <div ><del className="text-muted">Rp. 68.000</del>
                  <span className=" cardPrice"> Rp. 65.000</span></div>
                  </Container>
                  <Container className="contCard">
                  <Row className="inline align-items-center">
                  <Col><CardText className="cardTexts">Villa Group Batam</CardText></Col>
                  <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                  </Row>
                </Container>
            </div>
          </Card>
          </Col>

          <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/cr00001.jpg')} alt="Card image cap" />
              <div>
                  <Container>
                  <CardTitle className="cardTitles">Tempat Tisu</CardTitle>
                    <div><del className="text-muted">Rp. 150.000</del>
                    <span > Rp. 130.000</span></div>       
                  </Container>
                  <Container className="contCard">   
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">Rumah Kreatif Bunda Elviana Tanjung Pinang</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00001.jpg')} alt="Card image cap" />
              <div>
                  <Container>
                  <CardTitle className="cardTitles">Keripik Pisang</CardTitle>
                    <div ><del className="text-muted">Rp. 20.000</del>
                    <span className="cardPrice"> Rp. 18.000</span></div>
                  </Container>
                  <Container className="contCard"> 
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">Narata Batam</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
            </Card>
          </Col>

          <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sd00001.jpg')} alt="Card image cap" />
              <div>
                  <Container>
                  <CardTitle className="cardTitles">Teh Tarik Botol</CardTitle>
                  <div><del className="text-muted">Rp. 10.500</del>
                  <span className="cardPrice"> Rp. 10.000</span></div>    
                  </Container>
                  <Container className="contCard">
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">Meltea Batam</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
            </Card>
          </Col>
         </Row>

         <Row>
          <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/fd00001.jpg')} alt="Card image cap" />
              <div>
                  <Container>
                  <CardTitle className="cardTitles">Bakso</CardTitle>
                    <div><del className="text-muted">Rp. 12.000</del>
                    <span className="cardPrice"> Rp. 10.000</span></div>
                    </Container>
                    <Container className="contCard">  
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">Ki-Bakso Batam</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
             </Card>
            </Col>

            <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00003.jpeg')} alt="Card image cap" />
              <div>
                  <Container>
                  <CardTitle className="cardTitles">Keripik Gong-gong</CardTitle>
                    <div><del className="text-muted">Rp. 16.000</del>
                    <span className="cardPrice"> Rp. 15.000</span></div>
                    </Container>
                    <Container className="contCard">
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">UKM - Fartiana</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
              </Card>
            </Col>
         </Row>

         <Row>
          <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00005.jpg')} alt="Card image cap" />
              <div>
                  <Container>
                  <CardTitle className="cardTitles">Kerupuk Tulang Ikan</CardTitle>
                    <div ><del className="text-muted">Rp. 15.500</del>
                    <span className="cardPrice"> Rp. 15.000</span></div>
                  </Container>
                  <Container className="contCard">
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">La-Rest</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
            </Card>
          </Col>

          <Col>
            <Card className="cardCard">
              <CardImg top width="219px" height="273.75px" src={require('../assetImage/product/sc00004.jpg')} alt="Card image cap" />
              <div>
              <Container>
                  <CardTitle className="cardTitles">Keripik Singkong</CardTitle>
                    <div> <del className="text-muted">Rp. 15.500</del>
                    <span className="cardPrice"> Rp. 15.000</span></div> 
                  </Container>
                  <Container className="contCard">  
                    <Row className="inline align-items-center">
                    <Col><CardText className="cardTexts">Aruna Food Crispy</CardText></Col>
                    <Col xs="3"><Button className="cardButton" size="sm" color="danger">Beli</Button></Col>
                    </Row>
                  </Container>
              </div>
            </Card>
          </Col>
         </Row>

      </Container>
      </div>
     )
    }

export default CardProduct;