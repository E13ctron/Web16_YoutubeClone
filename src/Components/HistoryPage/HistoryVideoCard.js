import React from 'react';
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import "./HistoryVideoCard.css";
import { useHistory } from "react-router-dom";

const HistoryVideoCard =({ historyVideo }) => {
    
    const history = useHistory();

    const handleWatchVideo = () => history.push(`/watch/${historyVideo.id}`);
    const handlePreviewChannel = () =>
    history.push(`/PreviewChannel?name=${historyVideo.email}`);
    // console.log(video.email);

    const newDate = moment.unix(historyVideo?.timestamp?.seconds).format("YYYYMMDD, HH:mm:ss");
    const uploadedTime = moment(newDate, "YYYYMMDD, HH:mm:ss").fromNow()

    return (
        <div className="videocard">
            <img onClick={handleWatchVideo} className="videocard_image" src={historyVideo.thumbnailURL} alt="Thumbnail" />
            <div className="videocard_info">
                <Avatar onClick={handlePreviewChannel}
                    className="videoCard_avatar"
                    src={historyVideo.channelImage}
                    />

                <div className="videocard_channel">
                    <h1 className="videocard_title" onClick={handleWatchVideo}>{historyVideo.title}</h1>

                    <div className="videocard_texts">
                        <p className="videocard_text" onClick={handlePreviewChannel}>{historyVideo.channelName}</p>
                        <p className="videocard_text">{uploadedTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryVideoCard;
