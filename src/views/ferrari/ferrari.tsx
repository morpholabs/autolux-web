import { Button, Grid,InputBase, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./ferrari.style";
import clsx from "clsx";
import Aos from "aos";
import "aos/dist/aos.css";
import TemporaryDrawer from '../subComponents/menuNav/drawerSide';

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
  useEffect(() => {
    Aos.init({ duration: 1000,once:true });
  }, []);
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
        <Typography className={classes.fifthTypo} variant="h2"  data-aos="fade-up">
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
          data-aos="fade-up"
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
        <Grid container item xs={12} sm={12} md={6} lg={6} data-aos="fade-left" >
          <div>
          <Typography variant="h6" className={classes.fourthTypo}>
            {text1}
            <span className={classes.blockDisplay}>{text2}</span>
          </Typography>
          <Grid item xs={12} className={classes.firstBtn}>
              <Button className={classes.btnFirst}>
                Daha Çox
                <span className={classes.chevronIcon}>
                <i className="fas fa-chevron-right" style={{fontSize:"18px"}}></i>
                </span>
              </Button>
            </Grid>
        </div>
        </Grid>
      </Grid>
    </>
  );
};

export const Ferrari = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ width: "100%" }} className={classes.mainContainer}>
        {/* ------------------FIRST CONTAINER------------------------ */}
        <Grid
          container
          
        >
          <video autoPlay loop muted className={clsx(classes.firstContainer, classes.section)}>
            <source
              src={require("assets/ferrari-video/ferrariVideo3Axirinci.mp4")}
              type="video/mp4"
            />
          </video>
          {/* ---------HEADER------- */}
          <Grid item container className={classes.firstSubContainer}>
            <Grid item xs={3} md={1} lg={1} className={classes.menuIcon}>
              <TemporaryDrawer fontFamily="Proxima Nova"/>
            </Grid>
            <Grid item xs={4} lg={5} className={classes.iconAston}>
              <div>
                <img
                  src={require("../../assets/ferrari/ferrariLogo.png")}
                  alt="fireSpot"
                  className={classes.logoIcon}
                />
              </div>
            </Grid>
            <Grid item container xs={4} className={classes.socialMediaIcon}>
            <div className={classes.contact2} onClick={()=>{
              const getobject=document.getElementById("ƏLAQƏ");
              window.scrollTo({top:getobject?.offsetTop,behavior:"smooth"})
            }}>
              <span style={{marginRight:"5px",fontSize:"20px"}}><i className="far fa-comment-alt-dots"></i></span>
                <Typography variant="h6">ƏLAQƏ</Typography>
              </div>
              <span  className={classes.contactIcon}><i className="far fa-comment-alt-dots"></i></span>

            </Grid>
          </Grid>
          {/* ----------------HEADER FINISH HERE-------------------------- */}
          <Grid
            item
            md={12}
            lg={12}
            className={classes.secondSide}
          >
            <Grid item data-aos="fade-up">
              <Typography className={classes.loremIpsum}>
                LOREM IPSUM <br />
                DOLOR SIT AMET
              </Typography>
            </Grid>
            <Grid item  data-aos="fade-right">
              <Typography className={classes.eighthTypo}>
                Lorem ipsum dolor sit amet, consectetur
                <span className={classes.textRest}>
                  <br /> adipiscing elit, sed do eiusmod tempor{" "}
                </span>
              </Typography>
            </Grid>
            <Grid item className={classes.btnMain}   data-aos="fade-left">
              <Button className={classes.btnFirst}>
                Daha Çox
                <span className={classes.chevronIcon} >
                <i className="fas fa-chevron-right" style={{fontSize:"18px"}}></i>
                </span>
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

        <Grid container className={classes.fourthContainer} id="DBX">
          <Grid
            item
            xs={12}
            md={5}
            className={classes.eksteryer}
            data-aos="fade-left"
          >
            <Grid item xs={3} className={classes.interyer}>
              <div className={classes.inline1}></div>
              <Grid item xs={3} md={6}>
                <Typography className={classes.ninthTypo} variant="h4">
                  INTERYER
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5} md={6}>
              <Typography
                variant="h4"
                className={classes.ninthTypo}
                style={{ opacity:"30%" }}
              >
                EKSTERYER
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            className={classes.ineteryerPicture}
            data-aos="fade-right"
          >
            <Grid item style={{ color: "white" }} className={classes.textLorem}>
              <Typography className={classes.ninthTypo1} variant="h4">
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
        <Grid container className={classes.sixthContainer} id="VANTAGE">
          <Grid
            item
            xs={12}
            md={6}
            className={classes.eksteriorPicture}
            data-aos="fade-left"
          >
            <Grid item style={{ color: "white" }} className={classes.textLorem}>
              <Typography className={classes.ninthTypo1} variant="h4">
                LOREM İPSUM DOLOR
              </Typography>
              <Typography className={classes.secondTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className={classes.eksterior1}
            data-aos="fade-right"
          >
            <Grid item xs={4} sm={2} md={12}>
              <Typography className={classes.wordInterior} variant="h4">
                INTERYER
              </Typography>
            </Grid>
            <Grid item xs={5} sm={2} md={12} className={classes.interyer2}>
              <Grid item xs={7} className={classes.ekster}>
                <Typography className={classes.ninthTypo1} variant="h4">
                  EKSTERYER
                </Typography>
              </Grid>
              <div className={classes.inline}></div>
            </Grid>
          </Grid>
        </Grid>

        {/* ------------------SEVENTH CONTAINER------------------------ */}

        <Grid container xs={12} className={classes.seventhContainer} id="ƏLAQƏ">
          <Grid  data-aos="fade-up" >
          <Typography variant="h3" className={classes.contact}>
            ƏLAQƏ
          </Typography>
          <Typography variant="h6" className={classes.contactText}>
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit, sed do eiusmod tempor
          </Typography>
          <Grid item>
            <InputBase
              className={classes.inputFirst}
              placeholder="AD"
            />
          </Grid>

          <Grid item>
            <InputBase
              className={classes.inputFirst}
              placeholder="SOYAD"
            />
          </Grid>
          <Grid item>
            <InputBase
              className={classes.inputFirst}
              placeholder="EMAİL"
            />
          </Grid>

          <Grid item xs={12} className={classes.secondBtn}>
            <Button className={classes.btnSecond}>GÖNDƏR</Button>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};
