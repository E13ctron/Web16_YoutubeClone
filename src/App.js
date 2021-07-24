import React from 'react';
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ForgotPassword from "./Components/ForgotPassword"
import HistoryPage from "./Components/HistoryPage"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './Components/HomePage';
import PrivateRoute from "./Components/PrivateRoute";
import { useAuth } from "./contexts/AuthContext"

function App() {

  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/forgotpassword" component={ ForgotPassword } />
              <Route exact path="/login" component={ Login } />
              <PrivateRoute exact path="/Home" component={ HomePage } />
              <Route exact path="/History" component={ HistoryPage } />
              <PrivateRoute exact path="/" component={ HomePage} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>
    

  )

}

export default App;
