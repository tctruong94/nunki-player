import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer";
import SongContainer from "./containers/SongContainer";
import TestContainer from "./containers/TestContainer";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardContainer} />
      <Route path="/songs" component={SongContainer} />
      <Route path="/test" component={TestContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;