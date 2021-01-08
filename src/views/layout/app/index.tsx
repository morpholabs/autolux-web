import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import AppRouter from "routes/AppRouter";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "#F1F5F8",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    // minWidth: "600px",
    padding: 0,
    // "& .MuiGrid-spacing-xs-1": {
    //   width: "calc(100% + 3px)",
    // },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <main>
        <Container maxWidth="xl" className={classes.container}>
          <AppRouter />
        </Container>
      </main>
    </div>
  );
};

export default App;
