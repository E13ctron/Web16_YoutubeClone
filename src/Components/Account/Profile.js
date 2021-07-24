import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import './profile.css'
import { useAuth } from "../../contexts/AuthContext"

function Profile() {
    const { currentUser } = useAuth()
    const nameRef = useRef()
    
    return (
        <div className="profile">
            <h1>Profile</h1>
           <div className="profile_card">
            <Form>
                <Form.Group id="name" style={{margin: "20px"}}>
                    <h4>Name</h4>
                    <Form.Control type="text" ref={nameRef} />
                </Form.Group>
            </Form>
           { currentUser &&  <div className="email_div">
                <h4>Email</h4>
                <p>{currentUser.email}</p>
                <h4>User Id</h4>
                <p>{currentUser.uid}</p>
            </div>}
            <Button>Update Profile</Button>
            </div>
        </div>
    )
}

export default Profile
