import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
 

     mainContainer: {
      "& p,h1,h2,,h5,h6,h3,h4,input,button,typography,span": {
        fontFamily: "Linux Biolinum O !important",
      },
    
    },
 
 
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
    section: {
      minHeight: "896px",
      position: "relative",
    },
    contact:{
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
     [theme.breakpoints.down("sm")]:{
       display:"none"
     }
    },
    contactIcon:{
      color:"white",
      fontSize:"26px",
     [theme.breakpoints.up("md")]:{
       display:"none"
      },
    },

    firstContainer: {
      overflowX: "hidden",
      position:"relative",
      width: "100%",
      minHeight: "896px",
      objectFit:"cover",
      zIndex:-1,
      [theme.breakpoints.down("xs")]: {
        minHeight: "740px",
        width: "100%",
      },
    },
    video:{
      height:"100px"
    },
    theSameClasses1: {
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    thirdContainer: {
      background: `url(${require("assets/aston-martini/secondFullPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      [theme.breakpoints.down("xs")]: {
        background: `url(${require("assets/aston-martini/mobileSecondFullPicture.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "600px",
      },
    },
    fifthContainer: {
      background: `url(${require("assets/aston-martini/thirdFullPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      [theme.breakpoints.down("xs")]: {
        background: `url(${require("assets/aston-martini/vantageWhite.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "600px",
      },
    },
    sixthContainer: {
      background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1) ),url(${require("assets/aston-martini/fourthFullPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      justifyContent: "flex-end",
      minHeight: "896px",
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        backgroundPosition: "center center",
        background: `url(${require("assets/aston-martini/backSide.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "620px",
      },
    },
    seventhDiv: {
      position: "absolute",
      width: "61%",
      height: "100%",
      backgroundColor: "black",
      opacity: "0.5",
    },
    firstSubContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "50px",
      zIndex:2,
      position:"absolute"
    },
    socialMediaIcon: {
      display: "flex",
      justifyContent: "flex-end",
      paddingRight:"70px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "13%",
      },
    },
    iconAston: {
      "&.MuiGrid-grid-xs-4": {
        display: "flex",
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
    menuIcon: {
      width: "30px",
      height: "28px",
      display: "flex",
      justifyContent: "end",
      paddingLeft:"80px"
    },
    firstSide: {
      width: "60%",
    },
    secondSide: {
      color: "white",
      width: "100%",
     position:"absolute",
     marginLeft:"55%",
     marginTop:"350px",
     [theme.breakpoints.down("sm")]:{
       marginLeft:"0px",
       marginTop:"250px",

     }

    },
    firstWord: {
      fontSize: "26px",
      fontWeight: 400,
      color: "#CFCECD",
   
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    dolorNone: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    loremIpsum: {
      fontSize: "70px",
      marginTop: "10px",
      marginBottom: "50px",
      fontWeight: 500,
      animation: "type 10s",
      overflow: "hidden",
      whiteSpace: "nowrap",
      lineHeight:"75px",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        fontWeight: 800,
        fontSize:"40px"
      },
    },
    continueText: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    eighthTypo: {
      fontSize: "26px",
      opacity:"50%",
      "&.MuiTypography-body1": {
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          marginLeft: "6%",
          marginRight: "6%",
        },
      },
      [theme.breakpoints.down("xs")]:{
        fontSize:"20px"
      }
    },
    btnFirst: {
      color: "white",
      border: "1px solid",
      marginTop: "15px",
      borderRadius: "0",
      width: "125px",
      height:"54px",
      "&.MuiButton-root":{
      },
      "& .MuiButton-label":{
        fontSize:"18px"
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
      "&:hover": {
        background: "white",
        color: "black",
      },
    },
    btnMain: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
      },
    },
    theSameClass: {
      width: "37%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      color: "white",
      [theme.breakpoints.down("xs")]: {
        minHeight: "450px",
      },
      [theme.breakpoints.only("sm")]: {
        minHeight: "650px",
      },
    },
    leftSide: {
      background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/leftSidePicture.png")})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    leftSide1: {
      background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/greyCar.png")})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    secondContainer: {
      minHeight: "896px",
      display: "flex",
      [theme.breakpoints.only("md")]: {
        minHeight: "874px",
      },
    },
    secondBtn: {
      color: "white",
      fontSize: "15px",
       [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      "&:hover": {
        color: "grey",
      },
    },
    freeDiv: {
      height: "70%",
    },
    secondTypo: {
      fontSize: "26px",
      fontWeight: 300,
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    thirdTypo: {
      fontSize: "70px",
      fontWeight: 900,
      [theme.breakpoints.down("xs")]: {
        fontSize: "60px",
      },
    },
    firstDiv: {
      marginLeft: "10%",
    },
    textBtn: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      color: "black",
      fontWeight: 700,
      marginTop: "5%",
    },
    secondDiv: {
      minHeight: "25vh",
    },
    forTest: {
      padding: "8%",
      [theme.breakpoints.down("xl")]: {
        padding: "10%",
      },
    },
    loremText: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    loremText1: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    shortInfo: {
      fontSize: "26px",
      marginBottom: "2%",
      color: "black",
      fontWeight: 900,
    },
    longInfo: {
      fontSize: "22px",
      "&.MuiTypography-colorTextSecondary":{
       color:"black",
       opacity:"70%"
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "5%",
      },
    },

    theSameClass3: {
      width: "50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      color: "white",
      paddingTop: "3%",
      paddingLeft: "3%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        minHeight: "70vh",
        paddingTop: "20px",
        paddingLeft: "40px",
      },
    },
    thirdDiv: {
      background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/blackCar.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "340px",
      [theme.breakpoints.down("md")]: {
        height: "200px",
      },
    },
    thirdDiv1: {
      background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/vantageCoupe.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "340px",
      [theme.breakpoints.down("md")]: {
        height: "200px",
      },
    },
    fourthDiv: {
      background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/interiorPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "340px",
      [theme.breakpoints.down("md")]: {
        height: "200px",
      },
    },
    fourthDiv1: {
      background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/vantageEksteryer.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "340px",
      [theme.breakpoints.down("md")]: {
        height: "200px",
      },
    },
    fifthDiv: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "grid",
      },
    },
    thirdBtn: {
      color: "white",
      fontSize: "15px",
      [theme.breakpoints.only("md")]: {
        fontSize: "9px",
      },
      "&:hover": {
        color: "grey",
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
    interyer: {
      fontSize: "26px",
      fontWeight: 800,
    },
    textLorem: {
      marginTop: "28%",
      marginBottom: "8%",
      color: "#CFCECD",
      animation: "type 15s",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontSize:"20px",
      [theme.breakpoints.only("md")]: {
        marginTop: "40px",
        fontSize: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "175px",
        fontSize: "20px",
        marginBottom: "25px",
      },
    
    },
    textLorem2:{
      marginTop: "28%",
      marginBottom: "8%",
      opacity:"70%",
      animation: "type 20s",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontSize:"20px",
      [theme.breakpoints.only("md")]: {
        marginTop: "40px",
        fontSize: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "175px",
        fontSize: "20px",
        marginBottom: "25px",
      },
    },
    listItem:{
   display:"grid",
    },
    socialMedia:{
     color:"white",
     fontSize:"30px"
    },

    iconMenu: {
      fontSize:"30px",
      color:"white",
      paddingLeft:"80px",
      [theme.breakpoints.down("xs")]: {
        fontSize:"20px",
        height:"24px"
      },
    },
    logoIcon: {
      [theme.breakpoints.down("xs")]: {
        height: "35px",
      },
    },
    drawer:{
     "& .MuiDrawer-paper":{

     boxShadow:"10 10px white"
     },
     '& .MuiPaper-elevation16':{
       backgroundColor:"black",
       color:"white"
     }
    },
    sixthDiv: {
      display: "flex",
    },

    playWord: {
      "&.MuiSvgIcon-root": {
        fontSize: "6rem",
        color: "white",
      },
    },
    list:{
      width: "400px",

    },
    fullList:{
     width:"auto"
    },

    eighthDiv: {
      color: "white",
      marginTop:"100px",
      [theme.breakpoints.down("xs")]: {
        minHeight: "98vh",
      },
    },
    sixthTypo: {
      fontSize: "70px",
      fontWeight: 900,
      color: "white",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        fontSize: "50px",

      },
   
    },
    seventhTypo: {
      fontSize: "25px",
      fontWeight: 200,
      marginBottom: "5%",
      opacity:"50%",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        fontSize: "17px",

      },
    },
    firstInput: {
      borderRadius: "0px",
      border:"1px solid",
      borderColor:"white",
      height:"55px",
      width: "60%",
      marginTop: "2%",
      "&.MuiInputBase-root":{
        color:"white",
        paddingLeft:"15px",
      },
    
      [theme.breakpoints.only("xs")]: {
        width: "80%",
        justifySelf: "center",
        marginTop: "3%",
      },
      [theme.breakpoints.only("sm")]: {
        width: "60%",
        marginTop: "3%",
        justifySelf: "center",
      },
      [theme.breakpoints.only("md")]: {
        width: "80%",
        marginTop: "3%",
      },
    },
    ninthDiv: {
      width: "100%",
      marginTop: "2%",
      display: "grid",
      minHeight: "38vh",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    fourthBtn: {
      color: "white",
      width: "120px",
      border: "1px solid",
      borderRadius: "0",
      borderColor: "white",
      marginTop: "5%",
      "& .MuiButton-label":{
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
        justifySelf: "center",
      },
      "&:hover": {
        background: "white",
        color: "black",
      },
    },
    eleventhDiv: {
      [theme.breakpoints.up("sm")]: {
        minHeight: "15%",
      },
      [theme.breakpoints.down("xs")]: {
        minHeight: "18%",
      },
    },

    btnSecond: {
      position: "relative",
    },
    upButton: {
      right: "24px",
      bottom: "24px",
      zIndex: 100,
      position: "fixed",
      transform: "none",
      transition: "transform 225ms cubic-bezier(0.4,0,0.2,1)0ms",
      backgroundColor: "white",
      borderRadius: "60px",
    },
    firstDrawerTypo:{
      color:"white",
      marginBottom:"50px",
      [theme.breakpoints.down("xs")]:{
        paddingRight:"85px"
      }
    },
    drawerRightPicture:{
      height:"105px",
      [theme.breakpoints.down("xs")]:{
        width:"83%",
        marginLeft:"-15px"
      }
    }
  };
});
