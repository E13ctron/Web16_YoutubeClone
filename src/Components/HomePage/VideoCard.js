import React from 'react';
import Avatar from "@material-ui/core/Avatar"
import "./VideoCard.css"
import {useHistory} from "react-router-dom"
function VideoCard({ image, title, channel, views, timestamp, channelimage}) {
   const history = useHistory()
   const handleVideoClick = () =>history.push("/watch")
   const handleChannelClick = () =>history.push("/PreviewChannel")
   
    return (
        <div className="videocard">
            <img onClick={handleVideoClick} style={{cursor:"pointer"}} className="videocard_image" src={image} alt="" />
            <div className="videoCard_info">
                {/* <Avatar
                    className="videoCard_avatar"
                    alt={channel}
                    src={channelimage}
                    /> */}
                    <Avatar style={{cursor:"pointer"}} onClick={handleChannelClick}/>
                <div className="video_text">
                    <h4 onClick={handleVideoClick} style={{cursor:"pointer"}}>{title}</h4>
                    <p onClick={handleChannelClick} style={{cursor:"pointer"}}>{channel}</p>
                    <p>
                        {views} || {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;