import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button'
import { List, Typography } from '@material-ui/core';


export const mailFolderListItemsRight = (
  <div>
    <List>
        <ListItem>
        <Typography>
        Keranjang belanja Sista masih kosong. Ayo diborong Sis, sebelum kehabisan.                       
        </Typography>
        </ListItem>
        <ListItem>
        <Button style={{marginRight: '10px', width: '100%'}} variant="contained" color="secondary" >
        Lanjut Belanja
        </Button>
        </ListItem>
        </List>   
  </div>
);
