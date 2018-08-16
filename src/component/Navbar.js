import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Search from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import Cart from '@material-ui/icons/ShoppingCart'
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar'
import { Route, HashRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Back from '@material-ui/icons/ArrowBack'
import { mailFolderListItems, otherMailFolderListItems } from './Tiledata';
import { mailFolderListItemsRight } from './tileDataRight';
import { IconButton, Toolbar} from '@material-ui/core';
import Kategori from '../pages/Kategori'

const styles = theme => ({
  list: {
    width: 250,
  },
  center :{
    textAlign: 'center',
    display: 'inline-block',
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    left: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

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
      <IconButton> <Back/></IconButton>
      Keranjang Belanja</List>
      <Divider />
        <List>{mailFolderListItemsRight}</List>
      </div>
    );

    return (
      <HashRouter>
      <div>
        <AppBar to="/"  style={{ backgroundColor: '#E54643'}}>
        <Toolbar className={classes.center}>
      <IconButton color="inherit" aria-label="Open drawer">
       <MenuIcon onClick={this.toggleDrawer('left', true)}></MenuIcon>
       </IconButton> KhasLokal  ___________________________
       {/* <Typography  variant="title" color="inherit" noWrap>
        KhasLokal                         
        </Typography> */}
        <IconButton color="inherit" aria-label="Open drawer">
        <Search />
        </IconButton>
       <IconButton color="inherit" aria-label="Open drawer">
        <Cart onClick={this.toggleDrawer('right', true)}></Cart>
        </IconButton>
        </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {secondList}
          </div>
        </Drawer>
        <Route path="/kategori" component={Kategori} hideNavBar/>
      </div>
      </HashRouter>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
