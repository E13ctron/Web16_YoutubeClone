import React from 'react';

import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
import { useHistory } from "react-router-dom";

const VideoCard =({ video }) => {
    
    const history = useHistory();

    //const handleClickCard = () => history.push(`/watch/${video.id}`);
    //const handleClickAvatar = () =>
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
                </div>
            </div>
        </div>
    );
}

export default VideoCard;