import React, { useState, useEffect} from 'react'
//import Header from "../Header/Header"
import "./watch.css"
//import videoURL from "../../assets/videos/video.mp4"
import { ThumbUpAlt, MoreHoriz, Reply, PlaylistAdd } from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core'
import VideoSmall from '../WatchRight/VideoSmall'
import { useHistory } from 'react-router-dom'
import moment from "moment";
import { useAuth } from "../../contexts/AuthContext";

const Watch = ({video}) => {
    const history = useHistory();
    const [showDesc, setShowDesc] = useState(false);
    const [ likeButtonDisabled, setLikeButtonDisabled] = useState(false)
    const handlePreviewChannel = () => history.push("/PreviewChannel")
    const { videos,likeVideo, likedVideos, updateViews } = useAuth()
    const formatted = moment
    .unix(video?.timestamp?.seconds)
    .format("MMM DD, YYYY  ");
    async function likedHandle(){
        if(!likeButtonDisabled){
            await likeVideo(video);
            setLikeButtonDisabled(true)
        }
    }
    useEffect(() => {
        updateViews(video)
        const videos = likedVideos
        console.log(videos)
        console.log(video)
        for(var i = 0;i < videos.length;i++){
            if(videos[i].id === video.id){
                setLikeButtonDisabled(true)
                console.log("Present")
            }
        }
    },[updateViews, video, likedVideos])
    return (
        <>
            
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" controls autoPlay>
                            <source src={video.videoURL} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtn">
                            <h1 className="watch__title">{video.title}</h1>
                            <div className="watch__videoInfo">
                                <div className="watch__videoInfoLeft">
                                    <p className="videothumb__text">{video.views} views • {formatted} </p>
                                </div>
                                <div className="watch__videoInfoRight">
                                    <div className="watch__likeContainer">
                                        <div className="watch__likeWrap">
                                            <div className="watch__likeBtnContainer color--gray">
                                                {likeButtonDisabled ? <ThumbUpAlt style={{ color: "green" }} onClick={likedHandle} className="watch__icon" />
                                                    : <ThumbUpAlt onClick={likedHandle} className="watch__icon" />}
                                                
                                                <p>{video.likes}</p>
                                            </div>
                                        </div>
                                        <div className="watch__likeDislikes" />

                                    </div>
                                    <div className="watch__likeBtnContainer color--gray">
                                        <Reply className="watch__icon share-icon" />
                                        <p>SHARE</p>
                                    </div>
                                    <div className="watch__likeBtnContainer color--gray">
                                        <PlaylistAdd className="watch__icon play-addicon" />
                                        <p>SAVE</p>
                                    </div>
                                    <div className="watch__likeBtnContainer color--gray">
                                        <MoreHoriz className="watch__icon play-addicon" />
                                        {/* <p>SAVE</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="watch__details">
                            <div className="watch__detailsContainer">
                                <div className="videothumb__details watch_avatarWrap">
                                    <Avatar style={{cursor:"pointer"}} src={video.channelImage} onClick={handlePreviewChannel} />
                                    <div className="videothumb__channel">
                                        <h1 className="videothumb_title">
                                            {video.channelName}
                                        </h1>
                                        <p className="videothumb__text watch__subCount">2M Subscribers</p>

                                    </div>
                                </div>
                                <Button className="watch__subBtn" color="primary" variant="contained">
                                    SUBSCRIBE
                                </Button>
                            </div>
                            <div className="watch__description">
                                <p style={{ maxHeight: showDesc && "100%" }}>
                                    {video.description}
                                </p>
                                <p
                                    className="watch__showMore"
                                    onClick={() => setShowDesc(!showDesc)}>
                                    SHOW {showDesc ? "LESS" : "MORE"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="watch-right">
                        {videos.map((item) => 
                            <VideoSmall video={item} />)}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Watch;
