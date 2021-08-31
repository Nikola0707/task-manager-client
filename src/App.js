// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
