import React from 'react'
import Header from "../Header"
import "./watch.css"
import videoURL from "../../assets/videos/video.mp4"
import { ThumbUpAlt, ThumbDownAlt, MoreHoriz, Reply, PlaylistAdd } from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core'


const watch = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" controls autoPlay>
                            <source src={videoURL} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtn">
                            <h1 className="watch__title">Demo video</h1>
                            <div className="watch__videoInfo">
                                <div className="watch__videoInfoLeft">
                                    <p className="videothumb__text">666 views || July 18, 2021 </p>
                                </div>
                                <div className="watch__videoInfoRight">
                                    <div className="watch__likeContainer">
                                        <div className="watch__likeWrap">
                                            <div className="watch__likeBtnContainer color--gray">
                                                <ThumbUpAlt className="watch__icon" />
                                                <p>3333</p>
                                            </div>

                                            <div className="watch__likeBtnContainer color--gray">
                                                <ThumbDownAlt className="watch__icon" />
                                                <p>22</p>
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
                                    <Avatar />
                                    <div className="videothumb__channel">
                                        <h1 className="videothumb_title">
                                            Captain Tony
                                        </h1>
                                        <p className="videothumb__text watch__subCount">2M Subscribers</p>

                                    </div>
                                </div>
                                <Button className="watch__subBtn" color="primary" variant="contained">
                                    SUBSCRIBE
                                </Button>
                            </div>
                            <div className="watch__description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi a labore obcaecati, officia eveniet, praesentium corporis ipsum nobis sed unde quae omnis neque consequuntur cumque. Eum reprehenderit, alias laboriosam ducimus voluptates commodi sapiente blanditiis temporibus repellendus quod similique id.</p>
                                <p className="watch__showMore">SHOW MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default watch;
