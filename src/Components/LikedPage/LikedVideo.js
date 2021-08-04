import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './LikedVideo.css'
import { useAuth } from '../../contexts/AuthContext'

export default function LikedVideo() {
    const { likedVideos } = useAuth();
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
