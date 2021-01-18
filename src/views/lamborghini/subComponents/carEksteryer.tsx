import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../lamborghini.style";

// interface CarEksteryerProps{
//     title:string;
//     text:string;
//     img1:string;
//     img2:string;
//     img3:string;
//     img4:string;
// }
export const CarEksteryer = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.section}>
        <Grid container item xs={12} style={{ marginBottom: "15px" }}>
          <Grid
            item
            xs={6}
            lg={6}
            style={{
              marginRight: "8%",
              paddingLeft: "226px",
              paddingTop: "65px",
            }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 700, marginBottom: "15px" }}
            >
              {props.title1}
            </Typography>
            <Typography style={{ color: "#B6B6B6" }}>{props.text1}</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            lg={5}
            style={{
              background: `url(${require(props.img1)})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "330px",
              clipPath: "polygon(37% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></Grid>
        </Grid>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              background: `url(${require(props.img2)})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "330px",
              width: "64%",
              marginRight: "-280px",
              marginLeft: "-70px",
            }}
          ></div>
          <div
            style={{
              width: "64%",
              background: `url(${require(props.img3)})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "330px",
              marginLeft: "-53px",
              right: "-51px",
              marginRight: "-55px",
            }}
          ></div>
        </div>
        <Grid container item xs={12} style={{ marginTop: "15px" }}>
          <div
            style={{
              background: `url(${require(props.img4)})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "330px",
              marginLeft: "-300px",
              width: "61% ",
            }}
          ></div>
          <Grid
            xs={6}
            style={{
              textAlign: "end",
              paddingRight: "130px",
              paddingTop: "40px",
            }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 700, marginBottom: "15px" }}
            >
              {props.title2}
            </Typography>
            <Typography style={{ color: "#B6B6B6" }}>{props.text1}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
