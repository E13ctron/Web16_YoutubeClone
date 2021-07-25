import React from 'react'
import { useHistory } from 'react-router-dom'
// import photoURL from "../../assets/images/logo192.png"
import "./VideoSmall.css"
import moment from 'moment'


const VideoSmall = ({channelView=false, video}) => {
    const history = useHistory();
    const handleWatchVideo = () => history.push(`/watch/${video.id}`);
    const handlePreviewChannel = () =>
    history.push(`/PreviewChannel?name=${video.email}`);
    
    const newDate = moment.unix(video?.timestamp?.seconds).format("YYYYMMDD, HH:MM:SS");
    const uploadedTime = moment(newDate, "YYYYMMDD, HH:MM:SS").fromNow()

    return (
        <div className={`watch-right-thumb ${channelView && "videoSmall_channelView"}`}>
            <div className="wr-thumb-img" onClick={handleWatchVideo}>
                <img src= {video.thumbnailURL}
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0QCUXy_sNwXCNeGI9oGIHDQjDfAKIAqkWQ&usqp=CAU"
                 alt="thumbnail" className={`thumbimg ${channelView && "videoSmall_channelView_img"}`} />
            </div>
            <div className="wr-thumb-right">
                <div className="wr-thumb-right-title" onClick={handleWatchVideo}>
                    {video.title}
                </div>
                <div className="wr-thumb-right-text" onClick={handlePreviewChannel}>
                   {!channelView && (<div className="wr-thumb-channel-name">
                        {video.channelName} 
                    </div>) } 
                    
                    <div className="wr-thumb-info">2k views || {uploadedTime}</div>
                </div>
            </div>
           
        </div>
    )
}

export default VideoSmall
