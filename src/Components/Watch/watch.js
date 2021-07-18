import React from 'react'
import Header from "../Header"
import "./watch.css"
import videoURL from "../../assets/videos/video.mp4"

const watch = () => {
    return (
        <>
        <div>
            <Header />
        </div>
        <div className="watch">
            <div className="watch__wrap">
              <div className="watch__left">
                  <video className="watch__video" autoPlay controls>
                      <source src ={videoURL} type="video/mp4"/>
                  </video>
              </div>
            </div>
        </div>

        </>
    )
}

export default watch
