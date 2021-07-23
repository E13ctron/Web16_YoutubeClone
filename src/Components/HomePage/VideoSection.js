
import React from 'react';
import "./video-section.css"
import VideoCard from './VideoCard'
import { useAuth } from '../../contexts/AuthContext'

const VideoSection = () => {
    const { videos } = useAuth();
    return (
        <div>
            <h2>Recommended</h2>

        <div className="video-section">
           {videos.map((video) => (
               <VideoCard video={video} />
           ))}
        </div>

    </div>
    );
}

export default VideoSection;

