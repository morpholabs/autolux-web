import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => {

    return {
        section: {
            minHeight: "896px",
            position: "relative"
        },
        firstContainer: {
            background: `url(${require("assets/aston-martini/firstPicture.png")})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            minHeight: "896px",
            [theme.breakpoints.down("xs")]: {
                minHeight: "786px",
                width: "100%",
            }
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
                minHeight: "600px"
            }
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
                minHeight: "600px"
            },

        },
        sixthContainer: {
            background: `url(${require("assets/aston-martini/fourthFullPicture.png")})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "flex-end",
            [theme.breakpoints.down("xs")]: {
                backgroundPosition: "center center",
                background: `url(${require("assets/aston-martini/backSide.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
        },
        firstSubContainer: {
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px"

        },
        socialMediaIcon: {
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
                paddingLeft: "7%"

            }
        },
        iconAston: {
            '&.MuiGrid-grid-xs-4': {
                display: "flex",
                justifyContent: "center"
            }

        },
        twitterIcon: {
            marginLeft: "15px",
            marginRight: "15px",
            [theme.breakpoints.down("sm")]: {
                marginLeft: "5px",
                marginRight: "5px"
            }
        },
        instagramIcon: {
            position: "absolute",
            right: "14%",
            paddingTop: "7px",

        },
        instagram: {
            color: "white",
            fontSize: "28px",
            [theme.breakpoints.down("xs")]: {

                fontSize: "20px"
            }
        },
        menuIcon: {
            width: "30px",
            height: "28px",
            display: "flex",
            justifyContent: "center"
        },
        firstSide: {
            width: "60%"
        },
        secondSide: {
            color: "white",
            width: "100%",
        },
        firstWord: {
            fontSize: "25px",
            fontWeight: 200,
            color: "#CFCECD",
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center",
            }
        },
        dolorNone: {
            [theme.breakpoints.down("sm")]: {
                display: "none",
            }
        },
        loremIpsum: {
            fontSize: "45px",
            marginTop: "10px",
            marginBottom: "15px",
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center",
                fontWeight: 800
            }
        },
        continueText: {
            [theme.breakpoints.up("md")]: {
                display: "none",
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
        btnFirst: {
            color: "white",
            border: "ridge",
            marginTop: "15px",
            borderRadius: "0",
            width: "120px",
            [theme.breakpoints.down("sm")]: {
                width: "150px",
            }
        },
        btnMain: {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center",
                marginTop: "5%"
            }
        },
        theSameClass: {
            width: "37%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            [theme.breakpoints.down("xs")]: {
                minHeight: "540px",
            },
            [theme.breakpoints.down("sm")]: {
                minHeight: "560px",
            }
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
            }
        },
        secondBtn: {
            color: "white",
            fontSize: "20px",
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },
        freeDiv: {
            height: "70%",

        },
        secondTypo: {
            fontSize: "35px",
            fontWeight: 300,
            [theme.breakpoints.down("xs")]: {
                fontSize: "20px",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "25px",
            }
        },
        thirdTypo: {
            fontSize: "80px",
            fontWeight: 900,
            [theme.breakpoints.down("xs")]: {
                fontSize: "60px"
            }
        },
        firstDiv: {
            marginLeft: "10%"
        },
        textBtn: {
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
            color: "black",
            fontWeight: 700,
            marginTop: "5%"
        },
        secondDiv: {
            minHeight:"25vh"
            // padding: "10%",
            // [theme.breakpoints.down("sm")]: {
            //     padding: "5%",
            //     minHeight: "60vh"
            // },
            // [theme.breakpoints.down("xs")]: {
            //     padding: "10%",
            //     minHeight: "60vh"
            // },
            // [theme.breakpoints.down("md")]: {
            //     padding: "7%",
            //     //minHeight: "60vh"
            // },
        },
        forTest:{
          padding: "8%",
          [theme.breakpoints.down("xl")]: {
            padding: "10%",

        },

        },
        loremText: {
            [theme.breakpoints.down("sm")]: {
                display: "none"
            },
        },
        loremText1:{
            [theme.breakpoints.down("xs")]: {
                display: "none"
            },
        },
        shortInfo: {
            fontSize: "25px",
            marginBottom: "2%",
            color: "grey"
        },
        longInfo: {
            fontSize: "20px",
            [theme.breakpoints.down("sm")]: {
                marginBottom: "5%",
            }
        },

        theSameClass3: {
            width: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            paddingTop: "3%",
            paddingLeft: "3%",
            //display: "grid",
            // [theme.breakpoints.down("xs")]: {
            //     width: "100%",
            //     minHeight: "162vh",
            //     paddingTop: "13%"
            // },
            [theme.breakpoints.down("sm")]: {
                width: "100%",
                minHeight: "60vh",
                paddingTop: "20px",
                paddingLeft: "40px",
            }
        },
        thirdDiv: {
            background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/blackCar.png")})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"340px",
            [theme.breakpoints.down("md")]: {
                height:"200px",
            }

        },
        thirdDiv1: {
            background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/vantageCoupe.png")})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"340px",
            [theme.breakpoints.down("md")]: {
                height:"200px",
            }
        },
        // theSameClass4:{
        //     width: "50%",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center center",
        //     color: "white",
        //     paddingTop: "3%",
        //     paddingLeft: "3%",
        //     display: "grid",
        //     [theme.breakpoints.down("xs")]: {
        //         width: "100%",
        //         minHeight: "59vh",
        //         paddingTop: "13%"
        //     },
        //     [theme.breakpoints.only("sm")]: {
        //         width: "100%",
        //         minHeight: "100vh",
        //     }
        // },
        fourthDiv: {
            background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/interiorPicture.png")})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"340px",
            [theme.breakpoints.down("md")]: {
                height:"200px",
            }        },
        fourthDiv1: {
            background: `linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1)),url(${require("assets/aston-martini/vantageEksteryer.png")})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"340px",
            [theme.breakpoints.down("md")]: {
                height:"200px",
            }        },
        fifthDiv: {
            display: "flex",
            // height: "38%",
            // [theme.breakpoints.only("md")]: {
            //     height: "23%",
            // },
            [theme.breakpoints.down("sm")]: {
                display: "grid"
            }
        },
        thirdBtn: {
            color: "white",
            fontSize: "15px",
            [theme.breakpoints.only("md")]: {
                fontSize: "9px",
            },
        },
        interyer: {
            fontSize: "25px",
            fontWeight: 500
        },
        textLorem: {
            marginTop: "28%",
            marginBottom:"8%",
            color: "#CFCECD",
            [theme.breakpoints.only("md")]: {
             marginTop:"40px",
             fontSize:"12px"
            },
            [theme.breakpoints.down("sm")]: {
            
                marginTop: "175px",
                fontSize:"17px",
                marginBottom:"25px"
            },
            // [theme.breakpoints.down("xs")]: {
            //     fontSize: "small",
            //     marginTop: "50%"
            // }

        },
  
        iconMenu: {
            [theme.breakpoints.down("xs")]: {
                height: "20px"
            }
        },
        logoIcon: {
            [theme.breakpoints.down("xs")]: {
                height: "50px"
            }
        },
        sixthDiv: {
            display: "flex",
        },

        playWord: {
            '&.MuiSvgIcon-root': {
                fontSize: "6rem",
                color: "white"
            }
            // color: "white",
            // position: "absolute",
            // left: "49%",
            // paddingTop: "2%",
            // [theme.breakpoints.only("xs")]: {
            //     left: "45%",
            //     paddingTop: "9%",
            // },
            // [theme.breakpoints.only("sm")]: {
            //     left: "48%",
            //     paddingTop: "4%",
            // }
        },

        seventhDiv: {
            width: "65%"
        },
        eighthDiv: {
            color: "white",
            [theme.breakpoints.down("xs")]: {
                minHeight: "98vh"
            }
            //width: "35%"
        },
        sixthTypo: {
            fontSize: "50px",
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center"
            },
            [theme.breakpoints.down("xs")]: {
                display: "flex",
                justifyContent: "center"
            }
        },
        seventhTypo: {
            fontSize: "25px",
            fontWeight: 200,
            marginBottom: "5%",
            color: "#CFCECD",
            [theme.breakpoints.down("sm")]: {
                textAlign: "center"
            }
        },
        firstInput: {
            borderRadius: "0px",
            width: "50%",
            marginTop: "2%",
            '& .MuiOutlinedInput-root': {
                borderRadius: "0",
                border: "groove",
                borderColor: "#CFCECD"
            },
            '& .MuiInputLabel-root': {
                color: "white"
            },
            [theme.breakpoints.only("xs")]: {
                width: "80%",
                justifySelf: "center",
                marginTop: "3%"
            },
            [theme.breakpoints.only("sm")]: {
                width: "60%",
                marginTop: "3%",
                justifySelf: "center",

            },
            [theme.breakpoints.only("md")]: {
                width: "80%",
                marginTop: "3%"
            }
        },
        ninthDiv: {
            width: "100%",
            marginTop: "2%",
            display: "grid",
            minHeight: "38vh",
            [theme.breakpoints.down("sm")]: {
                width: "100%",
                
            }
        },
        fourthBtn: {
            color: "white",
            width: "25%",
            border: "groove",
            borderRadius: "0",
            borderColor: "white",
            marginTop: "5%",
            [theme.breakpoints.down("sm")]: {
                width: "35%",
                justifySelf: "center"
            },
            [theme.breakpoints.down("xs")]: {
                width: "45%",
                justifySelf: "center"
            }
        },
        eleventhDiv: {
            //minHeight: "18%",
            [theme.breakpoints.up("sm")]: {
                minHeight: "15%",
            },
            [theme.breakpoints.down("xs")]: {
                minHeight: "18%",
            }
        },

        btnSecond: {
            position: "relative",
        }
    }

})
