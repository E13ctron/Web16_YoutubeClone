
import './App.css';
import Login from "./Components/Login"
import {AuthProvider} from "./contexts/AuthContext"
import { Container} from "react-bootstrap"

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
        style={ { minHeight: "100vh" }}
        >
        <div className="App">
          <Login />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
