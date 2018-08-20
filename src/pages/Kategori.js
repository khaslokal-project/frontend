import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {List, Avatar, ListItemText, Divider, ListItem, ListItemIcon} from '@material-ui/core';
import {Fastfood, LocalCafe, ColorLens,FlightTakeoff, LibraryBooks, PanTool, CardGiftcard} from '@material-ui/icons';
import Tas from './../assetImage/icon/Bag.png';
import Aksesoris from './../assetImage/icon/Aksesoris.png';
import Buah from './../assetImage/icon/Buah.png';
import Daging from './../assetImage/icon/Daging.png';
import Lauk from './../assetImage/icon/Lauk.png';
import Sayur from './../assetImage/icon/Sayur.png';
import Pohon from './../assetImage/icon/Pohon.png';
import Baju from './../assetImage/icon/Baju.png';
import Sepatu from './../assetImage/icon/Sepatu.png';
import Herbal from './../assetImage/icon/herbal.png';



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
    },
    
});


function Kategori (props) {
    const { classes } = props;
  
    return (
        <div >
            <List className={classes.center} style={{width: '35%'}}>
                <ListItem button component={Link} to="/makanan">
                    <ListItemIcon>
                        <Fastfood />
                    </ListItemIcon>
                    <ListItemText primary="Makanan" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/minuman">
                    <ListItemIcon>
                        <LocalCafe />
                    </ListItemIcon>
                    <ListItemText primary="Minuman" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/oleholeh">
                    <ListItemIcon>
                        <CardGiftcard />
                    </ListItemIcon>
                    <ListItemText primary="Oleh-oleh Batam" />
                </ListItem>            
                <Divider />
                <ListItem button component={Link} to="/kerajinantangan">
                    <ListItemIcon>
                        <PanTool />
                    </ListItemIcon>
                    <ListItemText primary="Kerajinan Tangan" />
                </ListItem><Divider />
                <ListItem button component={Link} to="/perizinanukm">
                    <ListItemIcon>
                        <LibraryBooks />
                    </ListItemIcon>
                    <ListItemText primary="Perizinan UKM" />
                </ListItem><Divider />
                <ListItem button component={Link} to="/jasa">
                    <ListItemIcon>
                        <ColorLens />
                    </ListItemIcon>
                    <ListItemText primary="Jasa Desain" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/tiket">
                    <ListItemIcon>
                        <FlightTakeoff />
                    </ListItemIcon>
                    <ListItemText primary="Tiket" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/tas">
                    <ListItemIcon>
                        <Avatar alt="tas" src={Tas} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Tas"  />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/aksesoris">
                    <ListItemIcon>
                        <Avatar alt="aksesoris" src={Aksesoris} style={{ width: '23px', height: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Aksesoris" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/buahbuahan">
                    <ListItemIcon>
                        <Avatar alt="buah" src={Buah} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Buah-buahan"  />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/pakaian">
                    <ListItemIcon>
                        <Avatar alt="pakaian" src={Baju} style={{ width: '23px', height: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Pakaian" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/pohon">
                    <ListItemIcon>
                        <Avatar alt="sepatu" src={Sepatu} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Sepatu" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/tanaman">
                    <ListItemIcon>
                        <Avatar alt="pohon" src={Pohon} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Tanaman"  />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/sayuran">
                    <ListItemIcon>
                        <Avatar alt="sayur" src={Sayur} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Sayur-sayuran" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/lauk">
                    <ListItemIcon>
                        <Avatar alt="lauk" src={Lauk} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Lauk-Pauk"  />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/daging">
                    <ListItemIcon>
                        <Avatar alt="daging" src={Daging} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Daging" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/herbal">
                    <ListItemIcon>
                        <Avatar alt="herbal" src={Herbal} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Herbal" />
                </ListItem>
                <Divider />
            </List>

        </div>
    );
}

Kategori.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Kategori);
