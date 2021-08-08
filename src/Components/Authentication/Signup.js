import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./styles.css"
import youtube_logo_png from "../../assets/youtube-logo-png.jpg"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value === confirmPasswordRef.current.value){
           try{
            setError('')
            setLoading(true)
            const size = emailRef.current.value.length
            if(size > 10){
                let address = emailRef.current.value.slice(size-10,size)
                if(address === "iiti.ac.in"){
                    await signup(emailRef.current.value,passwordRef.current.value)
                    currentUser.displayName = nameRef.current.value
                    history.push("/Home")
                }
                else{
                    setError('Please enter an IITI email id')
                }
            }
            else{
                setError('Please enter an IITI email id')
            }
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
        
            <div className="signup-body">
                <Card className="card_parent">
                    <Card.Body className="card_body">
                        <div className="youtubelogo">
                        <img src={youtube_logo_png} className="youtube-img" alt="" />
                        </div>
                        
                        <h2 className="text-center mb-4 white-color">Sign Up for Youtube</h2>
                        {error && <Alert variant="danger">{ error }</Alert>}
                        <Form className="form-body" onSubmit={handleSubmit}>
                        <Form.Group className="particular-field" id="Name" style={{ margin: "10px" }}>
                                
                                <Form.Control classname="particular-input" placeholder="Name" type="text" ref={nameRef} required />
                            </Form.Group>
                            <Form.Group className="particular-field" id="email" style={{ margin: "10px" }}>
                                
                                <Form.Control classname="particular-input" placeholder="Email" type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group className="particular-field" id="password" style={{ margin: "10px" }}>
                                
                                <Form.Control classname="particular-input" placeholder="Password" type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group className="particular-field" id="password" style={{ margin: "10px" }}>
                                
                                <Form.Control classname="particular-input" placeholder="Confirm Password" type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 button particular-field" style={{ margin: "10px", backgroundColor: "rgb(201 29 32)" }} type="submit">
                                Sign Up
                            </Button>
                            <div style={{color: "white"}}>Already have an account?</div>
                            <div>
                                <Link to="/login" style={{color: "rgb(201 29 32)", textDecoration: "none"}}>Sign In</Link>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
    
    </Container>
    )
}
