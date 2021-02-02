import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "../../aston-martin-mini/aston-martini-mini.style";
import { Grid, Typography } from "@material-ui/core";





export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  const list = (left) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: left === "top" || left === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List >
        <ListItem button className={classes.listItem}>
          <ListItemIcon style={{flexDirection:"column"}}>
          <span style={{color:"white",fontSize:"30px",marginBottom:'25px'}}><i className="fas fa-bars"></i></span>
          <Typography variant="h6"
           className={classes.firstDrawerTypo}
           >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Typography>
          <Grid container xs={12} style={{display:"flex"}}>
            <Grid item xs={6}>
            <img
                  src={require("assets/lamborghini/aventador2.png")}
                  alt="fireSpot"
                />
            </Grid>
            <Grid item xs={6}>
            <img
                  src={require("assets/lamborghini/s-3.png")}
                  alt="fireSpot"
                  className={classes.drawerRightPicture}
                />
            </Grid>
          </Grid>
          <Typography style={{color:"white",marginTop:"15px"}} variant="h3">Əlaqə</Typography>
          <Grid container style={{display:"flex",color:"white",marginTop:"15px"}}>
           <Grid item><span style={{fontSize:"30px"}}><i className="far fa-map-marker"></i></span></Grid>
           <Grid item><Typography variant="h5"style={{marginTop:"12px",marginLeft:"20px"}}>Bakı,Azərbaycan</Typography>
           </Grid>
          </Grid>
          <Grid container style={{display:"flex",color:"white",marginTop:"15px"}}>
           <Grid item><span style={{fontSize:"30px"}}><i className="fal fa-phone"></i></span></Grid>
           <Grid item><Typography variant="h5"style={{marginTop:"12px",marginLeft:"15px"}}>+9945555555</Typography>
           </Grid>
          </Grid>
          <Typography variant="h5">BİZİ İZLƏYİN</Typography>
          <Grid item style={{display:"flex",justifyContent:"space-evenly",marginLeft:"-47px"}} > 
            <a href="">
            <span className={classes.socialMedia}><i className="fab fa-facebook"></i></span>
            </a>
            <a href="">
            <span className={classes.socialMedia}><i className="fab fa-instagram"></i></span>
            </a>
            <a href="">
            <span className={classes.socialMedia}><i className="fab fa-twitter"></i></span>
            </a>
            <a href="">
            <span className={classes.socialMedia}><i className="fab fa-linkedin"></i></span>
            </a>
            <a href="">
            <span className={classes.socialMedia}><i className="fab fa-youtube"></i></span>
            </a>

          </Grid>
          </ListItemIcon>

          <ListItemIcon style={{ marginTop: "15px", marginBottom: "15px" }}>
          
          </ListItemIcon>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button style={{
              display: state.left ?"none" :"block"
            }}
             onClick={toggleDrawer(true)}
         className={classes.btnMenu}>
          <img
            src={require("../../../assets/aston-martini/Menu.png")}
            alt="fireSpot"
            className={classes.iconMenu}
            id="iconMenu"/>
        </Button>
        <Drawer
          className={classes.drawer}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer(false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

