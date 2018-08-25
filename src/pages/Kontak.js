import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List, Divider, Typography} from '@material-ui/core';
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
            <List component="nav" className={classes.center} style={{ width: '35%'}}>
                <ListItem>
                    <Typography variant="headline">Kontak & Alamat kami                       
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography variant="title"> KhasLokal.com                      
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography > Batam              
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography >WhatsApp 081993732019
                    </Typography>
                </ListItem>
                <Divider />
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
