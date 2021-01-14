import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ferrari.style";
import InstagramIcon from "@material-ui/icons/Instagram";
import clsx from "clsx";

interface FerrariSectionProps {
  header: string;
  text1: string;
  text2: string;
  imgUrl: string;
  co2: {
    low: number;
    mid: number;
    high: number;
    extraHigh: number;
    combined: number;
  };
  fuel: {
    low: number;
    mid: number;
    high: number;
    extraHigh: number;
    combined: number;
  };
}

const FerrariSection: React.FC<FerrariSectionProps> = ({
  header,
  text1,
  text2,
  co2,
  fuel,
  imgUrl,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{
          background: imgUrl,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={classes.secondContainerPicture}
      >
        <Typography className={classes.fifthTypo} variant="h2">
          {header}
        </Typography>
      </Grid>
      {/* ------------------THIRD CONTAINER------------------------ */}

      <Grid container className={classes.thirdContainer}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ paddingTop: "30px" }}
        >
          <Grid item xs={6} sm={6} className={classes.detailsCar}>
            <Typography variant="h6" className={classes.sixthTypo}>
              CO2 Emission:
            </Typography>
            <Grid container direction="column" className={classes.subDetails}>
              <Grid item>LOW: {co2.low} G/KM</Grid>
              <Grid item>MID: {co2.mid} G/KM</Grid>
              <Grid item>HIGH: {co2.high} G/KM</Grid>
              <Grid item>EXTRA HIGH: {co2.extraHigh} G/KM</Grid>
              <Grid item>COMBINED: {co2.combined} G/KM</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.detailsCar}>
            <Typography variant="h6" className={classes.sixthTypo}>
              Fuel consumption:
            </Typography>
            <Grid container direction="column" className={classes.subDetails}>
              <Grid item>LOW: {fuel.low} G/KM</Grid>
              <Grid item>MID: {fuel.mid} G/KM</Grid>
              <Grid item>HIGH: {fuel.high} G/KM</Grid>
              <Grid item>EXTRA HIGH: {fuel.extraHigh} G/KM</Grid>
              <Grid item>COMBINED: {fuel.combined} G/KM</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h6" className={classes.fourthTypo}>
            {text1}
            <span className={classes.blockDisplay}>{text2}</span>
            <Grid item xs={12} className={classes.firstBtn}>
              <Button className={classes.btnFirst}>
                Daha Çox
                <img
                  src={require("../../assets/ferrari/chevron-circle-right-solid.svg")}
                  alt="fireSpot"
                  className={classes.chevronIcon}
                />
              </Button>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export const Ferrari = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{width:"100%"}}>
        {/* ------------------FIRST CONTAINER------------------------ */}
        <Grid
          container
          className={clsx(classes.firstContainer, classes.section)}
        >
          {/* ---------HEADER------- */}
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
                  src={require("../../assets/ferrari/ferrariLogo.png")}
                  alt="fireSpot"
                  className={classes.logoIcon}
                />
              </div>
            </Grid>
            <Grid item container xs={4} className={classes.socialMediaIcon}>
              <Grid item>
                <a href="">
                  <img
                    src={require("../../assets/aston-martini/facebookLogo.png")}
                    alt="fireSpot"
                    className={classes.iconMenu}
                  />
                </a>
              </Grid>
              <Grid item className={classes.twitterIcon}>
                <a href="">
                  <img
                    src={require("../../assets/aston-martini/twitterLogo.png")}
                    alt="fireSpot"
                    className={classes.iconMenu}
                  />
                </a>
              </Grid>
              <Grid item>
                <a href="">
                  <InstagramIcon className={classes.instagram} />
                </a>
              </Grid>
            </Grid>
          </Grid>
          {/* ----------------HEADER FINISH HERE-------------------------- */}
          <Grid item md={1} lg={1}></Grid>
          <Grid item md={11} lg={11} className={classes.secondSide}>
            {/* <Grid item xs={12}>
              <Typography color="textSecondary" className={classes.firstWord}>ASTON MARTIN</Typography>
            </Grid> */}
            <Grid item>
              <Typography className={classes.loremIpsum}>
                LOREM IPSUM <br />
                DOLOR SIT AMET
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.eighthTypo}>
                Lorem ipsum dolor sit amet, consectetur
                <span className={classes.textRest}>
                  <br /> adipiscing elit, sed do eiusmod tempor{" "}
                </span>
              </Typography>
            </Grid>
            <Grid item className={classes.btnMain}>
              <Button className={classes.btnFirst}>
                Daha Çox
                <img
                  src={require("../../assets/ferrari/chevron-circle-right-solid.svg")}
                  alt="fireSpot"
                  className={classes.chevronIcon}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* ------------------SECOND CONTAINER------------------------ */}

        <FerrariSection
          header="FERRARI SUPERCAR"
          co2={{
            low: 573,
            mid: 345,
            high: 320,
            extraHigh: 340,
            combined: 366,
          }}
          fuel={{
            low: 573,
            mid: 345,
            high: 320,
            extraHigh: 340,
            combined: 366,
          }}
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
          text2="Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgUrl={`linear-gradient(rgba(0,0,0,0), rgba(50.0, 6.0, 7.0, 1.0)),url(${require("assets/ferrari/secondPicture.png")})`}
        />

        {/* ------------------FOURTH CONTAINER------------------------ */}

        <Grid container className={classes.fourthContainer}>
          <Grid item xs={12} md={5} className={classes.eksteryer}>
            <Grid item xs={3} className={classes.interyer}>
              <div className={classes.inline1}></div>
              <Grid item xs={3} md={6}>
                <Typography className={classes.ninthTypo} variant="h4">
                  INTERYER
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5} md={6}>
              <Typography variant="h4" className={classes.ninthTypo}>
                EKSTERYER
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.ineteryerPicture}>
            <Grid item style={{ color: "white" }} className={classes.textLorem}>
              <Typography className={classes.ninthTypo} variant="h4">
                LOREM İPSUM DOLOR
              </Typography>
              <Typography className={classes.secondTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* ------------------FIFTH CONTAINER------------------------ */}

        <FerrariSection
          header="FERRARI PORTFONİO M"
          co2={{
            low: 573,
            mid: 345,
            high: 320,
            extraHigh: 340,
            combined: 366,
          }}
          fuel={{
            low: 573,
            mid: 345,
            high: 320,
            extraHigh: 340,
            combined: 366,
          }}
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
          text2="Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgUrl={`linear-gradient(rgba(0,0,0,0), rgba(50.0, 6.0, 7.0, 1.0)),url(${require("assets/ferrari/thirdPicture.png")})`}
        />
      
        {/* ------------------SIXTH CONTAINER------------------------ */}
        <Grid container className={classes.sixthContainer}>
          <Grid item xs={12} md={6} className={classes.eksteriorPicture}>
            <Grid item style={{ color: "white" }} className={classes.textLorem}>
              <Typography className={classes.ninthTypo} variant="h4">LOREM İPSUM DOLOR</Typography>
              <Typography className={classes.secondTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} className={classes.eksterior1}>
            <Grid item xs={4} sm={2} md={12}>
            <Typography className={classes.wordInterior} variant="h4">
              INTERYER
            </Typography>
            </Grid>
            <Grid item xs={5} sm={2} md={12}  className={classes.interyer2}>
              <Grid item xs={7}>
                <Typography className={classes.ninthTypo} variant="h4">EKSTERYER</Typography>
              </Grid>
              <div className={classes.inline}></div>
            </Grid>
          </Grid>
        </Grid>

        {/* ------------------SEVENTH CONTAINER------------------------ */}

        <Grid
          container xs={12}
          className={classes.seventhContainer}
        >
          <Typography variant="h3" style={{ fontWeight: 900 }}>
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
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit, sed do eiusmod tempor
          </Typography>
          <Grid item>
          <TextField
            className={classes.inputFirst}
            label="AD"
            variant="outlined"
          />
          </Grid>
       
       <Grid item>
       <TextField
            className={classes.inputFirst}
            label="SOYAD"
            variant="outlined"
          />
       </Grid>
     <Grid item>
     <TextField
            className={classes.inputFirst}
            label="EMAİL"
            variant="outlined"
          />
     </Grid>
        
          <Grid item xs={12} className={classes.secondBtn}>
            <Button className={classes.btnSecond}>GÖNDƏR</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
