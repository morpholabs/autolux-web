import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    
    "@global": {
      "@keyframes type": {
        "0%": {
          width: "0ch",
        },
        "100%": {
          width: "50ch",
        },
      },
    },
    mainContainer:{
      "& p,h1,h2,,h5,h6,h3,h4,input,button,typography,span": {
        fontFamily: "Proxima Nova !important",
      },
    },
    contact2:{
      color:"white",
      display:"flex",
      border:"1px solid",
      height:"54px",
      width:"125px",
      justifyContent:"center",
      alignItems:"center",
      cursor:"pointer",
      "&:hover":{
        backgroundColor:"white",
        color:"black"
      },
      [theme.breakpoints.down("xs")]:{
        display:"none"
      }
     },
     contactIcon:{
       color:"white",
       fontSize:"26px",
      [theme.breakpoints.up("sm")]:{
        display:"none"
      }
     },
    section: {
      minHeight: "896px",
      position: "relative",
      width: "100%",
    
    },

    firstContainer: {
      background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)),url(${require("assets/lamborghini/firstLamborghiniPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "896px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("xs")]:{
        minHeight:"565px"
      }
    },
    firstSubContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "50px"
    },
    menuIcon: {
      width: "30px",
      height: "28px",
      display: "flex",
      justifyContent: "center",
    },
    iconMenu: {
      fontSize:"30px",
      color:"white",
      [theme.breakpoints.down("xs")]: {
        fontSize:"20px"
      },
    },
    iconAston: {
      "&.MuiGrid-grid-xs-4": {
        display: "flex",
        justifyContent: "flex-end",
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: "10px",
      },
    },
    fifthTypo:{
      opacity:"50%", 
      marginBottom: "15px",
      fontSize:"26px",
      animation: "type 5s",
      overflow: "hidden",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("xs")]:{
        fontSize:"17px"
      }
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
        paddingLeft: "15%",
        justifyContent: "center",
      },
    },
    twitterIcon: {
      marginLeft: "15px",
      marginRight: "15px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "7px",
        marginRight: "7px",
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
        marginTop:"150px",

      },
    },
    titleTypo: {
      fontWeight: 600,
      fontSize:"70px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "40px",
      },
    },
    btnFirst: {
      [theme.breakpoints.down("xs")]: {
        display: "inline-block",
        marginLeft:"20px"
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
      [theme.breakpoints.down("xs")]:{
        height:"535px"
      }
    },
    overlay: {
      position: "absolute",
      width: "61%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      clipPath: "polygon(0% 0%, 100% 0%, 47% 100%, 0% 100%)",
      transition:"5s linear",
      [theme.breakpoints.down("xs")]:{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        width:"100%"
           
      }
    },
    fourthContainer: {
    
      [theme.breakpoints.between("sm","lg")]:{
        background: `url(${require("assets/lamborghini/aventadorLamborghini.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "725px",
        color: "white",
        position: "relative"
      },
    
      [theme.breakpoints.down("xs")]:{
        background: `url(${require("assets/lamborghini/aventadorMobile.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        position: "relative",
        width: "100%",
        height:"535px"
      }
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
        opacity:"75%",
        top:0,
        left:0,
        right:0,
        bottom:0

      },
      [theme.breakpoints.down("xs")]:{
        minHeight: "565px",

      }

    },
    centerImages:{
      width: "100%",
       display: "flex",
      [theme.breakpoints.between(1,1470)]:{
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
      paddingLeft: "220px",
      paddingTop: "65px",
      marginBottom:"70px",
      [theme.breakpoints.between(600,1470)]:{
        paddingTop:"42px",
        paddingLeft:"77px",
        height:"300px"
      },
      [theme.breakpoints.down("xs")]:{
        marginBottom:"10px",
        padding:"17px"

      }
    },
    interier:{
      fontWeight: 700,
       marginBottom: "15px",
       fontSize:"45px",
       [theme.breakpoints.down("xs")]:{
         fontSize:"30px"
       }
    },
    eksteryer:{
      fontWeight: 700,
       marginBottom: "15px",
       fontSize:"45px",
       [theme.breakpoints.down("xs")]:{
         fontSize:"30px"
       }
    },
    secondTypo: {
      fontWeight: 400,
      fontSize: "213px",
      position: "absolute",
      opacity: "0.1",
      transition:"1s linear",
      [theme.breakpoints.down("xs")]:{
        display:"none"
      }
    },
    tenTypo:{
      fontSize:"24px",
      [theme.breakpoints.down("xs")]:{
        fontSize:"18px"
      }
    },
    firstGrid:{
      position:"absolute",
      marginTop:"290px",
      transition:"1s linear",
      [theme.breakpoints.down("xs")]:{
        marginTop:"290px"
      }
    },
    secondGrid:{
      marginTop: "140px",
       marginLeft: "5%",
       [theme.breakpoints.down("xs")]:{
         marginTop:"47px"
       }
    },
    ninthTypo:{
      fontWeight: 700,
      position:"absolute",
      fontSize:"70px",
      transition:"1s linear",
      [theme.breakpoints.down("xs")]:{
        fontSize:"55px"
      }
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
      [theme.breakpoints.down("xs")]:{
        marginLeft:"0px"
      }
    },
    secondBtn: {
      color: "white",
      border: "1px solid",
      width: "120px",
    },
    loremIpsum: {
      marginTop: "90px",
      marginBottom: "40px",
      position:"absolute",
      opacity:"50%",
      transition:"1s linear"
    },
    subAventador: {
      background: `url(${require("assets/lamborghini/aventadorLamborghini.png")})`,
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "446px",
      clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)",
      marginLeft:"3px",
      [theme.breakpoints.between(600,1470)]:{
        height:"350px",
        marginLeft:"2px",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      [theme.breakpoints.down("xs")]:{
        height: "240px",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
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
      opacity:"50%",
      fontSize:"22px",
      [theme.breakpoints.down("xs")]:{
        fontSize:"16px"

      }
    },
    subAventador1: {
      [theme.breakpoints.only("lg")]:{
        background: `url(${require("assets/lamborghini/img1.png")})`,
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "446px",
        clipPath: "polygon(37% 0%, 100% 0%, 100% 100%, 0% 100%)",
        marginLeft:"3px",

      },
      [theme.breakpoints.between("sm","md")]:{
        background: `url(${require("assets/lamborghini/aventadorLamborghini.png")})`,
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "350px",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        marginLeft:"0px",

      },
      [theme.breakpoints.down("xs")]:{
        background: `url(${require("assets/lamborghini/aventadorLamborghini.png")})`,
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "174px",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        marginLeft:"0px",


      }
    },
    interyer:{
      fontWeight: 700, 
      marginBottom: "15px",
      fontSize:"45px" ,
      [theme.breakpoints.down("xs")]:{
        fontSize:"30px"
      }
    },
    leftPicture: {
      background: `url(${require("assets/lamborghini/leftPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      width: "64%",
      marginRight: "-295px",
      marginLeft: "-66px",
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
    leftPicture1: {
      background: `url(${require("assets/lamborghini/leftPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "330px",
      width: "64%",
      marginRight: "-270px",
      marginLeft: "-66px",
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
      marginLeft: "-16px",
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
      marginLeft: "-40px",
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
      [theme.breakpoints.only("lg")]:{
        marginTop: "15px",
      },
      [theme.breakpoints.between(600,1470)]:{
        flexDirection:"column-reverse",
        marginTop:"0px",
        
       },
      [theme.breakpoints.down("xs")]:{
        flexDirection:"column-reverse",
        marginTop:"270px"
       }
    },
    leftBottomPicture: {
   
      [theme.breakpoints.only("lg")]:{
        background: `url(${require("assets/lamborghini/leftBottomPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "435px",
      marginLeft: "-350px",
      width: "62% ",
       },
       [theme.breakpoints.between(600,1470)]:{
        background: `url(${require("assets/lamborghini/s-3.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
         height: "455px",

       },
      [theme.breakpoints.down("xs")]:{
        background: `url(${require("assets/lamborghini/s-3.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
         height: "251px",

       },
    },
    sixthTypo:{
      textAlign: "end",
       paddingTop: "57px",
      paddingRight:"70px",
      [theme.breakpoints.between(600,1470)]:{
        paddingRight:"0px",
        textAlign:"initial",
        marginBottom:"70px",
        paddingLeft:"78px"
      },
      [theme.breakpoints.down("xs")]:{
        textAlign:"initial",
        padding:"16px",
       }
    },
    eleventhTypo:{
      fontWeight: 700,
       marginBottom: "15px",
       fontSize:"45px",
       [theme.breakpoints.down("xs")]:{
         fontSize:"30px"
       }
    },
    contact:{
      fontWeight: 700,
       fontSize: "70px",
       zIndex:1,
       [theme.breakpoints.down("xs")]:{
         fontSize:"40px"
       }
    },
    contactLorem:{
      fontSize: "24px",
      marginTop: "15px",
      marginBottom: "15px",
      zIndex:1,
      [theme.breakpoints.down("xs")]:{
        fontSize:"17px"
      }
    },
    secondTypo1: {
      color: "#FCFCFC",
      fontWeight: 400,
      fontSize: "213px",
      position: "absolute",
      opacity: "0.1",
      marginLeft: "38%",
      [theme.breakpoints.down("xs")]:{
        display:"none"
      }
    },
    overlay1: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      clipPath: "polygon(67% 0%, 100% 0%, 100% 99%, 39% 100%)",
      [theme.breakpoints.down("xs")]:{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

      }
    },

    aventador: {
      fontWeight: 700,
      fontSize: "70px",
      position: "relative",
      transition:"1s linear !important",
      [theme.breakpoints.down("xs")]:{
        fontSize: "45px",
      }
    },
    loremTypo:{
      fontSize:"24px",
      transition:"1s linear",
      position:"relative",
      [theme.breakpoints.down("xs")]:{
        fontSize:"17px"
      }
    },
    inputFirst: {
      marginTop: "25px",
      width: "25%",
      borderColor:"white",
      border:"1px solid",
      zIndex:1,
      height:"55px",
      [theme.breakpoints.between("sm","md")]:{
        width:"55%"
      },
      [theme.breakpoints.down("xs")]:{
        width:"90%"
      },
      "& .MuiInputBase-input":{
        color:"white",
        marginLeft:"15px",
        fotSize:"20px"
      }
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
        fontSize: "20px",
        marginTop: "-8px",
        position:"relative",
        zIndex:1
      
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
        fontSize: "20px",
        marginTop: "-9px",
        [theme.breakpoints.down("xs")]:{
          fontSize:"17px"
        }
      },
    },
  };
});
