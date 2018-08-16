import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {List, Divider, Typography, Button, Paper} from '@material-ui/core';
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
        <ListItem className={classes.center}>
        <Typography variant="subheading">
         Masuk Khas Local 
        </Typography>
        </ListItem>
        <ListItem className={classes.center}>
        <Typography variant="caption"  style={{textAlign: 'center'}} >
        Ceki-ceki poin Sale Stock <br />
        Pake kupon dan promo member <br />
        Ceki-ceki pesanan sebelumnya <br />
        Menyimpan produk kesukaan dulu <br />
        Bisa cek riwayat transaksi sebelumnya
        </Typography>
        </ListItem>
        <Divider />
        <ListItem className={classes.center}>
        <Typography variant="subheading" >
        Dengan Media Sosial                       
        </Typography>
        </ListItem>
        <ListItem className={classes.center}>
        <Button style={{width: '80%'}} variant="contained" color="primary" >
          Facebook
           </Button>
          </ListItem>
          <Divider />
            <ListItem className={classes.center} >
        <Typography variant="subheading" >
        Dengan No.HandPhone
        </Typography>
            </ListItem>
            <ListItem>
            <Form>
            <FormGroup>
          <Input invalid PhoneAndroid placeholder="No. HandPhone atau Email"/>
        </FormGroup>
        <FormGroup>
          <Input invalid  placeholder="Kata Sandi"/>
        </FormGroup>
              </Form>
            </ListItem>
            <ListItem className={classes.center}>
        <Button style={{width: '100%'}} variant="contained" color="secondary" >
          Daftar Sekarang
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
