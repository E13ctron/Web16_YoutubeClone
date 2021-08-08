import React, { useRef, useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import { useAuth } from "../../contexts/AuthContext";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";
import youtube_logo_png from "../../assets/youtube-logo-png.jpg";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/Home");
    } catch {
      setError("Failed to login ");
    }
    setLoading(false);
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="signup-body" style={{ textAlign: "center" }}>
        <Card className="card_parent">
          <Card.Body className="card_body">
            <div className="youtubelogo">
              <img src={youtube_logo_png} className="youtube-img" alt="" />
            </div>
            <h2 className="text-center mb-4 white-color">LOGIN PAGE</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="form-body" onSubmit={handleSubmit}>
              <Form.Group
                className="particular-field"
                id="email"
                style={{ margin: "10px" }}
              >
                <Form.Control
                  classname="particular-input"
                  placeholder="Email"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group
                className="particular-field"
                id="password"
                style={{ margin: "10px" }}
              >
                <Form.Control
                  placeholder="Password"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 button particular-field"
                style={{ margin: "10px", backgroundColor: "rgb(201 29 32)" }}
                type="submit"
              >
                Sign In
              </Button>
              <div style={{ color: "white" }}>Don't have an account?</div>
              <div>
                {" "}
                <a
                  href="./signup"
                  style={{ color: "rgb(201 29 32)", textDecoration: "none" }}
                >
                  Sign Up
                </a>
              </div>
              <div style={{ color: "white" }}>Forgot Password ? </div>
              <div>
                {" "}
                <a
                  href="./forgotpassword"
                  style={{ color: "rgb(201 29 32)", textDecoration: "none" }}
                >
                  Reset Password
                </a>
              </div>
            </Form>
            <GoogleSignIn />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

//added google sign in. Add rest login functionality on top as per need
