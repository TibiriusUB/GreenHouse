import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GreenHouse from "./pages/GreenHouse";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
//initial app build starts here, this space is being left to the page routes for sake of ease
function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          {/* testing route left here for continued use(remove before final deploy */}
          <Route exact path="/testing" component={LandingPage} />
          {/* main app route here */}
          <Route exact path="/" component={GreenHouse} />
          <Route exact path="/plants" component={GreenHouse} />
          {/* detail page here (may not be needed) */}
          <Route exact path="/plants/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
