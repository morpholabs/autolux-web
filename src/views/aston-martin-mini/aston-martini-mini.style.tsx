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










export const useStyles = makeStyles((theme) => {

    return {
        section:{
            minHeight:"896px",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            position:"relative"
        },
        firstContainer: {
            background: `url(${FirstPicture})`,
            // height:"100%",
            width: "100%",
            minHeight: "896px",
            // fontSize:"300px"
            // backgroundColor:"black"
        },
        thirdContainer:{
            background: `url(${SecondPicture})`,
            display:"flex",
            justifyContent:"center",
            alignContent:"center"

        },
        fifthContainer:{
            background: `url(${ThirdPicture})`,
            display:"flex",
            justifyContent:"center",
            alignContent:"center"

        },
        sixthContainer:{
            background: `url(${FourthPicture})`,

        },
        firstSubContainer:{
            display:"flex",
            justifyContent:"space-around",
            marginTop:"50px"

        },
        socialMediaIcon:{
            display:"flex"
        },
        twitterIcon:{
            marginLeft:"15px",
            marginRight:"15px"
        },
        instagramIcon:{
            position:"absolute",
            right:"14%",
            paddingTop:"7px"
        },
        instagram:{
            color:"white",
            fontSize:"28px"
        },
        menuIcon:{
            width:"30px",
            height:"28px"
        },
        firstSide:{
            width:"60%"
        },
        secondSide:{
            width:"40%",
            color:"white"
        },
        firstWord:{
            fontSize:"25px",
            fontWeight:200,
            [theme.breakpoints.down("xs")]:{

            }
        },
        loremIpsum:{
            fontSize:"45px",
            marginTop:"10px",
            marginBottom:"15px"
        },
        btnFirst:{
            color:"white",
            border:"ridge",
            marginTop:"15px",
            borderRadius:"0",
            width:"120px"

        },
        leftSide:{
            background: `url(${LeftSidePicture})`,
            width:"37%", 
            minHeight:"898",
            // minHeight:"896px",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            color:"white"
        },
        leftSide1:{
            background: `url(${GreyCar})`,
            width:"37%", 
            minHeight:"100%",
            //height:"auto",

            // minHeight:"896px",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
            color:"white"
        },
        // leftSide2:{
        //  width:"37%",

        // },
        secondContainer:{
            minHeight:"896px"
        },
        secondBtn:{
            color:"white",
            fontSize:"20px"
        },
        freeDiv:{
            height:"70%"
        },
        secondTypo:{
            fontSize:"35px",
            fontWeight:300
        },
        thirdTypo:{
            fontSize:"80px",
            fontWeight:900
        },
        firstDiv:{
            marginLeft:"10%"
        },
        rightSide:{
            width:"63%"
        },
        secondDiv:{
            padding:"10%"
        },
        shortInfo:{
            fontSize:"25px",
            marginBottom:"2%",
            color:"grey"
        },
        longInfo:{
            fontSize:"20px"
        },
        thirdDiv:{
            background: `url(${BlackCar})`,
            width:"50%",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            minHeight:"68vh",
            color:"white",
            paddingTop:"3%",
            paddingLeft:"3%",
            display:"grid"

        },
        thirdDiv1:{
            background: `url(${VantageCoupe})`,
            width:"50%",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            minHeight:"68vh",
            color:"white",
            paddingTop:"3%",
            paddingLeft:"3%",
            display:"grid"

        },
        fourthDiv:{
            background: `url(${InteriorPicture})`,
            width:"50%",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            minHeight:"68vh",
            color:"white",
            paddingTop:"3%",
            paddingLeft:"3%",
            display:"grid"

        },
        fourthDiv1:{
            background: `url(${VantageEksteryer})`,
            backgroundPosition:"center",
            // -webkit-background-size: cover,
            // -moz-background-size: cover,
            // -o-background-size: cover,
            // WebkitBackgroundSize:"cover",
            // MozBackgroundSize:"cover",
            // OBackgroundSize:"cover",
            width:"50%",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            minHeight:"68vh",
            color:"white",
            paddingTop:"3%",
            paddingLeft:"3%",
            display:"grid"

        },
        fifthDiv:{
            display:"flex"
        },
        thirdBtn:{
            color:"white",
            fontSize:"15px"
        },
        interyer:{
            fontSize:"25px",
            fontWeight:500
        },
        textLorem:{
            marginTop:"60%"
            //  marginBottom:"15px"
            // "& .MuiTypography-root ":{
            //     marginBottom:"15%"
            // }
        },
        sixthDiv:{
            display:"flex",
        
        },
 
        playWord:{
            color:"white",
            position:"absolute",
            left:"49%",
            paddingTop:"2%",
         
        },
     
        seventhDiv:{
            width:"65%"
        }  ,
        eighthDiv:{
            color:"white",
            width:"35%"

        }  ,
        sixthTypo:{
            fontSize:"50px",
            fontWeight:500,
        },
        seventhTypo:{
            fontSize:"25px",
            fontWeight:200,
            marginBottom:"10%"

        },
        firstInput:{
            borderRadius:"0px",
            width:"50%",
            '& .MuiOutlinedInput-root':{
                borderRadius:"0",
               // borderColor:"darkGrey",
               // border:"1px solid",
               border:"groove"
            },
            '& .MuiInputLabel-root':{
                color:"white"
            }
        },
        ninthDiv:{
          width:"100%",
          marginTop:"2%"
        },
        fourthBtn:{
            color:"white",
            width:"25%",
            border:"groove",
            borderRadius:"0",
            marginTop:"5%"
        },
        eleventhDiv:{
            minHeight:"18%"
        },
   
        btnSecond:{
            position:"relative",
        }

    }

})
