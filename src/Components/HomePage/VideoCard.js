import React from 'react';

import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
import { useHistory } from "react-router-dom";

const VideoCard =({ video }) => {
    
    const history = useHistory();

    const handleClickCard = () => history.push(`/watch/${video.id}`);
    const handleClickAvatar = () =>
    history.push(`/PreviewChannel?name=${video.email}`);

    const newDate = moment.unix(video?.timestamp).format("YYYYMMDD, HH:MM:SS");
    
    console.log(newDate)
    const uploadedTime = moment(newDate, "YYYYMMDD, HH:MM:SS").fromNow()

    return (
        <div className="videocard">
            <img className="videocard_image" src={video.thumbnailURL} alt="Thumbnail" />
            <div className="videocard_info">
                <Avatar
                    className="videoCard_avatar"
                    />

                <div className="videocard_channel">
                    <h1 className="videocard_title">{video.title}</h1>

                    <div className="videocard_texts">
                        <p className="videocard_text">{video.channelName}</p>
                        <p className="videocard_text">123 views • {uploadedTime}</p>
                    </div>

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