import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import {List, IconButton, Divider, Typography, Button} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';


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
            <List component="nav" className={classes.center} style={{marginTop: '80px', width: '35%'}}>
                <ListItem>
                    <Typography variant="headline">Kontak & Alamat kami                       
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography variant="title">PT Khas Lokal                      
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >Jl. Mayjen DI Panjaitan No. 1C, RT 001 / RW 006 (Samping Komplek Kemhan), Kelurahan Kebon Pala, Kecamatan Makasar, Jakarta Timur 13650              
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >WhatsApp 081993732019
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >LINE @khaslokalbatamid
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >Facebook fb.com/khaslokalbatam
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography > Twitter @KhasLokalBatam
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >Instagram @khaslokalbatam
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >Youtube Khas Lokal Batam
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >Email cs@khaslokalbatam.com
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Button variant="contained" color="secondary" style={{width: '100%'}}>
                        <IconButton color="inherit">
                            <Home />
                        </IconButton>Kembali Ke Beranda
                    </Button>
                </ListItem> 
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
