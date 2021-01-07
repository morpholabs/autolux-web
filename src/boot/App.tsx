import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Routes from "routes";
import customTheme from "theme";
import "./App.css";
import { NotificationsProvider } from "context/NotificationsContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

const App = () => {
  const muiTheme = customTheme("light");

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <NotificationsProvider>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </NotificationsProvider>
    </MuiPickersUtilsProvider>
  );
};

export default App;
