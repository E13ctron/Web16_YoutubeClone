import React from 'react'
import Header from "./Header"

import Sidebar from './Sidebar/Sidebar'
import VideoSection from './HomePage/VideoSection'
import "./HomePage.css"

import "./HomePage/Homepage.css";

export default function HomePage() {
    
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
