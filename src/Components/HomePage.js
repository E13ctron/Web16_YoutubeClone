import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from "./Header"
import Sidebar from './Sidebar/Sidebar'
import VideoSection from './HomePage/VideoSection'
import "./HomePage.css"

import "./HomePage/Homepage.css";
import SelectVideo from './VideoUpload/SelectVideo'

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

           <div className="home_page">
               <Sidebar />
               <div className="video-section">
                    <VideoSection />
                    <SelectVideo />
               </div>

           </div>
        </div>
    )
}
