import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer";
import SongContainer from "./containers/SongContainer";
import StreamContainer from "./containers/StreamContainer";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardContainer} />
      <Route path="/songs" component={SongContainer} />
      <Route path="/stream" component={StreamContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;