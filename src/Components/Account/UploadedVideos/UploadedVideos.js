import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header'
import Sidebar from '../Sidebar'
import VideoCard from '../../HomePage/VideoCard'
import { useAuth } from '../../../contexts/AuthContext'
import './uploadedvideo.css'


function UploadedVideos() {
    const {videos, currentUser} = useAuth()
    const [myVideos, setMyVideos] = useState()
    useEffect(() => {
        setMyVideos(videos.filter((video) => video.email === currentUser.email))
    },[currentUser, videos])

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
