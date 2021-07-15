import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function HomePage() {
    const { currentUser, signout } = useAuth()
    const history = useHistory()
    function signOut(){
        signout();
        history.push("/login")
    }
    
    return (
        <div>
            <h1>This is Homepage</h1>
            { currentUser && <p>{currentUser.email}</p>}
            { currentUser && <button onClick={signOut}>Sign Out</button>}
        </div>
    )
}
