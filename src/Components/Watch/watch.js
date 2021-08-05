import React, { useState, useEffect } from 'react'
//import Header from "../Header/Header"
import "./watch.css"
//import videoURL from "../../assets/videos/video.mp4"
import { ThumbUpAlt,MoreHoriz, Reply, PlaylistAdd } from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core'
import VideoSmall from '../WatchRight/VideoSmall'
import { useHistory } from 'react-router-dom'
import moment from "moment";
import { useAuth } from "../../contexts/AuthContext";
import useScrollTop from '../useScrollTop'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebase'


const Watch = ({video}) => {
    const {subscriptions,subscribeChannel,unsubscribeChannel} = useAuth();
    const [subscribeBtnState, setSubscribeBtnState] = useState(false);
    const channel = video.email
    const [subscribe,setSubscribe] = useState("SUBSCRIBE");
    function handleSubscribeClick(){
        if(!subscribeBtnState)
        {
     setSubscribe("SUBSCRIBED");
     setSubscribeBtnState(true)
     subscribeChannel(channel)
         }
    }
    function handleUnSubscribeClick(){
        if(subscribeBtnState)
        {
     setSubscribe("SUBSCRIBE");
     setSubscribeBtnState(false)
     unsubscribeChannel(channel)
            }
    }
    useEffect(() => {
        for(var i = 0;i < subscriptions.length;i++){
            if(subscriptions[i].name === channel){
                setSubscribe("SUBSCRIBED")
                setSubscribeBtnState(true)
            }
        }
    },[subscriptions,channel])
    db.collection("IndividualUsers").doc(channel).onSnapshot((snap)=>{
        var sub = snap.data().subscribers
        document.querySelector("#subId").textContent= sub + " subscribers";
    })



    toast.configure()
    useScrollTop();
    const history = useHistory();
    const [showDesc, setShowDesc] = useState(false);
    const handlePreviewChannel = () => history.push("/PreviewChannel")
    const { videos, likedVideos, likeVideo, unlikeVideo, updateViews } = useAuth()
    const [viewsUpdated, setViewsUpdated ] = useState(false)
    const [likeButtonDisabled, setLikeButtonDisabled] = useState(false)
    const views = video.views;
    const formatted = moment
    .unix(video?.timestamp?.seconds)
    .format("MMM DD, YYYY  ");
    
    useEffect(() => {
        for(var i = 0;i < likedVideos.length;i++){
            if(likedVideos[i].id === video.id){
                setLikeButtonDisabled(true)
            }
        }
    },[likedVideos,video])
    
     useEffect(() => {
        if(!viewsUpdated){
            updateViews(video)
            setViewsUpdated(true)
        }
     },[video,viewsUpdated, updateViews])
    

    function handleLike(){
        if(!likeButtonDisabled){
            likeVideo(video)
            setLikeButtonDisabled(true)
        }
    }
    function handleUnLike(){
        if(likeButtonDisabled){
            unlikeVideo(video)
            setLikeButtonDisabled(false)
        }
    }
    function share(){
        const url = window.location.href
        navigator.clipboard.writeText(url)
        toast('Link copied to Clipboard')
    }
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
                                    <p className="videothumb__text">{views} views • {formatted} </p>
                                </div>
                                <div className="watch__videoInfoRight">
                                    <div className="watch__likeContainer">
                                        <div className="watch__likeWrap">
                                            <div className="watch__likeBtnContainer color--gray">
                                                {likeButtonDisabled ? <ThumbUpAlt onClick={handleUnLike} style={{ color: "blue" }} className="watch__icon" />
                                                :
                                                <ThumbUpAlt onClick={handleLike} className="watch__icon" />
                                                }
                                                <p>{video.likes}</p>
                                            </div>

                                           

                                        </div>
                                        <div className="watch__likeDislikes" />

                                    </div>
                                    <div onClick={share} className="watch__likeBtnContainer color--gray">
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
                                        <p id="subId" className="videothumb__text watch__subCount"></p>

                                    </div>
                                </div>
                                {subscribeBtnState ?  <Button onClick={handleUnSubscribeClick} className="watch__subBtn_subbed channel_subBtn"
                                 color="primary" variant="contained">{subscribe}</Button> : <Button onClick={handleSubscribeClick} className= "watch__subBtn channel_subBtn" color="primary" variant="contained">{subscribe}</Button>}
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
                        {videos.map(function(item){
                            if(item.id === video.id){
                                return null;
                            }
                            else{
                                return(<VideoSmall video={item} />)
                            }
                        }
                        )}
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Watch;
