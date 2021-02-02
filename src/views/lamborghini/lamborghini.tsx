import { Button, Grid, InputBase, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./lamborghini.style";
import clsx from "clsx";
import {TemporaryDrawer} from '../subComponents/menuNav/drawerSide';
import Aos from "aos";
import "aos/dist/aos.css";


export const Lamborghini = () => {
  const classes = useStyles();
  
  useEffect(() => {
    Aos.init({ duration: 1000,once:true });
  }, []);


  return (
    <>
      <Grid container className={classes.mainContainer}>
        {/* -------------------FIRST CONTAINER---------------------------- */}
        <Grid
          container
          className={classes.firstContainer}
        >
          {/* -----------------HEADER------------------------- */}
          <Grid item container className={classes.firstSubContainer}>
            <Grid item xs={3} md={1} lg={1} className={classes.menuIcon}>
              <TemporaryDrawer fFamily="Proxima Nova" />
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
          {/* ----------------HEADER FINISH HERE------------------------ */}
          <Grid container item>
            <Grid item xs={12} lg={11} className={classes.lamborghiniTitle}>
              <Grid item>
                <Typography variant="h5" style={{fontSize:"26px"}}>LAMBORGHINI</Typography>
              </Grid>
              <Grid item className={classes.firstTypo} data-aos="fade-up">
                <Typography variant="h3" className={classes.titleTypo}>
                  GÖZLƏNİLMƏZİ <br />
                  GÖZLƏ
                </Typography>
              </Grid>
              <Grid item>
                <Typography 
                className={classes.fifthTypo}
                >
                  Lorem ipsum dolor sit amet,consectetur
                </Typography>
              </Grid>
              <Grid item className={classes.btnFirst}>
                <Button className={classes.hexagonBtn2}>
                  DAHA ÇOX
                  <i className="fas fa-angle-right" style={{marginLeft:"10px",height:"30px"}}></i>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* --------------------SECOND CONTAINER---------------------- */}
        <Grid container xs={12} className={classes.secondContainer} id="DBX">
          <div className={classes.overlay} data-aos="fade-right"></div>
          <Grid item xs={11} md={5} className={classes.huracan}>
            <Grid item xs={12} md={6} lg={12}>
              <Typography className={classes.secondTypo}>HURACAN</Typography>
            </Grid>
            <Grid item xs={12} 
            className={classes.secondGrid}>
              <Typography variant="h3"
               data-aos="fade-right"
               className={classes.ninthTypo}>
                HURACAN
              </Typography>
              <Grid item className={classes.loremIpsum} data-aos="fade-right">
                <Typography  className={classes.tenTypo}>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna
                  <br /> aliqua. Ut enim ad minim veniam, quis <br />
                  nostrud exercitation ullamco laboris nisi ut
                </Typography>
              </Grid>
              <Grid item xs={12} 
              data-aos="fade-right"
              className={classes.firstGrid}>
                <Button className={classes.hexagonBtn2}>
                  DAHA ÇOX
                  <i className="fas fa-angle-right" style={{marginLeft:"10px",height:"30px"}}></i>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------THIRD CONTAINER---------------------- */}

        <Grid container className={classes.thirdContainer}>
          <Grid container item xs={12} className={classes.seventhTypo}>
            <Grid item xs={12} sm={12} md={12} lg={6} className={classes.thirdConDetails}>
              <Typography
                variant="h5"
                className={classes.eleventhTypo}
              >
                EKSTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore
              
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim  <span className={classes.crop}> veniam, quis nostrud exercitation ullamco
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
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className={classes.subAventador}
              data-aos="fade-down"
            ></Grid>
          </Grid>
          <div className={classes.centerImages}>
            <div className={classes.leftPicture} data-aos="fade-right"></div>
            <div className={classes.rightPicture} data-aos="fade-left"></div>
          </div>
          <Grid container item xs={12} className={classes.bottomSide}>
            <div className={classes.leftBottomPicture} data-aos="fade-up"></div>
            <Grid item xs={12} sm={12} md={12} lg={6} className={classes.sixthTypo}>
              <Typography
                variant="h5"
                className={classes.interier}
              >
                INTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore
               
                 
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim <span className={classes.crop}> veniam, quis nostrud exercitation ullamco
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

        <Grid container className={classes.fourthContainer} id="VANTAGE">
          <div className={classes.overlay1} data-aos="fade-left"></div>
          <Grid item xs={12}>
            <Typography className={classes.secondTypo1} >AVENTADOR</Typography>
            <Grid container>
              <Grid
                item
                xs={12}
               
                className={classes.conFourth}
              >
                <Typography className={classes.aventador} data-aos="fade-left">AVENTADOR</Typography>
                <Typography
                className={classes.loremTypo}
                  data-aos="fade-left">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna
                  <br /> aliqua. Ut enim ad minim veniam, quis <br />
                  nostrud exercitation ullamco laboris nisi ut
                </Typography>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: "40px", display: "inline-block",transition:"1s linear" }}
                >
                  <Button className={classes.hexagonBtn2} data-aos="fade-left">
                    DAHA ÇOX
                    <i className="fas fa-angle-right" style={{marginLeft:"10px",height:"30px"}}></i>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------FIFTH CONTAINER---------------------- */}

      
        <Grid container className={classes.thirdContainer}>
          <Grid container item xs={12} className={classes.seventhTypo}>
            <Grid item xs={12} sm={12} md={12} lg={6} className={classes.thirdConDetails}>
              <Typography
                variant="h5"
                className={classes.eksteryer}
              >
                EKSTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore
               
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim  <span className={classes.crop}> veniam, quis nostrud exercitation ullamco
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
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className={classes.subAventador1}
              data-aos="fade-down"

            ></Grid>
          </Grid>
          <div className={classes.centerImages}>
            <div className={classes.leftPicture1} data-aos="fade-left"></div>
            <div className={classes.rightPicture1} data-aos="fade-right"></div>
          </div>
          <Grid container item xs={12} className={classes.bottomSide}>
            <div className={classes.leftBottomPicture} data-aos="fade-up"></div>
            <Grid item xs={12} sm={12} md={12} lg={6} className={classes.sixthTypo}>
              <Typography
                variant="h5"
                className={classes.interyer}
              >
                INTERYER
              </Typography>
              <Typography className={classes.fourthTypo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore{" "}
                  et dolore magna aliqua. Ut
                  <br />
                  enim ad minim <span className={classes.crop}> veniam, quis nostrud exercitation ullamco
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
          xs={12}
          className={clsx(classes.sixthContainer, classes.section)} id="ƏLAQƏ"
        >
          <Typography
            variant="h3"
           data-aos="fade-up"
            className={classes.contact}
          >
            ƏLAQƏ
          </Typography>
          <Typography
            variant="h6"
            style={{
            
            }}
            data-aos="fade-up"
            className={classes.contactLorem}
          >
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            s do eiusmod tempor
          </Typography>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}} data-aos="fade-up">
          <InputBase
            placeholder="AD"
            className={classes.inputFirst}
          />
          <InputBase
            placeholder="SOYAD"
            className={classes.inputFirst}
          />
          <InputBase
            placeholder="EMAIL"
            className={classes.inputFirst}
          />
          </div>
          <div style={{ width: "100%" }} data-aos="fade-up">
            <Button disableRipple className={classes.hexagonBtn1}>
              GÖNDƏR
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
