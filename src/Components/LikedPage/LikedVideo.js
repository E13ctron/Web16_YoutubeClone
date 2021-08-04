import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './LikedVideo.css'

export default function LikedVideo() {
   
    return (
      <div className="liked_video">
          <Header />
          <div className="liked_video_section">
              <Sidebar />
              <div className="liked_video_body">
                   
                
              </div>
          </div>
      </div>
    )
}
