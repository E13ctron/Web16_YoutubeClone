import React from "react"
import GoogleSignIn from "./GoogleSignIn";

function Login(){
    return (
       import React, { useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function Login() {
    const emailRef = useRef()
    return (
        <div>
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">LOGIN PAGE</h2>
                        <Form>
                            <Form.Group id="email" style={{ margin: "10px" }}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password" style={{ margin: "10px" }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={emailRef} required />
                            </Form.Group>
                            <Button className="w-100" style={{ margin: "10px" }} type="submit">
                                Sign In
                            </Button>
                            <div>Don't have an account?</div>
                            <div> <a href="./login" style={{ textAlign: "center" }}>Sign Up</a></div>
                        </Form>
                    </Card.Body>
                </Card>
                
            </>
        </div>
    )
}
        <GoogleSignIn/>

        //added google sign in. Add rest login functionality on top as per need
    );
}
export default Login;
