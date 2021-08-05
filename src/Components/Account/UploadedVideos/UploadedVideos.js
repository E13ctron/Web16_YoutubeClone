import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header'
import Sidebar from '../Sidebar'
import VideoCard from './VideoCard'
import { useAuth } from '../../../contexts/AuthContext'
import { storage, database } from '../../../firebase'
import './uploadedvideo.css'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { Close } from '@material-ui/icons'
import { Button } from 'react-bootstrap'
function UploadedVideos() {

    const {videos, currentUser, deleteVideoOpen, setDeleteVideoOpen, videoDeleted, setVideoDeleted} = useAuth()
    const [myVideos, setMyVideos] = useState([])
    useEffect(() => {
        setMyVideos(videos.filter((video) => video.email === currentUser.email))
    },[currentUser, videos])
    function closeDeleteDialog(){
        setDeleteVideoOpen(false)
        setVideoDeleted()
    }
    function confirmedDelete(){
        const videoStorageRef = storage.refFromURL(videoDeleted.videoURL)
        const thumbnailRef = storage.refFromURL(videoDeleted.thumbnailURL)
        videoStorageRef.delete()
        thumbnailRef.delete()
        database.videos.doc(videoDeleted.id).delete()
        setDeleteVideoOpen(false)
    }
    const myVideosComponents = myVideos.map((video) => (
        <VideoCard video={video} />
    ))
    return (
        <div>
            <Header />
            <div className="body">
                <Dialog open={deleteVideoOpen} keepMounted >
                    <div className="header">
                        <DialogTitle>
                            Delete Video
                        </DialogTitle>
                        <Close className="close_icon" onClick={closeDeleteDialog} />
                    </div>
                    <DialogContent>
                        <h4>Are you Sure you want to delete this video?</h4>
                        <div className="delete-choices">
                            <Button onClick={confirmedDelete} variant="danger">Delete</Button>
                            <Button onClick={closeDeleteDialog} variant="outline-secondary">Cancel</Button>
                        </div>
                        
                    </DialogContent>
                </Dialog>
                <Sidebar />
                <div className="uploadedvideo">
                {myVideos.length > 0 ? myVideosComponents : <h2>No Videos Uploaded Yet</h2>}
                </div>
            </div>
        </div>
    )
}

export default UploadedVideos
