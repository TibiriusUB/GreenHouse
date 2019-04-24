import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GreenHouse from "./pages/GreenHouse";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route exact path="/testing" component={LandingPage} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/plants" component={GreenHouse} />
          <Route exact path="/plants/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
