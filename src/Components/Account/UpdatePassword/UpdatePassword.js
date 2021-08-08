import React, { useState, useRef} from 'react'
import Header from '../../Header/Header'
import Sidebar from '../Sidebar'
import './updatepassword.css'
import { useAuth } from '../../../contexts/AuthContext'
import { Form, Button, Alert } from 'react-bootstrap'

function UpdatePassword() {
    const [loading ,setLoading] = useState(false)
    const { updatepassword } = useAuth()
    const [error, setError] = useState()
    const [ result, setResult] = useState()
    const password = useRef()
    const confirmPassword = useRef()
    async function updatePassword(){
        if(password.current.value === confirmPassword.current.value){
            setLoading(true)
            try{
                await updatepassword(password.current.value)
                setResult("Password Updated Successfully")
            }
            catch{
                setError("An error Occured")
            }
            setLoading(false)
        }
        else{
            setError("Entered Passwords doesn't match")
        }
    }
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="update_password">
                    <h1>Update Password</h1>
                    <p>*not meant for sign In with Google Users</p>
                    <div className="update_password_card">
                        <Form>
                            <div className="form_input">
                                <Form.Group id="password">
                                    <h5>New Password</h5>
                                    <Form.Control type="password" ref={password}/>
                                </Form.Group>
                            </div>
                            <div className="form_input">
                                <Form.Group id="confirmPassword">
                                    <h5>Confirm Your New Password</h5>
                                    <Form.Control type="password" ref={confirmPassword}/>
                                </Form.Group>
                            </div>
                        </Form>
                        <Button disabled={loading} onClick={updatePassword} style={{backgroundColor: "rgb(201 29 32)", border: "none"}}>Update Password</Button>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {result && <Alert variant="success">{result}</Alert>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword
