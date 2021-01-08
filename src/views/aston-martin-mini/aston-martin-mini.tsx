import { Button, Grid, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useStyles } from "./aston-martini-mini.style";
import InstagramIcon from '@material-ui/icons/Instagram';

export const AstonMartinMini = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Grid container className={classes.btnSecond}>
          {/* ----------------------FIRST CONTAINER----------------------------- */}
          <Grid container className={classes.firstContainer}>
            {/* ---------------HEADER------------- */}
            <Grid container className={classes.firstSubContainer}>
              <div className={classes.menuIcon}>
                <img src={require('../../assets/aston-martini/Menu.png')} alt="fireSpot" />
              </div>
              <div>
                <img src={require('../../assets/aston-martini/logo.png')} alt="fireSpot" />
              </div>
              <div className={classes.socialMediaIcon} >
                <div>
                  <a href="">
                    <img src={require('../../assets/aston-martini/facebookLogo.png')} alt="fireSpot" />
                  </a>
                </div>
                <div className={classes.twitterIcon}>
                  <a href="">
                    <img src={require('../../assets/aston-martini/twitterLogo.png')} alt="fireSpot" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <InstagramIcon className={classes.instagram} />
                    {/* <img src={require('../../assets/aston-martini/instagramLogo (2).png')} alt="fireSpot" /> */}
                    {/* <img src={require('../../assets/aston-martini/instagramLogo.png')} alt="fireSpot" className={classes.instagramIcon}  /> */}
                  </a>
                </div>

              </div>

            </Grid>
            <div className={classes.firstSide}>

            </div>
            <div className={classes.secondSide}>
              <Typography className={classes.firstWord}>ASTON MARTIN</Typography>
              <p className={classes.loremIpsum}>LOREM IPSUM <br />DOLOR SIT AMET</p>
              <Typography>Lorem   ipsum   dolor   sit  amet,   consectetur</Typography>
              <Button className={classes.btnFirst}>Daha Çox</Button>

            </div>
          </Grid>
          {/* ----------------------SECOND CONTAINER----------------------------- */}

          <Grid container className={classes.secondContainer} >
            <div className={classes.leftSide}>
              <div className={classes.freeDiv}></div>
              <div className={classes.firstDiv}>
                <Typography className={classes.secondTypo}>Aston Martin's first SUV</Typography>
                <Typography className={classes.thirdTypo}>DBX</Typography>
                <a href="" className={classes.secondBtn}>DAHA ÇOX</a>
                {/* <Button >DAHA ÇOX</Button> */}
              </div>
            </div>

            <div className={classes.rightSide}>
              <div className={classes.secondDiv}>
                <Typography className={classes.shortInfo}>QISA MƏLUMAT</Typography>
                <Typography className={classes.longInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </Typography>
              </div>
              <div className={classes.fifthDiv}>
                <div className={classes.thirdDiv}>
                  <Typography className={classes.interyer}>INTERYER</Typography>
                  <Typography className={classes.textLorem}>Lorem ipsum dolor amet, consectetur adipiscing elit,</Typography>
                  <a href="" className={classes.thirdBtn}>DAHA ÇOX</a>
                </div>
                <div className={classes.fourthDiv}>
                  <Typography className={classes.interyer}>EKSTERYER</Typography>
                  <Typography className={classes.textLorem}>Lorem ipsum dolor amet, consectetur adipiscing elit,</Typography>
                  <a href="" className={classes.thirdBtn}>DAHA ÇOX</a>
                </div>
              </div>



            </div>



          </Grid>
          {/* ----------------------THIRD CONTAINER----------------------------- */}

          <Grid container className={clsx(classes.section, classes.thirdContainer)}>
            <a href="">
              <div className={classes.sixthDiv}>

                <img src={require('../../assets/aston-martini/circleIcon.png')} alt="fireSpot" />
                <Typography className={classes.playWord}>PLAY</Typography>
              </div>
            </a>
          </Grid>
          {/* ----------------------FOURTH CONTAINER----------------------------- */}

          <Grid container className={classes.secondContainer} >
            <div className={classes.leftSide1}>
              <div className={classes.freeDiv}></div>
              <div className={classes.firstDiv}>
                <Typography className={classes.secondTypo}>The Archetypal Hunter</Typography>
                <Typography className={classes.thirdTypo}>Vantage</Typography>
                <a href="" className={classes.secondBtn}>DAHA ÇOX</a>
                {/* <Button >DAHA ÇOX</Button> */}
              </div>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.secondDiv}>
                <Typography className={classes.shortInfo}>QISA MƏLUMAT</Typography>
                <Typography className={classes.longInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </Typography>
              </div>
              <div className={classes.fifthDiv}>
                <div className={classes.thirdDiv1}>
                  <Typography className={classes.interyer}>INTERYER</Typography>
                  <Typography className={classes.textLorem}>Lorem ipsum dolor amet, consectetur adipiscing elit,</Typography>
                  <a href="" className={classes.thirdBtn}>DAHA ÇOX</a>
                </div>
                <div className={classes.fourthDiv1}>
                  <Typography className={classes.interyer}>EKSTERYER</Typography>
                  <Typography className={classes.textLorem}>Lorem ipsum dolor amet, consectetur adipiscing elit,</Typography>
                  <a href="" className={classes.thirdBtn}>DAHA ÇOX</a>
                </div>
              </div>
            </div>
          </Grid>
          {/* ----------------------FIFTH CONTAINER----------------------------- */}

          <Grid container className={clsx(classes.section, classes.fifthContainer)}>
            <a href="">
              <div className={classes.sixthDiv}>

                <img src={require('../../assets/aston-martini/circleIcon.png')} alt="fireSpot" />
                <Typography className={classes.playWord}>PLAY</Typography>
              </div>
            </a>
          </Grid>
          {/* ----------------------SIXTH CONTAINER----------------------------- */}

          <Grid container className={clsx(classes.section, classes.sixthContainer)} >
            <div className={classes.seventhDiv}></div>
            <div className={classes.eighthDiv}>
              <div className={classes.eleventhDiv}></div>
              <Typography className={classes.sixthTypo}>ƏLAQƏ</Typography>
              <Typography className={classes.seventhTypo}>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit,sed do eiusmod tempor</Typography>
              <div className={classes.ninthDiv}>
                <TextField label="AD" variant="outlined" className={classes.firstInput} />
              </div>
              <div className={classes.ninthDiv}>
                <TextField label="SOYAD" variant="outlined" className={classes.firstInput} />
              </div>
              <div className={classes.ninthDiv}>
                <TextField label="EMAİL" variant="outlined" className={classes.firstInput} />
              </div>
              <Button className={classes.fourthBtn}>GÖNDƏR</Button>
            </div>

          </Grid>
        </Grid>
      </div>
    </>
  );
};
