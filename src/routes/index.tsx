import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "views/layout/app";
import { Spinner } from "components";
import browserHistory from "lib/browser-history";

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Suspense
        fallback={
          <Spinner
            style={{ width: "100vw", height: "100vh" }}
            color="primary"
          />
        }
      >
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
