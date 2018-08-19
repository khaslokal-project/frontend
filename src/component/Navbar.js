import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, ArrowBack, ShoppingCart } from '@material-ui/icons';
import { Route, BrowserRouter } from 'react-router-dom';
import { mailFolderListItems, otherMailFolderListItems } from './Tiledata';
import { mailFolderListItemsRight } from './tileDataRight';
import { IconButton, Toolbar, AppBar, List, Drawer, Divider} from '@material-ui/core';

import Beranda from '../pages/Beranda';
import Kategori from '../pages/Kategori';
import Kontak from '../pages/Kontak';
import Daftar from '../pages/Daftar';
import Masuk from '../pages/Masuk';
import Cari from './../assetImage/icon/Cari.png';
import Adminkategori from '../Admin/category/Index';
import Adminseller from '../Admin/seller/Index';
import Adminproduk from '../Admin/produk/Index';
import  { InputGroup, InputGroupAddon, Input} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

const styles = ({
    list: {
        width: 250,
    },
    center :{
        textAlign: 'center',
        display: 'inline',
    
    }
});

class Navbar extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false,
            left: false,
            right: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer (side, open) {
        this.setState({
            [side]: open,
        });
    }

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
        
            </div>
        );

        const secondList = (
            <div className={classes.list}>
                <List > 
                    <IconButton> <ArrowBack/></IconButton>
                        Keranjang Belanja
                </List>
                <Divider />
                <List>
                    {mailFolderListItemsRight}
                </List>
            </div>
        );

        return (
            <BrowserRouter>
                <div>
                    <div>
                        <AppBar to="/"  color="secondary" >
                            <Toolbar className={classes.center}>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend">
                                        <IconButton color="inherit" aria-label="Open drawer" style={{marginTop: '5px'}}>
                                            <Menu onClick={
                                                () => {
                                                    this.toggleDrawer('left', true);
                                                }
                                            }/>
                                        </IconButton>
                                    </InputGroupAddon>
                                    <Input placeholder="Cari.." src={Cari} style={{marginTop: '10px'}}/>
                                    <InputGroupAddon addonType="append">
                                        <IconButton color="inherit" aria-label="Open drawer" style={{marginTop: '5px'}}>
                                            <ShoppingCart onClick={
                                                () => {
                                                    this.toggleDrawer('right', true);
                                                }
                                            }/>
                                        </IconButton>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Toolbar>
                        </AppBar>
                    </div>

                    <Drawer open={this.state.left} onClose={
                        () => {
                            this.toggleDrawer('left', false);
                        }
                    }>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={
                                () => {this.toggleDrawer('left', false);
                                }
                            }
                            onKeyDown={
                                () => {this.toggleDrawer('left', false);
                                }
                            }>
                            {sideList}
                        </div>
                    </Drawer>
                    <Drawer anchor="right" open={this.state.right} onClose={
                        () => {this.toggleDrawer('right', false);
                        }
                    }>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={
                                () => {this.toggleDrawer('right', false);
                                }
                            }
                            onKeyDown={
                                () => {this.toggleDrawer('right', false);
                                }
                            }>
                            {secondList}
                        </div>
                    </Drawer>

                    <Route exact path="/" component={Beranda} />
                    
                    <Route path="/masuk" component={Masuk} />
                    <Route path="/daftar" component={Daftar} />
                    <Route path="/kategori" component={Kategori}/>
                    <Route path="/kontak" component={Kontak} />
                    <Route path="/adminkategori" component={Adminkategori} />
                    <Route path="/adminseller" component={Adminseller} />
                    <Route path="/adminproduk" component={Adminproduk} />
                </div>
            </BrowserRouter>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);