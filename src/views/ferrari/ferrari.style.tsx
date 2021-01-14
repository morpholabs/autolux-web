import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    section: {
      minHeight: "896px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]:{
        display:"grid"
      }
    },
    firstContainer: {
      background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)),url(${require("assets/ferrari/firstPictureFerrari.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // width: "100%",
      // minHeight: "896px",
      [theme.breakpoints.down("xs")]: {
        minHeight: "570px",
        width: "100%",
     
      },
    },
    firstSubContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "50px",
      [theme.breakpoints.down("sm")]: {
       marginTop:"0px"
     
      },
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
        paddingLeft: "7%",
        justifyContent:"center"
      },
    },
    textRest:{
      [theme.breakpoints.up("sm")]:{
        display:"block"
      }
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

    btnFirst: {
      color: "white",
      border: "ridge",
      marginTop: "15px",
      borderRadius: "0",
      width: "180px",
      [theme.breakpoints.down("sm")]: {
        width: "150px",
        height:"45px"
      },
    },
    btnMain: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
      },
    },
    secondSide: {
      color: "white",
      width: "100%",
    },

    loremIpsum: {
        fontSize: "45px",
        fontWeight:900,
        marginTop: "10px",
        marginBottom: "15px",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
            fontWeight: 800,
            fontSize:"30px",
            textAlign:"center"
        }
    },

    eighthTypo: {
        color: "#CFCECD",
        '&.MuiTypography-body1': {
            [theme.breakpoints.down("sm")]: {
                textAlign: "center",
                marginLeft: "6%",
                marginRight: "6%",
            }
        }
    },
    chevronIcon:{
        width:"20%",
        height:"40px",
        paddingLeft:"7px"
    },
    secondContainerPicture:{
     
        minHeight:"80vh",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignContent:"flex-end",
        [theme.breakpoints.only("md")]:{
          minHeight:"60vh",
        },
        [theme.breakpoints.only("sm")]:{
          minHeight:"55vh",
        },
        [theme.breakpoints.down("xs")]:{
          background: `linear-gradient(rgba(0,0,0,0), rgba(50.0, 6.0, 7.0, 1.0)),url(${require("assets/ferrari/mobileSecondPicture.png")})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight:"50vh",

        }
    },
    thirdContainer:{
        backgroundColor:"#320607",
        height:"425px",
        [theme.breakpoints.down("sm")]:{
          display:"grid",
          height:"530px"
        }, 
    
    },
    fourthContainer:{
      minHeight: "670px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]:{
        minHeight:"370px"
      }, 
    },
    fourthTypo:{
      color: "#8C7373",
       paddingTop: "30px",
       [theme.breakpoints.only("md")]:{
        fontSize:"20px"
      },
       [theme.breakpoints.down("sm")]:{
        padding:"30px",
        fontSize:"15px"
      }
    },

    detailsCar:{
        color:"white",
        paddingLeft:"60px",
        [theme.breakpoints.down("xs")]:{
         paddingLeft:"15px"
        }

    },
    fifthTypo:{
      fontSize:"35px",
      [theme.breakpoints.down("xs")]:{
        fontSize:"25px",
        fontWeight:400
       }
    },
    sixthTypo:{
      color: "#8C7373",
      [theme.breakpoints.down("xs")]:{
        fontSize:"15px",
       }
    },

    makeColum:{
        display:"grid"
    },
    subDetails:{
        fontSize:"25px",
        marginTop:"15px",
        fontVariant:"all-small-caps" ,
        [theme.breakpoints.down("xs")]:{
          fontSize:"17px",
         }
    },

    blockDisplay:{
      [theme.breakpoints.down("xs")]:{
        display:"none"
       }
    },
   interyer:{
       display:"flex",
       marginTop:"100px",
       marginBottom:"60px",
       [theme.breakpoints.down("sm")]:{
         marginTop:"0px",
         marginBottom:"0px",
       }
   },
   inline:{
       height:"1px",
       backgroundColor:"#320607",
       width:"12%",
       marginRight:"10px",
       marginTop:"15px",
       marginLeft:"4%",
       [theme.breakpoints.down("sm")]:{
        display:"none"
       }, 
   },
   inline1:{
    height:"1px",
    backgroundColor:"#320607",
    width:"41%",
    marginRight:"10px",
    marginTop:"15px",
    marginLeft:"4%",
    [theme.breakpoints.down("sm")]:{
     display:"none"
    }, 
  },
   eksteryer:{
       fontWeight:200,
       textAlign:"center",
       [theme.breakpoints.down("sm")]:{
         display:"flex",
         backgroundColor:"#320607",
         color:"white",
         justifyContent:"space-around"
       }
   },
   eksterior1:{
    [theme.breakpoints.down("sm")]:{
      display:"flex",
      backgroundColor:"#320607",
      color:"white",
      justifyContent:"space-around"
    }
   },
   ninthTypo:{
    [theme.breakpoints.down("sm")]:{
     fontSize:"25px"
    }
   },
   ineteryerPicture:{
    background: `linear-gradient(rgba(50.0, 6.0, 7.0, 1.0),rgba(0,0,0,0) ),url(${require("assets/ferrari/interiorPicture.png")})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop:"90px",
    marginBottom:"90px",
    [theme.breakpoints.down("sm")]:{
      background: `linear-gradient(rgba(50.0, 6.0, 7.0, 1.0),rgba(0,0,0,0) ),url(${require("assets/ferrari/mobileVersion.png")})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop:"0px",
      marginBottom:"0px",
      height:"340px"
     }
 
   },
   textLorem:{
     padding:"25px",
     [theme.breakpoints.down("sm")]:{
      padding:"30px"    
     }
   },
   secondTypo:{
     marginTop:"15px",
     marginBottom:"240px",
     color:"#C2C0BF",
     [theme.breakpoints.down("sm")]:{
      //padding:"30px",
      fontSize:"initial",
      marginTop:"10px",
      marginBottom:"30%",
     }
   },
   fifthContainerPicture:{
   // background: `linear-gradient(rgba(0,0,0,0), rgba(50.0, 6.0, 7.0, 1.0)),url(${require("assets/ferrari/thirdPicture.png")})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight:"650px",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignContent:"flex-end"
   },
   eksteriorPicture:{
    background: `linear-gradient(rgba(50.0, 6.0, 7.0, 1.0),rgba(0,0,0,0) ),url(${require("assets/ferrari/fourthPicture.png")})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop:"90px",
    marginBottom:"90px",
    marginLeft:"6%",
    [theme.breakpoints.down("sm")]:{
      marginTop:"0px",
      marginBottom:"0px",
      marginLeft:"0%",
    }
   },
   interyer2:{
    display:"flex",
    marginTop:"60px",
    justifyContent:"flex-end",
    [theme.breakpoints.down("sm")]:{
      marginTop:"0px",
      justifyContent:"end"
   
    }
   },
   wordInterior:{
     marginTop:"90px",
     paddingLeft:"24%",
     [theme.breakpoints.down("sm")]:{
      marginTop:"0px",
      paddingLeft:"0%",
      fontSize:"25px"
     }
   },
   seventhContainer: {
    background: `url(${require("assets/ferrari/sixthContainer.png")})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color:"white",
    flexDirection:"column",
    textAlign:"center",
    alignContent:"center",
    justifyContent:"center",
    minHeight:"700px",
    width:"100%",
    [theme.breakpoints.only("md")]:{
      minHeight:"600px",
    },
    [theme.breakpoints.down("sm")]:{
      minHeight:"555px",
    },
  },
  btnSecond:{
    color:"white",
    border:"groove",
    borderRadius:"0px",
    marginTop:"35px",
    width:"40%",
    [theme.breakpoints.down("sm")]:{
      width:"50%"
     }
  },
  inputFirst:{
    border:"groove",
    borderRadius:"0px",
    marginTop:"25px",
    width:"415px",
    //marginLeft:"50px",
    '& .MuiInputLabel-root':{
      color:"white"
    },
    [theme.breakpoints.down("xs")]:{
      width:"100%",
     }
  },
  secondBtn:{
    [theme.breakpoints.up("md")]:{
      justifySelf:"center",

    }
  },
  thirdTypo:{
    color: "#8C7373", 
    paddingTop: "30px" 
  },
  firstBtn:{
    marginTop: "30px",
    [theme.breakpoints.down("md")]:{
      marginTop:"0px"
    }
  },
  sixthContainer:{
    minHeight: "500px",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("sm")]:{
      flexFlow:"column-reverse",
      minHeight: "200px",

    }
  }


  };
});
