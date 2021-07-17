import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import VideoUploadSection from './VideoUploadPage/VideoUploadSection'
import "./videouploadpage.css"

function VideoUploadPage() {
    return (
        <div>
            <Header />
            <div className="videouploadpage_body">
                <Sidebar />
                <VideoUploadSection />
            </div>
        </div>
    )
}

export default VideoUploadPage
