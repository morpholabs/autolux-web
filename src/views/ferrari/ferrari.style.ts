import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    mainContainer: {
      "& p,h1,h2,,h5,h6,h3,h4,input,button,typography": {
        fontFamily: "Red Rose !important",
      },
    },
    section: {
      minHeight: "896px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "grid",
      },
    },
    firstContainer: {
      // background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)),url(${require("assets/ferrari/firstPictureFerrari.png")})`,
      // backgroundPosition: "center center",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      // width: "100%",
      // minHeight: "896px",
      position: "relative",
      objectFit: "cover",
      // opacity:"70%",
      zIndex: -1,
      [theme.breakpoints.down("xs")]: {
        minHeight: "630px",
        width: "100%",
      },
    },
    firstSubContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "50px",
      position: "absolute",
      zIndex: 2,
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
        paddingRight:"50px" ,
        [theme.breakpoints.down("md")]:{
          paddingRight:"0px"
        }
      },
    },
    logoIcon: {
      [theme.breakpoints.down("xs")]: {
        height: "20px",
      },
    },
    socialMediaIcon: {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "22%",
        justifyContent: "center",
      },
    },
    textRest: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
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

    btnFirst: {
      color: "white",
      marginTop: "15px",
      borderRadius: "0",
      background:"rgba(255, 0, 0, 0.39)",
      width: "180px",
      marginLeft: "4px",
      "& .MuiButton-label": {
        fontSize: "20px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
        height: "45px",
        marginLeft: "10px",
        
      },
     
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    },
    btnMain: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    secondSide: {
      color: "white",
      width: "100%",
      position: "absolute",
      marginTop: "325px",
      textAlign:"center",
      [theme.breakpoints.down("xs")]: {
        marginTop: "140px",
        marginLeft: "0",
      },
    },

    loremIpsum: {
      fontSize: "70px",
      fontWeight: 700,
      marginTop: "60px",
      marginBottom: "60px",
      lineHeight:"75px",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: "40px",
        textAlign: "center",
        lineHeight:"41px",

      },
    },

    eighthTypo: {
      opacity: "70%",
      fontSize: "26px",
      "&.MuiTypography-body1": {
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          marginLeft: "6%",
          marginRight: "6%",
          fontSize: "18px",
        },
      },
    },
    chevronIcon: {
      width: "20%",
      height: "35px",
      [theme.breakpoints.down("sm")]:{
        height:"25px"
      }
    },
    fontAwesome:{
      fontSize:"20px",
      marginLeft:"15px"
    },
   
    secondContainerPicture: {
      minHeight: "80vh",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignContent: "flex-end",
      [theme.breakpoints.only("md")]: {
        minHeight: "60vh",
      },
      [theme.breakpoints.only("sm")]: {
        minHeight: "55vh",
      },
      [theme.breakpoints.down("xs")]: {
        background: `linear-gradient(rgba(0,0,0,0), rgba(50.0, 6.0, 7.0, 1.0)),url(${require("assets/ferrari/mobileSecondPicture.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "50vh",
      },
    },
    thirdContainer: {
      backgroundColor: "#320607",
      height: "425px",
      [theme.breakpoints.down("sm")]: {
        display: "grid",
        height: "530px",
      },
    },
    fourthContainer: {
      minHeight: "670px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        minHeight: "370px",
      },
    },
    fourthTypo: {
      color: "white",
      opacity: "50%",
      fontSize: "20px",
      paddingTop: "40px",
      [theme.breakpoints.only("md")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "15px",
        fontSize: "15px",
      },
    },

    detailsCar: {
      color: "white",
      paddingLeft: "60px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "15px",
      },
    },
    fifthTypo: {
      fontSize: "70px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "25px",
        fontWeight: 400,
      },
    },
    sixthTypo: {
      opacity: "50%",
      fontSize: "32px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },

    makeColum: {
      display: "grid",
    },
    subDetails: {
      fontSize: "22px",
      marginTop: "15px",
      fontVariant: "all-small-caps",
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
      },
    },

    blockDisplay: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    interyer: {
      display: "flex",
      marginTop: "100px",
      marginBottom: "60px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft:"-20px"
      },
    },
    inline: {
      height: "1px",
      backgroundColor: "#320607",
      width: "12%",
      marginRight: "10px",
      marginTop: "15px",
      marginLeft: "4%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    inline1: {
      height: "1px",
      backgroundColor: "#320607",
      width: "41%",
      marginRight: "10px",
      marginTop: "15px",
      marginLeft: "4%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    eksteryer: {
      fontWeight: 200,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        backgroundColor: "#320607",
        color: "white",
        justifyContent: "space-around",
      },
    },
    eksterior1: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        backgroundColor: "#320607",
        color: "white",
        justifyContent: "space-around",
      },
    },
    ninthTypo: {
      fontSize: "40px",
      marginLeft: "28%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        marginLeft: "0%",
      },
    },
    ninthTypo1: {
      fontSize: "42px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },

    ineteryerPicture: {
      background: `linear-gradient(rgba(50.0, 6.0, 7.0, 1.0),rgba(0,0,0,0) ),url(${require("assets/ferrari/interiorPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "90px",
      marginBottom: "90px",
      [theme.breakpoints.down("sm")]: {
        background: `linear-gradient(rgba(50.0, 6.0, 7.0, 1.0),rgba(0,0,0,0) ),url(${require("assets/ferrari/mobileVersion.png")})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "0px",
        marginBottom: "0px",
        height: "340px",
      },
    },
    textLorem: {
      padding: "25px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "15px",
        paddingTop:"50px",
      },
    },
    ekster:{
     [theme.breakpoints.down("xs")]:{
       marginLeft:"-9px"
     }
    },
    secondTypo: {
      marginTop: "15px",
      marginBottom: "240px",
      fontSize: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "initial",
        marginTop: "20px",
        marginBottom: "30%",
      },
    },
    fifthContainerPicture: {
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "650px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignContent: "flex-end",
    },
    eksteriorPicture: {
      background: `linear-gradient(rgba(50.0, 6.0, 7.0, 1.0),rgba(0,0,0,0) ),url(${require("assets/ferrari/fourthPicture.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "90px",
      marginBottom: "90px",
      marginLeft: "6%",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0%",
      },
    },
    interyer2: {
      display: "flex",
      marginTop: "60px",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        justifyContent: "end",
      },
    },
    wordInterior: {
      marginTop: "90px",
      paddingLeft: "24%",
      opacity: "30%",
      fontSize: "40px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        paddingLeft: "0%",
        fontSize: "25px",
        marginLeft:"-5px"
      },
    },
    seventhContainer: {
      background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url(${require("assets/ferrari/sixthContainer.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
      flexDirection: "column",
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
      minHeight: "700px",
      width: "100%",
      [theme.breakpoints.only("md")]: {
        minHeight: "600px",
      },
      [theme.breakpoints.down("sm")]: {
        minHeight: "555px",
      },
    },
    btnSecond: {
      color: "white",
      border: "1px solid",
      borderRadius: "0px",
      marginTop: "35px",
      width: "40%",
      height: "45px",
      fontSize: "18px",
      "& .MuiButton-label": {
        fontSize: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "50%",
        height: "38px",
      },
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    },
    inputFirst: {
      border: "1px solid",
      borderColor: "white",
      borderRadius: "0px",
      marginTop: "25px",
      width: "415px",
      height: "55px",
      "& .MuiInputBase-input": {
        color: "white",
        fontSize: "15px",
        marginLeft: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "45px",
        "& .MuiInputLabel-root": {
          fontSize: "15px",
        },
      },
    },
    secondBtn: {
      [theme.breakpoints.up("md")]: {
        justifySelf: "center",
      },
    },
    thirdTypo: {
      color: "#8C7373",
      paddingTop: "30px",
    },
    firstBtn: {
      marginTop: "30px",
      [theme.breakpoints.down("md")]: {
        marginTop: "0px",
      },
    },
    sixthContainer: {
      minHeight: "500px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        flexFlow: "column-reverse",
        minHeight: "200px",
      },
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
    contactText: {
      opacity: "50%",
      fontSize: "24px",
      marginTop: "15px",
      marginBottom: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
    contact: {
      fontWeight: 900,
      fontSize: "70px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "40px",
      },
    },
  };
});
