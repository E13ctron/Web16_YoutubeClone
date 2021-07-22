import React from 'react'
// import photoURL from "../../assets/images/logo192.png"
import "./VideoSmall.css"


const VideoSmall = ({channelView=false}) => {
    return (
        <div className={`watch-right-thumb ${channelView && "videoSmall_channelView"}`}>
            <div className="wr-thumb-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0QCUXy_sNwXCNeGI9oGIHDQjDfAKIAqkWQ&usqp=CAU"
                 alt="" className={`thumbimg ${channelView && "videoSmall_channelView_img"}`} />
            </div>
            <div className="wr-thumb-right">
                <div className="wr-thumb-right-title">
                    React Tutorial
                </div>
                <div className="wr-thumb-right-text">
                   {!channelView && (<div className="wr-thumb-channel-name">
                        React 
                    </div>) } 
                    
                    <div className="wr-thumb-info">2k views || 3 days ago</div>
                </div>
            </div>
           
        </div>
    )
}

export default VideoSmall
