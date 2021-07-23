import React from 'react';
import './App.css';
import Login from "./Components/Authentication/Login"
import Signup from "./Components/Authentication/Signup"
import ForgotPassword from "./Components/Authentication/ForgotPassword"
import HistoryPage from "./Components/HistoryPage/HistoryPage"
import LikedVideo from "./Components/LikedPage/LikedVideo"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './Components/HomePage/HomePage';
import PrivateRoute from "./Components/PrivateRoute";
import Watch from "./Components/Watch/watch"
import PreviewChannel from './Components/PreviewChannel/PreviewChannel';
function App() {
  return (
     <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/login" component={ Login } />
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/forgotpassword" component={ ForgotPassword } />
              <PrivateRoute exact path="/" component={ HomePage } />
              <PrivateRoute exact path="/Home" component={ HomePage } />
              <PrivateRoute exact path="/Liked" component={ LikedVideo } />
              <PrivateRoute exact path="/History" component={ HistoryPage } />
              <PrivateRoute exact path="/watch" component={ Watch } />
              <PrivateRoute exact path="/PreviewChannel" component={ PreviewChannel } />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    

  )

}

export default App;
