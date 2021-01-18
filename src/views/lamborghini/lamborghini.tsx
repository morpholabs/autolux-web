import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./lamborghini.style";
import InstagramIcon from "@material-ui/icons/Instagram";
import clsx from "clsx";
//import { CarEksteryer } from "./subComponents/carEksteryer";
//import img from 'assets/lamborghini/img1.png'

export const Lamborghini = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        {/* -------------------FIRST CONTAINER---------------------------- */}
        <Grid
          container
          className={clsx(classes.firstContainer, classes.section)}
        >
          {/* -----------------HEADER------------------------- */}
          <Grid item container className={classes.firstSubContainer}>
            <Grid item xs={3} md={1} lg={1} className={classes.menuIcon}>
              <img
                src={require("../../assets/aston-martini/Menu.png")}
                alt="fireSpot"
                className={classes.iconMenu}
              />
            </Grid>
            <Grid item xs={4} lg={4} className={classes.iconAston}>
              <div>
                <img
                  src={require("../../assets/lamborghini/lamborghiniLogo.png")}
                  alt="fireSpot"
                  className={classes.logoIcon}
                />
              </div>
            </Grid>
            <Grid item container xs={4} className={classes.socialMediaIcon}>
              <Grid item>
                <a href="/">
                  <img
                    src={require("../../assets/aston-martini/facebookLogo.png")}
                    alt="fireSpot"
                    className={classes.iconMenu}
                  />
                </a>
              </Grid>
              <Grid item className={classes.twitterIcon}>
                <a href="/">
                  <img
                    src={require("../../assets/aston-martini/twitterLogo.png")}
                    alt="fireSpot"
                    className={classes.iconMenu}
                  />
                </a>
              </Grid>
              <Grid item>
                <a href="/">
                  <InstagramIcon className={classes.instagram} />
                </a>
              </Grid>
            </Grid>
          </Grid>
          {/* ----------------HEADER FINISH HERE------------------------ */}
          <Grid container item>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={12} lg={11} className={classes.lamborghiniTitle}>
              <Grid item>
                <Typography variant="h5">LAMBORGHINI</Typography>
              </Grid>
              <Grid item className={classes.firstTypo}>
                <Typography variant="h3" className={classes.titleTypo}>
                  GÖZLƏNİLMƏZİ <br />
                  GÖZLƏ
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ color: "#7C8487", marginBottom: "15px" }}>
                  Lorem ipsum dolor sit amet,consectetur
                </Typography>
              </Grid>
              <Grid item className={classes.btnFirst}>
                <Button className={classes.hexagonBtn2}>
                  DAHA ÇOX
                  <img
                    src={require("../../assets/lamborghini/angle-right-solid.svg")}
                    alt="fireSpot"
                    style={{
                      height: "30px",
                      marginLeft: "10px",
                      marginBottom: "-7px",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* --------------------SECOND CONTAINER---------------------- */}
        <Grid container xs={12} className={classes.secondContainer}>
          {/* <Grid item xs={1}></Grid> */}
          <div className={classes.overlay}></div>
          <Grid item xs={11} md={5} className={classes.huracan}>
            <Grid item xs={12} md={6} lg={12}>
              <Typography className={classes.secondTypo}>HURACAN</Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "140px", marginLeft: "5%" }}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                HURACAN
              </Typography>
              <Grid item className={classes.loremIpsum}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna
                  <br /> aliqua. Ut enim ad minim veniam, quis <br />
                  nostrud exercitation ullamco laboris nisi ut
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.hexagonBtn2}>
                  DAHA ÇOX
                  <img
                    src={require("../../assets/lamborghini/angle-right-solid.svg")}
                    alt="fireSpot"
                    style={{
                      height: "30px",
                      marginLeft: "10px",
                      marginBottom: "-7px",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------THIRD CONTAINER---------------------- */}

        <Grid container className={classes.thirdContainer}>
          <Grid container item xs={12} className={classes.seventhTypo}>
            <Grid item xs={4} sm={6} lg={6} className={classes.thirdConDetails}>
              <Typography
                variant="h5"
                style={{ fontWeight: 700, marginBottom: "15px" }}
              >
                EKSTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore
                <span className={classes.crop}>
            
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  <br />
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  <br />
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat
                  <br />
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident,
                  <br />
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </Typography>
            </Grid>
            <Grid item xs={7} sm={5} lg={5} className={classes.subAventador}></Grid>
          </Grid>
          <div className={classes.centerImages}>
            <div className={classes.leftPicture}></div>
            <div className={classes.rightPicture}></div>
          </div>
          <Grid container item xs={12} className={classes.bottomSide}>
            <div className={classes.leftBottomPicture}></div>
            <Grid xs={6} sm={5} className={classes.sixthTypo}>
              <Typography
                variant="h5"
                style={{ fontWeight: 700, marginBottom: "15px" }}
              >
                INTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore{" "}
                <span className={classes.crop}>
                  {" "}
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  <br />
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  <br />
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat
                  <br />
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident,
                  <br />
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------FOURTH CONTAINER---------------------- */}

        <Grid container className={classes.fourthContainer}>
          <div className={classes.overlay1}></div>
          <Grid item xs={12}>
            <Typography className={classes.secondTypo1}>AVENTADOR</Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "end",
                  marginTop: "130px",
                  marginRight: "135px",
                }}
              >
                <Typography className={classes.aventador}>AVENTADOR</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna
                  <br /> aliqua. Ut enim ad minim veniam, quis <br />
                  nostrud exercitation ullamco laboris nisi ut
                </Typography>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: "40px", display: "inline-block" }}
                >
                  <Button className={classes.hexagonBtn2}>
                    DAHA ÇOX
                    <img
                      src={require("../../assets/lamborghini/angle-right-solid.svg")}
                      alt="fireSpot"
                      style={{
                        height: "30px",
                        marginLeft: "10px",
                        marginBottom: "-7px",
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------FIFTH CONTAINER---------------------- */}

        {/* <Grid container className={classes.section}></Grid> */}
        {/* <CarEksteryer
          title1="EKSTERYER"
          title2="INTERYER"
          img1={img}
          img2={img}
          img3={img}
          img4={img}
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        <br />
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        <br />
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        <br />
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        <br />
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        <br />
        sunt in culpa qui officia deserunt mollit anim id est laborum."
        /> */}
        <Grid container className={classes.thirdContainer}>
          <Grid container item xs={12} className={classes.seventhTypo}>
            <Grid item xs={4}sm={6} lg={6} className={classes.thirdConDetails}>
              <Typography
                variant="h5"
                style={{ fontWeight: 700, marginBottom: "15px" }}
              >
                EKSTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore{" "}
                <span className={classes.crop}>
                  
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  <br />
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  <br />
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat
                  <br />
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident,
                  <br />
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </Typography>
            </Grid>
            <Grid item xs={7} sm={5} lg={5} className={classes.subAventador}></Grid>
          </Grid>
          <div className={classes.centerImages}>
            <div className={classes.leftPicture}></div>
            <div className={classes.rightPicture}></div>
          </div>
          <Grid container item xs={12} className={classes.bottomSide}>
            <div className={classes.leftBottomPicture}></div>
            <Grid xs={6} sm={5} className={classes.sixthTypo}>
              <Typography
                variant="h5"
                style={{ fontWeight: 700, marginBottom: "15px" }}
              >
                INTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore{" "}
                <span className={classes.crop}>
                  
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  <br />
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  <br />
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat
                  <br />
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident,
                  <br />
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------SIXTH CONTAINER---------------------- */}

        <Grid
          container
          className={clsx(classes.sixthContainer, classes.section)}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: 900, fontSize: "5rem" }}
          >
            ƏLAQƏ
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#C2C0BF",
              fontSize: "15px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            s do eiusmod tempor
          </Typography>
          <TextField
            label="AD"
            variant="outlined"
            className={clsx(classes.inputFirst, classes.hexagonBtn)}
          />
          <TextField
            label="SOYAD"
            variant="outlined"
            className={clsx(classes.inputFirst, classes.hexagonBtn)}
          />
          <TextField
            label="EMAİL"
            variant="outlined"
            className={clsx(classes.inputFirst, classes.hexagonBtn)}
          />
          <div style={{ width: "100%" }}>
            <Button className={classes.hexagonBtn1}>
              GÖNDƏR
              {/* <img
                src={require("../../assets/lamborghini/angle-right-solid.svg")}
                alt="fireSpot"
                style={{ height: "30px", marginLeft: "5px" }}
              /> */}
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
