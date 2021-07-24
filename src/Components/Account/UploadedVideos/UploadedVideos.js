import React from 'react'
import Header from '../../Header/Header'
import Sidebar from '../Sidebar'
import VideoCard from '../../HomePage/VideoCard'
import { useAuth } from '../../../contexts/AuthContext'
import './uploadedvideo.css'


function UploadedVideos() {
    const {myVideos} = useAuth()
    

    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="uploadedvideo">
                {myVideos ? (myVideos.map((video) => (
                    <VideoCard video={video} />
                ))) : <h2>No videos</h2>}
                </div>
            </div>
        </div>
    )
}

export default UploadedVideos
