import React from 'react'
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar'
import VideoSection from './VideoSection'
import "./Homepage.css";
import SelectVideo from '../VideoUpload/SelectVideo';

export default function HomePage() {
    
    return (
        <div>
           <Header />

           <div className="home_page">
               <Sidebar />

               {/* id="content" is used for toggling  */}
               <div className="video-section" id="content">
                   <SelectVideo />

                    <VideoSection />
               </div>

           </div>
        </div>
    )
}