import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import {useStyles} from '../footer/footer.style'

export const Footer = () => {
     const classes=useStyles();
    return (
        <>
        <Grid container className={classes.footerContainer}>
          <Grid item xs={12} sm={6} md={6}  className={classes.autolux}>
              <span className={classes.copyRight}><i className="far fa-copyright"></i></span>
              <Typography style={{fontSize:"15px"}}>2021 Autolux,All Rights Reserved</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.morpho}>
           <Typography>Created by <a href="https://morpho.az/"> <img
                    src={require("assets/morphoLogo.png")}
                    alt="fireSpot"
                   style={{height:"40px",marginBottom:"-5px"}}
                  /></a> </Typography> 
          </Grid>
        </Grid>
        </>
    )
}
