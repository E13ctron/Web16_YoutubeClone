import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { Close, Publish } from '@material-ui/icons'
import { useAuth } from '../../contexts/AuthContext'
import { Divider } from '@material-ui/core'
import './selectvideos.css'

function SelectVideo() {
    const { videoUploadOpen, setVideoUploadOpen } = useAuth()
    function closeVideoUpload(){
        setVideoUploadOpen(false)
    }
    return (
        <div>
            <Dialog open={videoUploadOpen} keepMounted>
                <div className="header">
                    <DialogTitle>
                        Upload Video
                    </DialogTitle>
                    <Close className="close_icon" onClick={closeVideoUpload} />
                </div>
                <Divider />
                <DialogContent className="dialog">
                    <div className="publishWrap">
                        <Publish className="publishIcon" />
                    </div>
                    <div className="input_div">
                    <input type="file" className="custom-file-input" />
                    </div>
                    <div className="text_div">
                        <p className="text">Drag and Drop Videos</p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SelectVideo
