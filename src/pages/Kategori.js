import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List, Avatar, ListItemText, Divider, ListItem, ListItemIcon} from '@material-ui/core';
import {Fastfood, LocalCafe, ColorLens,FlightTakeoff, LibraryBooks, PanTool, CardGiftcard} from '@material-ui/icons';
import Tas from './../assets/Bag.png';
import Aksesoris from './../assets/Aksesoris.png';
import Buah from './../assets/Buah.png';
import Daging from './../assets/Daging.png';
import Lauk from './../assets/Lauk.png';
import Sayur from './../assets/Sayur.png';
import Pohon from './../assets/Pohon.png';
import Baju from './../assets/Baju.png';
import Sepatu from './../assets/Sepatu.png';


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


function SimpleList (props) {
    const { classes } = props;
  
    return (
        <div >
            {/* <AppBar  color="inherit" className={classes.center}>
      <IconButton className={classes.menuButton} > <ArrowBack /></IconButton>
      Kategori
      </AppBar > */}
            <List component="nav" className={classes.center} style={{marginTop: '80px', width: '35%'}}>
                <ListItem button>
                    <ListItemIcon>
                        <Fastfood />
                    </ListItemIcon>
                    <ListItemText primary="Makanan" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <LocalCafe />
                    </ListItemIcon>
                    <ListItemText primary="Minuman" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <CardGiftcard />
                    </ListItemIcon>
                    <ListItemText primary="Oleh-oleh Batam" />
                </ListItem>            
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <PanTool />
                    </ListItemIcon>
                    <ListItemText primary="Kerajinan Tangan" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemIcon>
                        <LibraryBooks />
                    </ListItemIcon>
                    <ListItemText primary="Perizinan UKM" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemIcon>
                        <ColorLens />
                    </ListItemIcon>
                    <ListItemText primary="Jasa Desain" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <FlightTakeoff />
                    </ListItemIcon>
                    <ListItemText primary="Tiket" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="tas" src={Tas} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Tas"  />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="aksesoris" src={Aksesoris} style={{ width: '23px', height: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Aksesoris" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="buah" src={Buah} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Buah-buahan"  />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="pakaian" src={Baju} style={{ width: '23px', height: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Pakaian" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="sepatu" src={Sepatu} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Sepatu" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="pohon" src={Pohon} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Tanaman"  />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="sayur" src={Sayur} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Sayur-sayuran" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="lauk" src={Lauk} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Lauk-Pauk"  />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Avatar alt="daging" src={Daging} style={{ width: '23px', height: '23px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Daging" />
                </ListItem>
                <Divider />
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};
// {/* <Aksesoris src={Aksesoris} alt='aksesoris' /> */}
export default withStyles(styles)(SimpleList);
