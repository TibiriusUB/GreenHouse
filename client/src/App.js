import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GreenHouse from "./pages/GreenHouse";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={GreenHouse} />
          <Route exact path="/plants" component={GreenHouse} />
          <Route exact path="/plants/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
