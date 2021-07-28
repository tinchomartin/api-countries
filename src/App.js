import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Country from "./pages/Country";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/search/:country" component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
