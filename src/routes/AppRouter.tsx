import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const AstonMartinMiniPage = lazy(() =>
  import("views").then((module) => ({ default: module.AstonMartinMini }))
);
const FerrariPage = lazy(() =>
  import("views").then((module) => ({ default: module.Ferrari }))
);

const LamborghiniPage=lazy(()=>
import("views").then((module)=>({default:module.Lamborghini}))
)

const AppRouter: React.FC = () => (
  <Switch>
    <Route exact path="/aston-martin-mini" component={AstonMartinMiniPage} />
    <Route exact path="/ferrari" component={FerrariPage} />
    <Route exact path="/lamborghini" component={LamborghiniPage} />

  </Switch>
);
export default AppRouter;
