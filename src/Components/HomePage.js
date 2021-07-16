import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from "./HomePage/Header"
import Sidebar from "./HomePage/Sidebar"
import VideoSection from "./HomePage/VideoSection";
import "./HomePage/Homepage.css";


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
               </div>
           </div>
        </div>
    )
}
