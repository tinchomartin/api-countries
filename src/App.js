import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Country from "./pages/Country";
import Homepage from "./pages/Homepage";
import "./App.css";
import Layout from "./components/Layout";
import ThemeContext, { themes } from "./utils/context";
function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <div className="App">
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/search/:country" component={Country} />
            </Switch>
          </Router>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
