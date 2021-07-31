import React, { Suspense, lazy } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

const test = lazy(() => import("../test"));
const login = lazy(() => import("../login"));

const routes = () => {
  return (
    <div>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/test" component={test} />
            <Route path="/login" component={login} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default routes;
