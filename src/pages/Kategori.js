import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List, IconButton, AppBar, Paper} from '@material-ui/core';
import Food from '@material-ui/icons/Fastfood';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ListItemText, Divider} from '@material-ui/core';
import Drink from '@material-ui/icons/LocalCafe'
import Souvenir from '@material-ui/icons/CardGiftcard';
import Art from '@material-ui/icons/PanTool'
import Book from '@material-ui/icons/LibraryBooks'
import Desaign from '@material-ui/icons/ColorLens'
import {ArrowBack} from '@material-ui/icons'


const styles = theme => ({
  root: {
    flexGrow: '1',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center :{
    textAlign: 'center',
    display: 'inline-block',
  },
  menuButton:{
    marginTop: '10px',
    marginLeft:  '-25%',
    marginBottom: '10px',
  }
});


function SimpleList (props) {
  const { classes } = props;
  return (
    <div >
      {/* <AppBar  color="inherit" className={classes.center}>
      <IconButton className={classes.menuButton} > <ArrowBack /></IconButton>
      Kategori
      </AppBar > */}
      <Paper component="nav" className={classes.center} style={{marginTop: '80px', width: '35%'}}>
          <List >
        <ListItem button>
          <ListItemIcon>
            <Food />
          </ListItemIcon>
          <ListItemText primary="Makanan" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Drink />
          </ListItemIcon>
          <ListItemText primary="Minuman" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Souvenir />
          </ListItemIcon>
          <ListItemText primary="Oleh-oleh Batam" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Art />
          </ListItemIcon>
          <ListItemText primary="Kerajinan Tangan" />
        </ListItem><Divider />
        <ListItem button>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Perizinan UKM" />
        </ListItem><Divider />
        <ListItem button>
          <ListItemIcon>
            <Desaign />
          </ListItemIcon>
          <ListItemText primary="Jasa Desain" />
        </ListItem>
      </List>
      </Paper>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
