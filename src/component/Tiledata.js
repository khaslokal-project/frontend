import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {Home, Star, ShoppingBasket} from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { List, Divider} from '@material-ui/core';
import { Link } from 'react-router-dom';
// import AppContext from './../component/AppContext';

export const mailFolderListItems = (
    <div>
        <List>
            <ListItem>
                <Typography variant="title">
                  Belum gabung jadi member?
                </Typography>
            </ListItem>
            <ListItem>
                <Typography> Buruan daftar dan belanja produk UMKM hanya di KhasLokal.com
                </Typography>
            </ListItem>
            <ListItem>
                <Button style={{marginRight: `10px`}} variant="outlined" color="secondary" component={Link} to="/masuk" > Masuk </Button>
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
<<<<<<< HEAD
            <ListItem>
                {/* <AppContext.Consumer>
                    {(context) => {
                        let logout = (

                        )
                        return (<div> { context.user.username } </div>);
                    }}
                </AppContext.Consumer>
                <Button variant="outlined" color="secondary" type="button" onClick={(event)=> {
                    this.handleClick({
                        event,

                    })
                }}>Keluar</Button> */}
            </ListItem>
            
        </div>
        <div>
=======
>>>>>>> d991478f40c06648fd53355bfa32d796404c9acf
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
            </ListItem>
            <ListItem button component={Link} to="/belanjasaya">
                <ListItemIcon>
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary="Belanja Saya" />
            </ListItem><Divider />
        </div>
        <div>
            <ListItem>
                <AppContext.Consumer>
                    {(context) => {
                        {/* let logout = (

                        ) */}
                        return (<div> { context.user.username } </div>);
                    }}
                </AppContext.Consumer>
                <Button variant="outlined" color="secondary" type="button" onClick={()=> {}}>Keluar</Button>
            </ListItem>
            
        </div>
    </div>
);