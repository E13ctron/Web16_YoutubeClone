import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from "./HomePage/Header"

export default function HomePage() {
    const { currentUser, signout } = useAuth()
    const history = useHistory()
    function signOut(){
        signout();
        history.push("/login")
    }
    
    return (
        <div>
           <Header />
        </div>
    )
}
