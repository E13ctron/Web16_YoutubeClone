import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './LikedVideo.css'
import { useAuth } from '../../contexts/AuthContext'
import VideoCard from './VideoCard'


export default function LikedVideo() {
   const { likedVideos } = useAuth()
   const LikedVideoComponents = likedVideos.map((video) => (
    <VideoCard video={video} />))
    return (
      <div className="liked_video">
          <Header />
          <div className="liked_video_section">
              <Sidebar />
              <div className="liked_video_body">
                   {likedVideos.length > 0 ? LikedVideoComponents : <h2>No Liked Videos</h2>}
              </div>
          </div>
      </div>
    )
}
