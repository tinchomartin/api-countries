import "./App.css";
import Homepage from "./pages/Homepage";
import Country from "./pages/Country";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
