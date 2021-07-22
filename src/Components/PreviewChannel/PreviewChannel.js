import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import "./PreviewChannel.css"
import channel_art_photo from "../../assets/channel_art_photo.jpg"
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'

const PreviewChannel = () => {
    return (
        <div>
            <Header />

            <div className="preview_channel">
                <Sidebar />
                <div className="channel">
                    <img className="channel_coverImg" src={channel_art_photo} alt="Channel Cover" height="422px" width="100%"></img>

                    <div className="channel_details">
                        <div className="channel_detailsWrap">
                            <div className="channel_avatarWrap">
                                <Avatar className="channel_avatar" />
                                <div className="videothumb_channel">
                                    <h1 className="videothumb_title">Captain Tony</h1>
                                    <p className="videothumb_text watch__subCount">2M Subscribers</p>
                                </div>
                                <Button className="watch__subBtn channel_subBtn" color="primary" variant="contained">SUBSCRIBE</Button>
                            </div>
                            <div className="channel_links">
                              <div className="channel_link">
                                  <p>HOME</p>
                              </div>
                              <div className="channel_link channel_link-active">
                                  <p>VIDEOS</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewChannel
