import Cookies from 'js-cookie'
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>

      <ProtectedRoute path="/dashboard" component={Dashboard} isAuth={Cookies.get('token')}/>
    </Router>
  );
}

export default App;
