import React, { useRef} from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function ForgotPassword() {
    const emailRef = useRef()
    return (
     
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <Form>
                        <Form.Group id="email" style={{ margin: "10px"}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button className="w-100" style={{ margin: "10px" }} type="submit">
                            Reset Password
                            </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
      
    );
}
