import { makeStyles } from '@material-ui/core/styles';
import FirstPicture from '../../assets/aston-martini/firstPicture.png';
import SecondPicture from '../../assets/aston-martini/secondFullPicture.png';
import ThirdPicture from '../../assets/aston-martini/thirdFullPicture.png';
import FourthPicture from '../../assets/aston-martini/fourthFullPicture.png';
import LeftSidePicture from '../../assets/aston-martini/leftSidePicture.png';
import BlackCar from '../../assets/aston-martini/blackCar.png';
import InteriorPicture from '../../assets/aston-martini/interiorPicture.png';
import GreyCar from '../../assets/aston-martini/greyCar.png';
import VantageCoupe from '../../assets/aston-martini/vantageCoupe.png';
import VantageEksteryer from '../../assets/aston-martini/vantageEksteryer.png';
import MobileSecondPicture from '../../assets/aston-martini/mobileSecondFullPicture.png';
import VantageWhite from '../../assets/aston-martini/vantageWhite.png';
import BackSide from '../../assets/aston-martini/backSide.png';


export const useStyles = makeStyles((theme) => {

    return {
        section: {
            minHeight: "896px",
            position: "relative"
        },
        firstContainer: {
            background: `url(${FirstPicture})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           // backgroundAttachment:"fixed",
            width: "100%",
            minHeight: "896px",
            [theme.breakpoints.only("xs")]: {
                minHeight: "90vh",
            }
        },
        thirdContainer: {
            background: `url(${SecondPicture})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            [theme.breakpoints.only("sm")]: {
                backgroundPosition: "center center",
            },
            [theme.breakpoints.only("xs")]: {
                background: `url(${MobileSecondPicture})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                minHeight: "70vh"
            }

        },
        fifthContainer: {
            background: `url(${ThirdPicture})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            [theme.breakpoints.only("xs")]: {
                backgroundPosition: "center center",
                background: `url(${VantageWhite})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "70vh"
            },

        },
        sixthContainer: {
            background: `url(${FourthPicture})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "flex-end",
            [theme.breakpoints.only("xs")]: {
                backgroundPosition: "center center",
                background: `url(${BackSide})`,
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
            paddingTop: "7px"
        },
        instagram: {
            color: "white",
            fontSize: "28px"
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
        leftSide: {
            background: `url(${LeftSidePicture})`,
            width: "37%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            [theme.breakpoints.only("xs")]: {
                minHeight: "540px",
            },
            [theme.breakpoints.only("sm")]: {
                minHeight: "1000px",
            }
        },
        leftSide1: {
            background: `url(${GreyCar})`,
            width: "37%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            [theme.breakpoints.only("xs")]: {
                minHeight: "540px",
            },
            [theme.breakpoints.only("sm")]: {
                minHeight: "1000px",
            }
        },
        secondContainer: {
            minHeight: "896px",
            display:"flex"
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
            [theme.breakpoints.only("xs")]: {
                fontSize: "20px",
            },
            [theme.breakpoints.only("sm")]: {
                fontSize: "35px",
            }
        },
        thirdTypo: {
            fontSize: "80px",
            fontWeight: 900,
            [theme.breakpoints.only("xs")]: {
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
        rightSide: {
            //width: "63%"

        },
        secondDiv: {
            padding: "10%",
            [theme.breakpoints.only("sm")]: {
                padding: "5%",
                minHeight:"60vh"
            },
            [theme.breakpoints.only("xs")]: {
                padding: "10%",
                minHeight: "60vh"
            },
        },
        loremText: {
            [theme.breakpoints.down("sm")]: {
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
        thirdDiv: {
            background: `url(${BlackCar})`,
            width: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            paddingTop: "3%",
            paddingLeft: "3%",
            display: "grid",
            [theme.breakpoints.only("xs")]: {
                width: "100%",
                minHeight: "59vh",
                paddingTop: "13%"
            },
            [theme.breakpoints.only("sm")]: {
                width: "100%",
                minHeight: "100vh",
            }

        },
        thirdDiv1: {
            background: `url(${VantageCoupe})`,
            width: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            paddingTop: "3%",
            paddingLeft: "3%",
            display: "grid",
            [theme.breakpoints.only("xs")]: {
                width: "100%",
                minHeight: "59vh",
                paddingTop: "13%"
            },
            [theme.breakpoints.only("sm")]: {
                width: "100%",
                minHeight: "90vh",
            }

        },
        fourthDiv: {
            background: `url(${InteriorPicture})`,
            width: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
           // minHeight: "68vh",
            color: "white",
            paddingTop: "3%",
            paddingLeft: "3%",
            display: "grid",
            [theme.breakpoints.only("xs")]: {
                width: "100%",
                minHeight: "59vh",
                paddingTop: "13%"
            },
            [theme.breakpoints.only("sm")]: {
                width: "100%",
                minHeight: "100vh",
            }

        },
        fourthDiv1: {
            background: `url(${VantageEksteryer})`,
            backgroundPosition: "center center",
            width: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           // minHeight: "68vh",
            color: "white",
            paddingTop: "3%",
            paddingLeft: "3%",
            display: "grid",
            [theme.breakpoints.only("xs")]: {
                width: "100%",
                minHeight: "59vh",
                paddingTop: "13%"
            },
            [theme.breakpoints.only("sm")]: {
                width: "100%",
                minHeight: "100vh",
            }

        },
        fifthDiv: {
            display: "flex",
            height: "38%",
           //height:"auto",
            [theme.breakpoints.down("sm")]: {
                display: "grid"
            }
        },
        thirdBtn: {
            color: "white",
            fontSize: "15px"
        },
        interyer: {
            fontSize: "25px",
            fontWeight: 500
        },
        textLorem: {
            marginTop: "20%",
            [theme.breakpoints.only("xs")]: {
                fontSize: "small"
            }

        },
        sixthDiv: {
            display: "flex",
        },

        playWord: {
            color: "white",
            position: "absolute",
            left: "49%",
            paddingTop: "2%",
            [theme.breakpoints.only("xs")]: {
                left: "45%",
                paddingTop: "9%",
            },
            [theme.breakpoints.only("sm")]: {
                left: "48%",
                paddingTop: "4%",
            }
        },

        seventhDiv: {
            width: "65%"
        },
        eighthDiv: {
            color: "white",
            [theme.breakpoints.only("xs")]: {
                minHeight: "98vh"
            }
            //width: "35%"
        },
        sixthTypo: {
            fontSize: "50px",
            fontWeight: 500,
            [theme.breakpoints.only("xs")]: {
                display: "flex",
                justifyContent: "center"
            }
        },
        seventhTypo: {
            fontSize: "25px",
            fontWeight: 200,
            marginBottom: "5%",
            [theme.breakpoints.only("xs")]: {
                textAlign: "center"
            }
        },
        firstInput: {
            borderRadius: "0px",
            width: "50%",
            marginTop:"2%",
            '& .MuiOutlinedInput-root': {
                borderRadius: "0",
                border: "groove"
            },
            '& .MuiInputLabel-root': {
                color: "white"
            },
            [theme.breakpoints.only("xs")]: {
                width: "85%",
                justifySelf: "center",
                marginTop: "3%"
            },
            [theme.breakpoints.only("sm")]: {
                width: "65%",
                marginTop: "3%"
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
            minHeight: "38vh"
        },
        fourthBtn: {
            color: "white",
            width: "25%",
            border: "groove",
            borderRadius: "0",
            marginTop: "5%",
            [theme.breakpoints.only("xs")]: {
                width: "45%",
                justifySelf: "center"
            }
        },
        eleventhDiv: {
            //minHeight: "18%",
            [theme.breakpoints.up("sm")]: {
                minHeight: "15%",
            },
            [theme.breakpoints.only("xs")]: {
                minHeight: "18%",
            }
        },

        btnSecond: {
            position: "relative",
        }
    }

})
