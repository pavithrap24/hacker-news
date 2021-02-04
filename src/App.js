import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./container/navBar/navBar";
import TopStories from "./container/Stories/topStories/topStories";
import User from "./container/Stories/user/user";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={TopStories} />
          <Route path="/topStories" component={TopStories} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
