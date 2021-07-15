
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ForgotPassword from "./Components/ForgotPassword"
import {AuthProvider} from "./contexts/AuthContext"
// import { Container} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Components/HomePage/Header';
import Sidebar from './Components/HomePage/Sidebar';
function App() {
  return (
   
      
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/homepage" component={Header} />
                <Route exact path="/homepage" component={Sidebar} />

              </Switch>
            </AuthProvider>
          </Router>
        </div>
    
    
  );
}

export default App;
