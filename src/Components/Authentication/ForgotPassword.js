import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import youtube_logo_png from "../../assets/youtube-logo-png.jpg";
import "./styles.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      alert("Password reset Email sent");
      history.push("/login");
    } catch {
      setError("Password Reset Failed");
    }
    setLoading(false);
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="signup-body">
        <Card className="card_parent">
          <Card.Body className="card_body">
            <div className="youtubelogo">
              <img src={youtube_logo_png} className="youtube-img" alt="" />
            </div>
            <h2 className="text-center mb-4 white-color">Forgot Password ?</h2>
            <h4 className="text-center mb-2 white-color">Enter Your Email</h4>
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
              <Button
                className="w-100 button particular-field"
                disabled={loading}
                style={{ margin: "10px", backgroundColor: "rgb(201 29 32)" }}
                type="submit"
              >
                Reset Password
              </Button>
              <Link
                to="/login"
                style={{ color: "rgb(201 29 32)", textDecoration: "none" }}
              >
                Login
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
