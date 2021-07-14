import React, { useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    return (
        <div>
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form>
                            <Form.Group id="email" style={{ margin: "10px" }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password" style={{ margin: "10px" }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password" style={{ margin: "10px" }}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={emailRef} required />
                            </Form.Group>
                            <Button className="w-100" style={{ margin: "10px" }} type="submit">
                                Sign Up
                            </Button>
                            <div>Already have an account?</div>
                            <div> <a href="/Components/login" style={{ textAlign:"center" }}>Sign In</a></div>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        </div>
    )
}
