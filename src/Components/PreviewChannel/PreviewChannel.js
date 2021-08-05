import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import "./PreviewChannel.css"
import channel_art_photo from "../../assets/channel_art_photo.jpg"
import { Avatar, Button } from '@material-ui/core'
import VideoSmall from '../WatchRight/VideoSmall'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation } from 'react-router'
import { db } from '../../firebase'
import useScrollTop from '../useScrollTop'

const PreviewChannel = () => {
    useScrollTop();
    
    const currentLocation = useLocation();
    const channel = new URLSearchParams(currentLocation.search).get("name");
    const [currentChannel,setCurrentChannel] = useState([]);
    const {videos,subscriptions,subscribeChannel,unsubscribeChannel} = useAuth();
    const [subscribeBtnState, setSubscribeBtnState] = useState(false);
    const [subscriberCount, setSubscriberCount ] = useState();
    
    //Below loop is to get channel name :/ :/
    var v;
    var channelTitleName;
    for(v=0;v<videos.length; v++){
        if(videos[v].email===channel){
            channelTitleName=videos[v].channelName;
            break;
        }
    }
    useEffect(() => {
        setCurrentChannel(videos.filter((video) => video.email ===channel));
    }, [channel, videos])
    useEffect(() => {
        
        db.collection("IndividualUsers").doc(channel).get().then((doc) => {
            setSubscriberCount(doc.data().subscribers)
        })
    },[channel])
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
    return (
        <div>
            <Header />

            <div className="preview_channel">
                <Sidebar />
                <div className="channel">
                    <img className="channel_coverImg" src={channel_art_photo} alt="Channel Cover"></img>

                    <div className="channel_details">
                        <div className="channel_detailsWrap">
                            <div className="channel_avatarWrap">
                                {currentChannel[0] ? <Avatar src={currentChannel[0].channelImage} className="channel_avatar" />
                                :
                                <Avatar className="channel_avatar" />
                                }
                                <div className="videothumb__channel">
                                    <h1 className="channel_title">{channelTitleName}</h1>
                                    <p  className="videothumb__text watch__subCount">{subscriberCount} Subscribers</p>
                                </div>
                            </div>
                                {/* <Button onClick={handleSubscribeClick} className={subscribe==="SUBSCRIBE" ? "watch__subBtn channel_subBtn" : "watch__subBtn_subbed channel_subBtn" }
                                 color="primary" variant="contained">{subscribe}</Button> */}
                               {subscribeBtnState ?  <Button onClick={handleUnSubscribeClick} className="watch__subBtn_subbed channel_subBtn"
                                 color="primary" variant="contained">{subscribe}</Button> : <Button onClick={handleSubscribeClick} className= "watch__subBtn channel_subBtn" color="primary" variant="contained">{subscribe}</Button>}
                            </div>
                            <div className="channel_links">
                              {/* <div className="channel_link">
                                  <p>HOME</p>
                              </div> */}
                              <div className="channel_link channel_link-active">
                                  <p>VIDEOS</p>
                                  <div className="channel_link_border"/>
                              </div>
                              <div className="channel_link">
                                  <p>PLAYLISTS</p>
                              </div>
                              <div className="channel_link">
                                  <p>COMMUNITY</p>
                              </div>
                              <div className="channel_link">
                                  <p>ABOUT</p>
                              </div>
                            </div>
                    </div>
                    <div className="channel_content">
                       <div className="channel_contentWrapper">
                           {currentChannel.map((video) =>{
                               return <VideoSmall channelView video={video} key={video.id}/>
                           })}
                           </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PreviewChannel
