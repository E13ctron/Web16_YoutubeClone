import React from 'react'
import Header from '../../Header/Header'
import Sidebar from '../Sidebar'
import './updatepassword.css'

function UpdatePassword() {
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="update_password">
                    <h1>Update Password</h1>
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword
