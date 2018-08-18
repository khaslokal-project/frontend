import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, ArrowBack, ShoppingCart } from '@material-ui/icons';
import { Route, HashRouter } from 'react-router-dom';
import { mailFolderListItems, otherMailFolderListItems } from './Tiledata';
import { mailFolderListItemsRight } from './tileDataRight';
import { IconButton, Toolbar, AppBar, List, Drawer, Divider} from '@material-ui/core';
import Kategori from '../pages/Kategori';
import Kontak from '../pages/Kontak';
import Daftar from '../pages/Daftar';
import Masuk from '../pages/Masuk';
import  { InputGroup, InputGroupAddon, Input} from 'reactstrap';


const styles = ({
    list: {
        width: 250,
    },
    center :{
        textAlign: 'center',
        display: 'inline',
    
    }
});

class TemporaryDrawer extends React.Component {
  
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
      Keranjang Belanja</List>
                <Divider />
                <List>{mailFolderListItemsRight}</List>
            </div>
        );

        return (
            <HashRouter>
                <div>
                    <div>
                        <AppBar to="/"  color="secondary" >
                            <Toolbar classclassName={classes.center}>
                                <IconButton color="inherit" aria-label="Open drawer">
                                    <Menu onClick={
                                        () => {
                                            this.toggleDrawer('left', true);
                                        }
                                    }/>
                                </IconButton>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                                    <Input placeholder="Search..."/>
                                </InputGroup>
                                <IconButton color="inherit" aria-label="Open drawer">
                                    <ShoppingCart onClick={
                                        () => {
                                            this.toggleDrawer('right', true);
                                        }
                                    }/>
                                </IconButton>
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
                    <Route path="/masuk" component={Masuk} />
                    <Route path="/daftar" component={Daftar} />
                    <Route path="/kategori" component={Kategori}/>
                    <Route path="/kontak" component={Kontak} />
                </div>
            </HashRouter>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
