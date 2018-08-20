import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { List, Typography } from '@material-ui/core';


const mailFolderListItemsRight = ({data,id}) =>{
    if(id===''){
        return (
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
    }else{
        return(
            <div>
                <List>
                    <ListItem>
                        <Typography>Nama item : {data.name}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Harga item : {data.price}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Merk item : {data.brand}</Typography>
                    </ListItem>
                </List>
            </div>
        );
    }
    
};
 
export default mailFolderListItemsRight;
