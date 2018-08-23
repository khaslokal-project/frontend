import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {Home, Drafts, Star, Mail} from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Divider} from '@material-ui/core';
import { Link } from 'react-router-dom';


export const mailFolderListItems = (
    <div>
        {/* <List>
            <ListItem>
                <Typography variant="title">
                  Anda belum gabung jadi member?
                </Typography>
            </ListItem>
            <ListItem>
                <Typography> Buruan daftar dan nikmati kemudahan belanja
                </Typography>
            </ListItem>
            <ListItem>
                <Button style={{marginRight: '10px'}} variant="outlined" color="secondary" component={Link} to="/masuk" > Masuk </Button>
                <Button variant="contained" color="secondary" component={Link} to="/daftar">
                  Daftar
                </Button>
            </ListItem>
        </List>    */}
    </div>
);
export const otherMailFolderListItems = (
    <div>
        <div>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Beranda" />
            </ListItem>
            <ListItem button component={Link} to="/kategori">
                <ListItemIcon>
                    <Star />
                </ListItemIcon> 
                <ListItemText primary="Kategori" />
            </ListItem><Divider />
        </div>
        <div>
            <ListItem button>
                <ListItemIcon>
                    <Drafts />
                </ListItemIcon>
                <ListItemText primary="Tentang Khaslokal" />
            </ListItem>
            <ListItem button component={Link} to="/kontak">
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary="Kontak Khaslokal" />
            </ListItem><Divider />
        </div>
        <div>
            <ListItem button component={Link} to="/adminkategori">
                <ListItemText primary="Adminkategori" />
            </ListItem>
            <ListItem button component={Link} to="/adminseller">
                <ListItemText primary="Adminseller"  />
            </ListItem>
            <ListItem button component={Link} to="/adminproduk">
                <ListItemText primary="Adminproduk" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/adminlogin">
                <ListItemText primary="Adminlogin" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/adminregister">
                <ListItemText primary="Adminregister" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/kurrir">
                <ListItemText primary="kurrir" />
            </ListItem>
            <Divider />
        </div>

    </div>
);