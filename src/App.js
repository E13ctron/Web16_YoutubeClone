
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ForgotPassword from "./Components/ForgotPassword"
import {AuthProvider} from "./contexts/AuthContext"
import { Container} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
   
      <Container className="d-flex align-items-center justify-content-center"
        style={ { minHeight: "100vh" }}
        >
        <div className="App">
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/forgotpassword">
                  <ForgotPassword />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
  );
}

export default App;
