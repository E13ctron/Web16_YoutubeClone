
import React,{useState,useEffect} from 'react';
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
import { useHistory } from "react-router-dom";
import { db } from '../../firebase';

const VideoCard =({ video }) => {
    const history = useHistory();

    const handleWatchVideo = () => history.push(`/watch/${video.id}`);
    const handlePreviewChannel = () =>
    history.push(`/PreviewChannel?name=${video.email}`);
    // console.log(video.email);

    const newDate = moment.unix(video?.timestamp?.seconds).format("YYYYMMDD, HH:mm:ss");
    const uploadedTime = moment(newDate, "YYYYMMDD, HH:mm:ss").fromNow()

    var channelIMG= video.channelImage;
    var ChannelUSERid=video.UserID;
    const [lg,setlg]= useState(channelIMG)
    useEffect(()=>{
    db.collection("ChannelCreators").doc(ChannelUSERid).onSnapshot((snap)=>{
        if(snap.exists){
            setlg(snap.data().iconURL)
        }
    })},[ChannelUSERid])

    return (
        <div className="videocard">
            <img onClick={handleWatchVideo} className="videocard_image" src={video.thumbnailURL} alt="Thumbnail" />
            <div className="videocard_info">
                <Avatar onClick={handlePreviewChannel}
                    className="videoCard_avatar"
                    src=
                    // {video.channelImage}
                    {lg}
                    />

                <div className="videocard_channel">
                    <h1 className="videocard_title" onClick={handleWatchVideo}>{video.title}</h1>

                    <div className="videocard_texts">
                        <p className="text_colour videocard_text"  onClick={handlePreviewChannel}>{video.channelName}</p>
                        <p className="text_colour videocard_text" >{video.views} views • {uploadedTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
