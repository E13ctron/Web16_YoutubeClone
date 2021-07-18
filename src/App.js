import React from 'react';
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ForgotPassword from "./Components/ForgotPassword"
import VideoUploadPage from "./Components/VideoUploadPage"
import HistoryPage from "./Components/HistoryPage"
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
              <Route exact path="/uploadvideo" component={ VideoUploadPage } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/forgotpassword" component={ ForgotPassword } />
              <PrivateRoute exact path="/" component={ HomePage } />
              <Route exact path="/Home" component={ HomePage } />
              <Route exact path="/History" component={ HistoryPage } />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    

  )

}

export default App;
