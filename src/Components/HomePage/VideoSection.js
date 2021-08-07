
import React from 'react';
import "./video-section.css"
import VideoCard from './VideoCard'
import { useAuth } from '../../contexts/AuthContext'

function VideoSection(){
    const { videos } = useAuth();
    
    const VideoComponents = videos.map(video => <VideoCard video={video} />)
    return (
        <div>
            <h2>Recommended</h2>

        <div className="video-section">
           {videos.length > 0 ? VideoComponents : <h2>Loading ...</h2>}
        </div>

    </div>
    );
}

export default VideoSection;

