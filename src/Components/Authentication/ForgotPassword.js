import React, { useRef, useState} from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link , useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function ForgotPassword() {
    const emailRef = useRef()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth()
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            alert("Password reset Email sent")
            history.push("/login")
        } catch{
            setError("Password Reset Failed")
        }
        setLoading(false)
    }
    return (
        <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email" style={{ margin: "10px"}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button className="w-100" disabled={loading} style={{ margin: "10px" }} type="submit">
                            Reset Password
                            </Button>
                    </Form>
                    <Link to="/login">Login</Link>
                </Card.Body>
            </Card>
        </>
        </Container>
      
    );
}
