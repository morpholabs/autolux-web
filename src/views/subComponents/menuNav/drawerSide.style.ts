import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    listItem: {
      display: "grid",
    },
    socialMedia: {
      color: "white",
      fontSize: "30px",
    },

    iconMenu: {
      fontSize: "30px",
      color: "white",
      //paddingLeft: "80px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        height: "24px",
      },
    },
    logoIcon: {
      [theme.breakpoints.down("xs")]: {
        height: "35px",
      },
    },
    drawer: {
      "& .MuiDrawer-paper": {
        boxShadow: "10 10px white",
      },
      "& .MuiPaper-elevation16": {
        backgroundColor: "black",
        color: "white",
      },
    },

    list: {
      width: "400px",
    },
    fullList: {
      width: "auto",
    },
    firstDrawerTypo: {
      color: "white",
      marginBottom: "50px",
      [theme.breakpoints.down("xs")]: {
        paddingRight: "85px",
      },
    },
    drawerRightPicture: {
      height: "105px",
      [theme.breakpoints.down("xs")]: {
        width: "83%",
        marginLeft: "-15px",
      },
    },
    btnMenu:{
      "&.MuiButton-root":{
        padding:'0px'
      },
      "&.MuiButton-text":{
        padding:"0px"
      },
      [theme.breakpoints.down("xs")]: {
        marginRight:"15px"
      },
    },
  };
});
