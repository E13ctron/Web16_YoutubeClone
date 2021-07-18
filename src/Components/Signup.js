import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value === confirmPasswordRef.current.value){
           try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
           } catch {
               setError("Failed to create an account")
               
           }
           setLoading(false)
        }
        else{
            setError("Passwords do not match")
        }
    }
    return (
        <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <div>
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{ error }</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email" style={{ margin: "10px" }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password" style={{ margin: "10px" }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password" style={{ margin: "10px" }}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" style={{ margin: "10px" }} type="submit">
                                Sign Up
                            </Button>
                            <div>Already have an account?</div>
                            <div>
                                <Link to="/login">Sign In</Link>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        </div>
    </Container>
    )
}
