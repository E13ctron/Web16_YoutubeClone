import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import VideoCard from '../HomePage/VideoCard'
import './LikedVideo.css'
import { useAuth } from '../../contexts/AuthContext'
import { database } from '../../firebase'

export default function LikedVideo() {
    const { currentUser, likedVideos } = useAuth();
    return (
      <div className="liked_video">
          <Header />
          <div className="liked_video_section">
              <Sidebar />
              <div className="liked_video_body">
                    {/* <h1>Liked Videos here</h1> */}
                    <div>
                    <div className="likedVideo">
                    {likedVideos ? (likedVideos.map((video) => (
                    <VideoCard video={video} />
                ))) : <h2>No videos</h2>}
                </div>
                </div>
              </div>
          </div>
      </div>
    )
}
