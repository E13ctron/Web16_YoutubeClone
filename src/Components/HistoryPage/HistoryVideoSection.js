import React, { useEffect , useState } from 'react';
import "./history-video-section.css"
import HistoryVideoCard from './HistoryVideoCard'
import { useAuth } from '../../contexts/AuthContext'
import { db } from '../../firebase'

function HistoryVideoSection(){
    const { videos, currentUser } = useAuth();
    const [ historyVideos, setHistoryVideos ] = useState([])
    useEffect(() => {
        db.collection("users").doc(currentUser.uid).collection("history").onSnapshot((snapDocs) => {
            setHistoryVideos(snapDocs.docs.map((doc) => doc.data()))
        })
    },[currentUser])
    const VideoComponents = historyVideos.map(video => <HistoryVideoCard historyVideo={video} />)
    return (
        <div>
            <h3>Watch history</h3>

        <div className="history-video-section">
           {videos.length > 0 ? VideoComponents : <h2>No Videos Found</h2>}
        </div>

    </div>
    );
}

export default HistoryVideoSection;

