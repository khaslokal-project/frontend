import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { List, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';


export const mailFolderListItems = (
  <div>
    <List>
        <ListItem>
        <Typography variant="title">
        Anda belum gabung jadi member?                      
        </Typography>
        </ListItem>
        <ListItem>
        <Typography>
        Buruan daftar dan nikmati kemudahan belanja                       
        </Typography>
        </ListItem>
        <ListItem>
        <Button style={{marginRight: '10px'}} variant="outlined" color="secondary" component={Link} to="/masuk" >
          Masuk </Button>
          <Button variant="contained" color="secondary" component={Link} to="/daftar">
          Daftar
          </Button>
          </ListItem>
        </List>   
  </div>
);
export const otherMailFolderListItems = (
        <div>
          <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Beranda" />
        </ListItem><Divider />
        <ListItem button component={Link} to="/kategori">
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon> 
          <ListItemText primary="Kategori" />
        </ListItem><Divider />
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Tim Delivery" />
        </ListItem><Divider />
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Tentang Kami" />
        </ListItem><Divider />
        <ListItem button component={Link} to="/kontak">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Kontak Kami" />
        </ListItem><Divider />

        </div>
);