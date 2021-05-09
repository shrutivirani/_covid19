import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { Germany } from "./pages/Germany/Main";
import { State } from "./pages/States/Main";

const App: FC = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" component={Germany} exact></Route>
        <Route path="/germany" component={Germany} exact></Route>
        <Route path="/state" component={State} exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
