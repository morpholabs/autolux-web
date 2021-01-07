import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const AstonMartinMiniPage = lazy(() =>
  import("views").then((module) => ({ default: module.AstonMartinMini }))
);

const AppRouter: React.FC = () => (
  <Switch>
    <Route exact path="/aston-martin-mini" component={AstonMartinMiniPage} />
  </Switch>
);
export default AppRouter;
