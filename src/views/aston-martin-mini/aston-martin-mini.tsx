import {
  Button,
  Grid,
  InputBase,
  Typography
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Aos from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import React, { useEffect } from "react";
import { TemporaryDrawer } from "views/subComponents/menuNav/drawerSide";
import { useStyles } from "./aston-martini-mini.style";

 
export const AstonMartinMini = () => {
  const classes = useStyles();
 

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  // -------------------------------SIDEBAR----------------------------------------------


  return (
      <>
      <Grid container xs={12} className={classes.mainContainer}>
        {/* ----------------------FIRST CONTAINER----------------------------- */}
        <Grid container xs={12}>
          {/* ---------------HEADER------------- */}
          <video autoPlay loop muted className={classes.firstContainer}>
            <source
              src={require("assets/aston-martini-video/astonMartinVideoTrim1.mp4")}
              type="video/mp4"
            />
          </video>

          <Grid item container className={classes.firstSubContainer}>
            <Grid item xs={4} className={classes.menuIcon}>
              <TemporaryDrawer fFamily="Linux Biolinum O" />
            </Grid>
            <Grid item xs={4} className={classes.iconAston}>
              <div>
                <img
                  src={require("../../assets/aston-martini/logo.png")}
                  alt="fireSpot"
                  className={classes.logoIcon}
                />
              </div>
            </Grid>
            <Grid item container xs={4} className={classes.socialMediaIcon}>
              <div className={classes.contact} onClick={()=>{
              const getobject=document.getElementById("ƏLAQƏ");
              window.scrollTo({top:getobject?.offsetTop,behavior:"smooth"})
            }}>
              <span style={{marginRight:"5px",fontSize:"20px"}}><i className="far fa-comment-alt-dots"></i></span>
                <Typography variant="h6">ƏLAQƏ</Typography>
              </div>
              <span  className={classes.contactIcon}><i className="far fa-comment-alt-dots"></i></span>

            </Grid> 
          </Grid>
          <Grid
            item
            xs={12}
            lg={12}
            className={classes.secondSide}
            data-aos="fade-left"
          >
            <Typography color="textSecondary" className={classes.firstWord}>
              ASTON MARTIN
            </Typography>
            <Typography className={classes.loremIpsum}>
              LOREM IPSUM <br />
              <span className={classes.dolorNone}>DOLOR SIT AMET</span>
            </Typography>
            <Typography className={classes.eighthTypo}>
              Lorem ipsum dolor sit amet, consectetur
              <span className={classes.continueText}>
                adipiscing elit,sed do eiusmod tempor incididunt ut labore et
                dolore magna
              </span>
            </Typography>
            <Grid item className={classes.btnMain}>
              <Button className={classes.btnFirst}>Daha Çox

              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------------SECOND CONTAINER----------------------------- */}

        <Grid container xs={12} className={classes.secondContainer} id="DBX">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            data-aos="fade-right"
            className={clsx(classes.leftSide, classes.theSameClass)}
          >
            <div className={classes.freeDiv}></div>
            <div className={classes.firstDiv}>
              <Typography className={classes.secondTypo}>
                Aston Martin's first SUV
              </Typography>
              <Typography className={classes.thirdTypo}>DBX</Typography>
              <a href="" className={classes.secondBtn}>
                DAHA ÇOX
              </a>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={7} className={classes.secondDiv} >
            <Grid item xs={12} data-aos="fade-left" className={classes.forTest}>
              <Typography className={classes.shortInfo}>
                QISA MƏLUMAT
              </Typography>
              <Typography color="textSecondary" className={classes.longInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
                <span className={classes.loremText}>
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </span>
              </Typography>
              <a href="" className={classes.textBtn}>
                DAHA ÇOX
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.fifthDiv}
             
            >
              <Grid
                item
                xs={12}
                lg={6}
                className={clsx(classes.thirdDiv, classes.theSameClass3) }
                data-aos="fade-left"
              >
                <Typography className={classes.interyer}>INTERYER</Typography>
                <Typography className={classes.textLorem}>
                  Lorem ipsum dolor sit amet
                  <span className={classes.loremText1}>
                    , consectetur adipiscing elit,
                  </span>
                </Typography>
                <a href="" className={classes.thirdBtn}>
                  DAHA ÇOX
                </a>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                className={clsx(classes.fourthDiv, classes.theSameClass3)}
                data-aos="fade-left"
                style={{transition:"1s linear"}}
              >
                <Typography className={classes.interyer}>EKSTERYER</Typography>
                <Typography className={classes.textLorem}>
                  Lorem ipsum dolor sit amet
                  <span className={classes.loremText1}>
                    , consectetur adipiscing elit,
                  </span>
                </Typography>
                <a href="" className={classes.thirdBtn}>
                  DAHA ÇOX
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------------THIRD CONTAINER----------------------------- */}

        <Grid
          container
          data-aos="fade-button"
          className={clsx(classes.section, classes.thirdContainer)}
        >
          <a href="">
            <div className={classes.sixthDiv}>
              <PlayCircleOutlineIcon className={classes.playWord} />
              {/* <img src={require('../../assets/aston-martini/circleIcon.png')} alt="fireSpot" />
              <Typography className={classes.playWord}>PLAY</Typography> */}
            </div>
          </a>
        </Grid>
        {/* ----------------------FOURTH CONTAINER----------------------------- */}

        <Grid container xs={12} className={classes.secondContainer} >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            data-aos="fade-right"
            className={clsx(classes.leftSide1, classes.theSameClass)}
            id="VANTAGE"
          >
            <div className={classes.freeDiv}></div>
            <div className={classes.firstDiv}>
              <Typography className={classes.secondTypo}>
                The Archetypal Hunter
              </Typography>
              <Typography className={classes.thirdTypo}>Vantage</Typography>
              <a href="" className={classes.secondBtn}>
                DAHA ÇOX
              </a>
              {/* <Button >DAHA ÇOX</Button> */}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={7} className={classes.secondDiv} >
            <Grid item xs={12} className={classes.forTest} data-aos="fade-left">
              <Typography className={classes.shortInfo}>
                QISA MƏLUMAT
              </Typography>
              <Typography color="textSecondary" className={classes.longInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
                <span className={classes.loremText}>
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </span>
              </Typography>
              <a href="" className={classes.textBtn}>
                DAHA ÇOX
              </a>
            </Grid>
            <Grid item xs={12} className={classes.fifthDiv}>
              <Grid
                item
                xs={12}
                lg={6}
                className={clsx(classes.thirdDiv1, classes.theSameClass3)}
                data-aos="fade-left"
              >
                <Typography className={classes.interyer}>INTERYER</Typography>
                <Typography className={classes.textLorem2}>
                  Lorem ipsum dolor sit amet{" "}
                  <span className={classes.loremText1}>
                    consectetur adipiscing elit,
                  </span>
                </Typography>
                <a href="" className={classes.thirdBtn}>
                  DAHA ÇOX
                </a>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                className={clsx(classes.fourthDiv1, classes.theSameClass3)}
                data-aos="fade-left"
                style={{transition:"1s linear"}}
              >
                <Typography className={classes.interyer}>EKSTERYER</Typography>
                <Typography className={classes.textLorem2}>
                  Lorem ipsum dolor sit amet
                  <span className={classes.loremText1}>
                    , consectetur adipiscing elit,
                  </span>
                </Typography>
                <a href="" className={classes.thirdBtn}>
                  DAHA ÇOX
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------------FIFTH CONTAINER----------------------------- */}

        <Grid
          container
          className={clsx(
            classes.section,
            classes.fifthContainer,
            classes.theSameClasses1
          )}
        >
          <a href="">
            <div className={classes.sixthDiv}>
              <PlayCircleOutlineIcon className={classes.playWord} />
             
            </div>
          </a>
        </Grid>
        {/* ----------------------SIXTH CONTAINER----------------------------- */}

        <Grid container xs={12} className={classes.sixthContainer} id="ƏLAQƏ">
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            data-aos="fade-left"
            className={classes.eighthDiv}
          >
            <Typography className={classes.sixthTypo}>ƏLAQƏ</Typography>
            <Typography className={classes.seventhTypo}>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit,sed{" "}
              <span className={classes.loremText}> do eiusmod tempor</span>
            </Typography>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              className={classes.ninthDiv}
            >
              <InputBase placeholder="AD" className={classes.firstInput} />
              <InputBase placeholder="SOYAD" className={classes.firstInput} />
              <InputBase placeholder="EMAİL" className={classes.firstInput} />
              <Button className={classes.fourthBtn}>GÖNDƏR</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
