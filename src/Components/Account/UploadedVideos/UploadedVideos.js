import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header'
import Sidebar from '../Sidebar'
import VideoCard from '../../HomePage/VideoCard'
import { useAuth } from '../../../contexts/AuthContext'
import './uploadedvideo.css'


function UploadedVideos() {
    const {videos, currentUser} = useAuth()
    const [myVideos, setMyVideos] = useState([])
    useEffect(() => {
        setMyVideos(videos.filter((video) => video.email === currentUser.email))
    },[currentUser, videos])
    const myVideosComponents = myVideos.map((video) => (
        <VideoCard video={video} />
    ))
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="uploadedvideo">
                {myVideos.length > 0 ? myVideosComponents : <h2>No Videos Uploaded Yet</h2>}
                </div>
            </div>
        </div>
    )
}

export default UploadedVideos
