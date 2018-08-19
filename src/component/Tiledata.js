import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {Home, Drafts, Star, Mail} from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { List, Divider, Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Promo from './../assetImage/icon/Promo.png';
import Car from './../assetImage/icon/Car.png';
import Box from './../assetImage/icon/Box.png';
import Pusat from './../assetImage/icon/Pusat.png';


export const mailFolderListItems = (
    <div>
        <List>
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
        </List>   
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

            <ListItem button component={Link} to="/promo">
                <ListItemIcon>
                    <Avatar alt="promo" src={Promo} style={{width: '23px', height: '23px'}} />
                </ListItemIcon>
                <ListItemText primary="Promo Terkini" />
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
                    <Avatar alt="pengembalian order" src={Box} style={{width: '23px', height: '23px'}} />
                </ListItemIcon>
                <ListItemText primary="Pengembalian Order" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Avatar alt="car" src={Car} style={{width: '23px', height: '23px'}} />
                </ListItemIcon>
                <ListItemText primary="Status Pengiriman" />
            </ListItem><Divider />
        </div>
        <div>
            <ListItem button>
                <ListItemIcon>
                    <Avatar alt="pusat bantuan" src={Pusat} style={{width: '23px', height: '23px'}} />
                </ListItemIcon>
                <ListItemText primary="Pusat Bantuan" />
            </ListItem>
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
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary="Adminkategori" />
            </ListItem>
            <ListItem button component={Link} to="/adminseller">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary="Adminseller"  />
            </ListItem>
            <ListItem button component={Link} to="/adminproduk">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary="Adminproduk" />
            </ListItem>
            <Divider />
        </div>

    </div>
);