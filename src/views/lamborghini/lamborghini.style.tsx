import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    section: {
      minHeight: "896px",
      position: "relative",
      width: "100%",
      // [theme.breakpoints.down("sm")]:{
      //   display:"grid"
      // }
    },

    firstContainer: {
      background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)),url(${require("assets/lamborghini/firstLamborghiniPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    firstSubContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "50px",
      // [theme.breakpoints.down("sm")]: {
      //   marginTop: "50px",
      // },
    },
    menuIcon: {
      width: "30px",
      height: "28px",
      display: "flex",
      justifyContent: "center",
    },
    iconMenu: {
      [theme.breakpoints.down("xs")]: {
        height: "20px",
      },
    },
    iconAston: {
      "&.MuiGrid-grid-xs-4": {
        display: "flex",
        justifyContent: "flex-end",
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: "30px",
      },
    },
    logoIcon: {
      [theme.breakpoints.down("xs")]: {
        height: "45px",
      },
    },
    socialMediaIcon: {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "7%",
        justifyContent: "center",
      },
    },
    twitterIcon: {
      marginLeft: "15px",
      marginRight: "15px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
        marginRight: "5px",
      },
    },
    instagram: {
      color: "white",
      fontSize: "28px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },

    lamborghiniTitle: {
      color: "white",
      paddingLeft: "7%",
      marginTop:"-130px",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        paddingLeft: "0px",
      },
    },
    titleTypo: {
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: "40px",
      },
    },
    btnFirst: {
      [theme.breakpoints.down("xs")]: {
        display: "inline-block",
      },
    },
    firstTypo: {
      marginTop: "15px",
      marginBottom: "15px",
    },
    firstBtn: {
      color: "white",
      border: "1px solid",
      width: "130px",
    },
    secondContainer: {
      position: "relative",
      background: `url(${require("assets/lamborghini/huracanLamborghini.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "705px",
    },
    overlay: {
      position: "absolute",
      width: "61%",
      height: "100%",
      backgroundColor: "black",
      opacity: "0.5",
      clipPath: "polygon(0% 0%, 100% 0%, 47% 100%, 0% 100%)",
    },
    fourthContainer: {
      background: `url(${require("assets/lamborghini/aventadorLamborghini.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "725px",
      color: "white",
      position: "relative",
    },
    sixthContainer: {
      background: `url(${require("assets/lamborghini/sixthPictureLamborghini.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
      flexDirection: "column",
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
      minHeight: "700px",
      position:"relative",
      width: "100%",
      "&::after":{
        position:"absolute",
        content:'""',
        width:"100%",
        height:"100%",
        backgroundColor:"black",
        opacity:"0.5",
        top:0,
        left:0,
        right:0,
        bottom:0

      },

    },
    centerImages:{
      width: "100%",
       display: "flex",
      [theme.breakpoints.down("xs")]:{
        display:"none",
      }
    },
    thirdContainer:{
      minHeight: "896px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]:{
        display:"grid",
        minHeight:"318px"
      }
    },
    seventhTypo:{
      marginBottom: "15px" ,
      [theme.breakpoints.only("sm")]:{
        marginBottom:"10px"
      },
      [theme.breakpoints.down("xs")]:{
        marginBottom:"-244px"
      }
    },
    thirdConDetails:{
      marginRight: "8%",
      paddingLeft: "168px",
      paddingTop: "65px",
      [theme.breakpoints.only("md")]:{
        // paddingTop:"42px",
        paddingLeft:"110px"
      },
      [theme.breakpoints.only("sm")]:{
        paddingTop:"42px",
        paddingLeft:"77px"
      },
      [theme.breakpoints.down("xs")]:{
        paddingLeft: "10px",
        paddingTop: "7px",

      }
    },
    secondTypo: {
      color: "#FCFCFC",
      fontWeight: 400,
      fontSize: "190px",
      position: "absolute",
      opacity: "0.1",
    },
    crop:{
      [theme.breakpoints.down("sm")]:{
        display:"none"
      }
    },
    huracan: {
      color: "white",
      marginTop: "51px",
      marginLeft: "6%",
    },
    secondBtn: {
      color: "white",
      border: "1px solid",
      width: "120px",
    },
    loremIpsum: {
      color: "#94918F",
      marginTop: "15px",
      marginBottom: "40px",
    },
    subAventador: {
      background: `url(${require("assets/lamborghini/aventadorLamborghini.png")})`,
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      clipPath: "polygon(37% 0%, 100% 0%, 100% 100%, 0% 100%)",
      marginLeft:"3px",
      [theme.breakpoints.only("sm")]:{
        height:"200px",
        marginLeft:"2px",

      },
      [theme.breakpoints.down("xs")]:{
        height: "240px",
        clipPath: "polygon(75% 0%, 100% 0%, 100% 100%, 0% 100%)",
        marginLeft:"0px",
      }
    },
    conFourth:{
      textAlign: "end",
      marginTop: "130px",
      marginRight: "135px",
      [theme.breakpoints.down("xs")]:{
        marginRight:"8px"
      }
    },
    fourthTypo:{
      color: "#B6B6B6",
      [theme.breakpoints.only("md")]:{
        fontSize:"14px"

      },
      [theme.breakpoints.down("xs")]:{
        fontSize:"13px"

      }
    },
    subAventador1: {
      background: `url(${require("assets/lamborghini/img1.png")})`,
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      clipPath: "polygon(37% 0%, 100% 0%, 100% 100%, 0% 100%)",
      marginLeft:"3px",
      [theme.breakpoints.only("sm")]:{
        height:"200px",
        marginLeft:"2px",

      },
      [theme.breakpoints.down("xs")]:{
        height: "240px",
        clipPath: "polygon(80% 0%, 100% 0%, 100% 100%, 0% 100%)",
        marginLeft:"0px",


      }
    },
    leftPicture: {
      background: `url(${require("assets/lamborghini/leftPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      //  marginLeft: "-144px",
      width: "64%",
      marginRight: "-295px",
      marginLeft: "-87px",
      [theme.breakpoints.only("md")]:{
        height:"268px",
        marginLeft: "-72px",

      },
      [theme.breakpoints.only("sm")]:{
        height:"200px",
        marginRight: "-280px",
        marginLeft: "-87px",
      }
    },
    rightPicture: {
      width: "64%",
      background: `url(${require("assets/lamborghini/rightPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      marginLeft: "36px",
      right: "-51px",
      marginRight: "-55px",
      [theme.breakpoints.only("md")]:{
        height:"268px",
        marginLeft:"100px"
      },
      [theme.breakpoints.only("sm")]:{
        height:"200px",
        marginLeft:"145px"
      }
    },
    rightPicture1: {
      width: "64%",
      background: `url(${require("assets/lamborghini/pictureRight.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      marginLeft: "36px",
      right: "-51px",
      marginRight: "-55px",
      [theme.breakpoints.only("md")]:{
        height:"268px",
        marginLeft:"90px"
      },
      [theme.breakpoints.only("sm")]:{
        height:"200px",
        marginLeft:"145px"
      }
    },
    bottomSide:{
      marginTop: "15px",
      [theme.breakpoints.down("xs")]:{
        marginTop: "248px",
       }
    },
    leftBottomPicture: {
      background: `url(${require("assets/lamborghini/leftBottomPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      marginLeft: "-311px",
      width: "61% ",
      [theme.breakpoints.only("md")]:{
        width:"800px",
        marginLeft:"-422px"
       },
      [theme.breakpoints.only("sm")]:{
        width:"567px",
        height: "235px",

       },
      [theme.breakpoints.down("xs")]:{
       "clip-path" : "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
       width: "420px",
       height: "251px",
       marginLeft:"-265px"

      }
    },
    sixthTypo:{
      textAlign: "end",
      paddingTop: "40px",
      paddingRight:"40px",
      [theme.breakpoints.only("md")]:{
        paddingRight:"0px",
  
      },
      [theme.breakpoints.only("sm")]:{
        paddingRight:"0px",
  
      },
      [theme.breakpoints.down("xs")]:{
         paddingRight:"15px",
       // marginLeft:"-43px",
        paddingTop: "0px",

       }
    },
    secondTypo1: {
      color: "#FCFCFC",
      fontWeight: 400,
      fontSize: "190px",
      position: "absolute",
      opacity: "0.1",
      marginLeft: "38%",
    },
    overlay1: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: "0.5",
      clipPath: "polygon(67% 0, 100% 0%, 100% 99%, 39% 100%)",
    },

    aventador: {
      fontWeight: 700,
      fontSize: "65px",
      position: "relative",
     
      [theme.breakpoints.down("xs")]:{
        fontSize: "53px",
      }
    },
    inputFirst: {
      marginTop: "25px",
      width: "415px",
     "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline" :{
      borderWidth:"0px",
      borderColor:"unset",
      display:"none"

     },
     "& .MuiOutlinedInput-root:focused .MuiOutlinedInput-notchedOutline" :{
     // borderWidth:"0px",
      borderColor:"unset",
      display:"none"
     },
      "& .MuiInputBase-input ":{
         color:"white",
         marginLeft:"30px",
         marginTop:"15px"
      },

      "& .MuiInputLabel-root": {
        color: "white",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      "&:before, &:after": {
        width: "200px",
        left: "0px",
        height: "27px",
        zIndex: "-1",
      },
    },
    hexagonBtn: {
      position: "relative",
      display: "block",
      background: "transparent",
      width: "350px",
      height: "60px",
      lineHeight: "60px",
      textAlign: "center",
      fontSize: "15px",
      textDecoration: "none",
      textTransform: "uppercase",
      margin: "10px auto",
      [theme.breakpoints.down("xs")]:{
        width: "251px",
      },
      "&:before, &:after": {
        width: "350px",
        left: "0px",
        height: "27px",
        zIndex: "-1",
        border: "3px solid white",
        [theme.breakpoints.down("xs")]:{
          width: "255px",
        }
      },
      "&:before": {
        position: "absolute",
        content: '""',
        borderBottom: "none",
        webkitTransform: "perspective(15px) rotateX(5deg)",
        mozTransform: "perspective(15px) rotateX(5deg)",
        transform: "perspective(15px) rotateX(5deg); ",
      },
      "&:after": {
        position: "absolute",
        top: "32px",
        content: '""',
        borderTop: "none",
        webkitTransform: "perspective(15px) rotateX(-5deg)",
        mozTransform: "perspective(15px) rotateX(-5deg)",
        transform: "perspective(15px) rotateX(-5deg)",
      },
    },
    hexagonBtn1: {
      color: "white",
      position: "relative",
      display: "block",
      background: "transparent",
      width: "200px",
      height: "70px",
      lineHeight: "60px",
      textAlign: "center",
      fontSize: "15px",
      textDecoration: "none",
      textTransform: "uppercase",
      margin: "10px auto",
      "&:before, &:after": {
        width: "200px",
        left: "0px",
        height: "20px",
        zIndex: "6",
        border: "3px solid white",
      },
      "&:before": {
        position: "absolute",
        content: '""',
        borderBottom: "none",
        webkitTransform: "perspective(15px) rotateX(5deg)",
        mozTransform: "perspective(15px) rotateX(5deg)",
        transform: "perspective(15px) rotateX(5deg); ",
      },
      "&:after": {
        position: "absolute",
        top: "32px",
        content: '""',
        borderTop: "none",
        webkitTransform: "perspective(15px) rotateX(-5deg)",
        mozTransform: "perspective(15px) rotateX(-5deg)",
        transform: "perspective(15px) rotateX(-5deg)",
      },
      "& .MuiButton-label": {
        fontSize: "17px",
        marginTop: "-8px",
      },
    },
    hexagonBtn2: {
      color: "white",
      position: "relative",
      display: "block",
      background: "transparent",
      width: "175px",
      height: "70px",
      lineHeight: "60px",
      textAlign: "center",
      fontSize: "15px",
      textDecoration: "none",
      textTransform: "uppercase",
      // margin: "10px auto",
      "&:before, &:after": {
        width: "160px",
        left: "0px",
        height: "21px",
        zIndex: "6",
        border: "3px solid white",
      },
      "&:before": {
        position: "absolute",
        content: '""',
        borderBottom: "none",
        webkitTransform: "perspective(15px) rotateX(5deg)",
        mozTransform: "perspective(15px) rotateX(5deg)",
        transform: "perspective(15px) rotateX(5deg); ",
      },
      "&:after": {
        position: "absolute",
        top: "32px",
        content: '""',
        borderTop: "none",
        webkitTransform: "perspective(15px) rotateX(-5deg)",
        mozTransform: "perspective(15px) rotateX(-5deg)",
        transform: "perspective(15px) rotateX(-5deg)",
      },
      "& .MuiButton-label": {
        fontSize: "17px",
        marginTop: "-9px",
      },
    },
  };
});
