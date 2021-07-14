import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function HomePage() {
    const { currentUser } = useAuth()
    const history = useHistory()
    
    return (
        <div>
            <h1>This is Homepage</h1>
            { currentUser && <p>{currentUser.email}</p>}
        </div>
    )
}
