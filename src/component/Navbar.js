import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, ArrowBack, ShoppingCart } from '@material-ui/icons';
import { Route, HashRouter } from 'react-router-dom';
import { mailFolderListItems, otherMailFolderListItems } from './Tiledata';

import { mailFolderListItemsRight } from './tileDataRight';
import { IconButton, Toolbar, AppBar, List, Drawer, Divider} from '@material-ui/core';

import Beranda from '../pages/Beranda';
import Kategori from './../pages/Kategori';
import Kontak from '../pages/Kontak';
import Daftar from '../pages/Daftar';
import Masuk from '../pages/Masuk';
import Cari from './../assetImage/icon/Cari.png';
import Adminkategori from '../Admin/category/Index';
import Adminseller from '../Admin/seller/Index';
import Adminproduk from '../Admin/produk/Index';
import Makanan from './../pages/Insidekategori/Makanan';
import Minuman from './../pages/Insidekategori/Minuman';
import Aksesoris from './../pages/Insidekategori/Aksesoris';
import Buahbuahan from './../pages/Insidekategori/Buahbuahan';
import Daging from './../pages/Insidekategori/Daging';
import Tanaman from './../pages/Insidekategori/Tanaman';
import Kerajinan from './../pages/Insidekategori/Kerajinantangan';
import Lauk from './../pages/Insidekategori/Lauk';
import Oleholeh from './../pages/Insidekategori/Oleholehbatam';
import Sayuran from './../pages/Insidekategori/Sayuran';
import Tas from './../pages/Insidekategori/Tas';
import Tiket from './../pages/Insidekategori/Tiket';
import Sepatu from './../pages/Insidekategori/Sepatu';
import Herbal from './../pages/Insidekategori/Herbal';
import Jasadesain from './../pages/Insidekategori/Jasadesain';
import Perizinan from './../pages/Insidekategori/Perizinanukm';
import Pakaian from './../pages/Insidekategori/Pakaian';
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
            <HashRouter>
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
                                            {/* <Badge badgeContent={0} color="inherit"  > */}
                                            <ShoppingCart onClick={
                                                () => {
                                                    this.toggleDrawer('right', true);
                                                }
                                            }/>
                                            {/* </Badge> */}
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

                    <Route path="/makanan" component={Makanan} />
                    <Route path="/minuman" component={Minuman} />
                    <Route path="/oleholeh" component={Oleholeh} />
                    <Route path="/kerajinantangan" component={Kerajinan} />
                    <Route path="/perizinanukm" component={Perizinan} />
                    <Route path="/jasa" component={Jasadesain} />
                    <Route path="/tiket" component={Tiket} />
                    <Route path="/tas" component={Tas} />
                    <Route path="/aksesoris" component={Aksesoris} />
                    <Route path="/buahbuahan" component={Buahbuahan} />
                    <Route path="/pakaian" component={Pakaian} />
                    <Route path="/tanaman" component={Tanaman} />
                    <Route path="/sayuran" component={Sayuran} />
                    <Route path="/lauk" component={Lauk} />
                    <Route path="/daging" component={Daging} />
                    <Route path="/herbal" component={Herbal} /> 
                    <Route path="/sepatu" component={Sepatu} />

                    
                </div>
            </HashRouter>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);