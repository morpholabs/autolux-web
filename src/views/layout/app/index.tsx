import { Container, Fab, Icon, makeStyles } from "@material-ui/core";
import { ScrollTop } from "components";
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
  fab: {
    backgroundColor: "white",
    color: "black",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <main>
        <Container maxWidth="xl" className={classes.container}>
          <AppRouter />
          <ScrollTop>
            <Fab
              className={classes.fab}
              size="medium"
              aria-label="scroll back to top"
            >
              <Icon fontSize="large">keyboard_arrow_up</Icon>
            </Fab>
          </ScrollTop>
        </Container>
      </main>
    </div>
  );
};

export default App;
