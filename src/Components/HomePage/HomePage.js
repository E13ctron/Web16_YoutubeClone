import React from 'react'
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar'
import VideoSection from './VideoSection'
import "./Homepage.css";

export default function HomePage() {
    
    return (
        <div>
           <Header />

           <div className="home_page">
               <Sidebar />

               {/* id="content" is used for toggling  */}
               <div className="video-section" id="content">
                   

                    <VideoSection />
               </div>

           </div>
        </div>
    )
}