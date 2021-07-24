import React from 'react';
import './App.css';
import Login from "./Components/Authentication/Login"
import Signup from "./Components/Authentication/Signup"
import ForgotPassword from "./Components/Authentication/ForgotPassword"
import HistoryPage from "./Components/HistoryPage/HistoryPage"
import LikedVideo from "./Components/LikedPage/LikedVideo"
import Profile from "./Components/Account/Profile/Profile"
import HomePage from './Components/HomePage/HomePage';
import PrivateRoute from "./Components/PrivateRoute";
import Watch from "./Components/Watch/watch"
import UpdatePassword from './Components/Account/UpdatePassword/UpdatePassword';
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UploadedVideos from './Components/Account/UploadedVideos/UploadedVideos';
import PreviewChannel from './Components/PreviewChannel/PreviewChannel';
import Account from './Components/Settings/Account';

function App() {
  return (
     <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/login" component={ Login } />
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/forgotpassword" component={ ForgotPassword } />
              <Route exact path="/login" component={ Login } />
              <PrivateRoute exact path="/Home" component={ HomePage } />
              <PrivateRoute exact path="/" component={ HomePage } />
              <PrivateRoute exact path="/Liked" component={ LikedVideo } />
              <PrivateRoute exact path="/History" component={ HistoryPage } />
              <PrivateRoute exact path="/watch" component={ Watch } />
              <PrivateRoute exact path="/Account" component={ Profile } />
              <PrivateRoute exact path="/Profile" component={ Profile } />
              <PrivateRoute exact path="/Update Password" component={ UpdatePassword} />
              <PrivateRoute exact path="/My Videos" component={UploadedVideos} />
              <PrivateRoute exact path="/PreviewChannel" component={ PreviewChannel } />
              <PrivateRoute exact path="/Account" component={ Account } />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    

  )

}

export default App;
