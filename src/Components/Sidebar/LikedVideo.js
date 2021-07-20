import React from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import VideoCard from '../HomePage/VideoCard'
import './LikedVideo.css'
export default function LikedVideo() {
    return (
      <div className="liked_video">
          <Header />
          <div className="liked_video_section">
              <Sidebar />
              <div className="liked_video_body">
                    {/* <h1>Liked Videos here</h1> */}
                    <div>
                    <div className="likedVideo">
                   <VideoCard
                    title="Video Title"
                    views="views"
                    timestamp="timestamp"
                    channelimage="https://media.istockphoto.com/vectors/video-camera-play-icon-vector-illustration-design-vector-id1167382298?k=6&m=1167382298&s=612x612&w=0&h=B9RPJ9e0IIVqHDiFxOPKBMT0FYAhaK26CFYnVTSkqnQ="
                    channel="channel"
                    image="https://image.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg"
                />
                   <VideoCard
                    title="Video Title"
                    views="views"
                    timestamp="timestamp"
                    channelimage="https://media.istockphoto.com/vectors/video-camera-play-icon-vector-illustration-design-vector-id1167382298?k=6&m=1167382298&s=612x612&w=0&h=B9RPJ9e0IIVqHDiFxOPKBMT0FYAhaK26CFYnVTSkqnQ="
                    channel="channel"
                    image="https://image.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg"
                />
                   <VideoCard
                    title="Video Title"
                    views="views"
                    timestamp="timestamp"
                    channelimage="https://media.istockphoto.com/vectors/video-camera-play-icon-vector-illustration-design-vector-id1167382298?k=6&m=1167382298&s=612x612&w=0&h=B9RPJ9e0IIVqHDiFxOPKBMT0FYAhaK26CFYnVTSkqnQ="
                    channel="channel"
                    image="https://image.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg"
                />
                   <VideoCard
                    title="Video Title"
                    views="views"
                    timestamp="timestamp"
                    channelimage="https://media.istockphoto.com/vectors/video-camera-play-icon-vector-illustration-design-vector-id1167382298?k=6&m=1167382298&s=612x612&w=0&h=B9RPJ9e0IIVqHDiFxOPKBMT0FYAhaK26CFYnVTSkqnQ="
                    channel="channel"
                    image="https://image.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg"
                />
                   <VideoCard
                    title="Video Title"
                    views="views"
                    timestamp="timestamp"
                    channelimage="https://media.istockphoto.com/vectors/video-camera-play-icon-vector-illustration-design-vector-id1167382298?k=6&m=1167382298&s=612x612&w=0&h=B9RPJ9e0IIVqHDiFxOPKBMT0FYAhaK26CFYnVTSkqnQ="
                    channel="channel"
                    image="https://image.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg"
                />
                   <VideoCard
                    title="Video Title"
                    views="views"
                    timestamp="timestamp"
                    channelimage="https://media.istockphoto.com/vectors/video-camera-play-icon-vector-illustration-design-vector-id1167382298?k=6&m=1167382298&s=612x612&w=0&h=B9RPJ9e0IIVqHDiFxOPKBMT0FYAhaK26CFYnVTSkqnQ="
                    channel="channel"
                    image="https://image.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg"
                />
                </div>
                </div>
              </div>
          </div>
      </div>
    )
}