import React from 'react';
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ForgotPassword from "./Components/ForgotPassword"

import { AuthProvider } from "./contexts/AuthContext"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './Components/HomePage';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (

    
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path="/homepage" component={HomePage} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    

  )

}

export default App;
