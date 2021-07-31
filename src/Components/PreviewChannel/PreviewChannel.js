import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import "./PreviewChannel.css"
import channel_art_photo from "../../assets/channel_art_photo.jpg"
import { Avatar, Button } from '@material-ui/core'
import VideoSmall from '../WatchRight/VideoSmall'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation } from 'react-router'
import useScrollTop from '../useScrollTop'


const PreviewChannel = () => {
    useScrollTop();
    const currentLocation = useLocation();
    console.log(currentLocation);

    const channel = new URLSearchParams(currentLocation.search).get("name");

    // console.log(channel);

    const [currentChannel,setCurrentChannel] = useState([]);
    const {videos} = useAuth();
    console.log(videos)
    
    //Below loop is to get channel name :/ :/
    var v;
    var channelTitleName;
    for(v=0;v<videos.length; v++){
        if(videos[v].email===channel){
            channelTitleName=videos[v].channelName;
            break;
        }
    }
    // console.log(channelTitleName);

    useEffect(() => {
        setCurrentChannel(videos.filter((video) => video.email ===channel));
    }, [channel, videos])

    
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
                                <Avatar className="channel_avatar" />
                                <div className="videothumb__channel">
                                    <h1 className="channel_title">{channelTitleName}</h1>
                                    <p className="videothumb__text watch__subCount">2M Subscribers</p>
                                </div>
                            </div>
                                <Button className="watch__subBtn channel_subBtn" color="primary" variant="contained">SUBSCRIBE</Button>
                            </div>
                            <div className="channel_links">
                              <div className="channel_link">
                                  <p>HOME</p>
                              </div>
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
