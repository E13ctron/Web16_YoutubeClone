import React,{ useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { Close, Publish } from '@material-ui/icons'
import { useAuth } from '../../contexts/AuthContext'
import { Divider } from '@material-ui/core'
import './selectvideos.css'
import UploadVideo from './UploadVideo'

function SelectVideo() {
    const { videoUploadOpen, setVideoUploadOpen } = useAuth()

    const [video, setVideo] = useState(null);

    const handleVideoChange=(e)=>{
        if (e.target.files[0]){
            setVideo(e.target.files[0]);
        }
    };

    function closeVideoUpload(){
        setVideoUploadOpen(false)
    }


    return (
        <div>
            <Dialog open={videoUploadOpen} keepMounted>
                {video ? (
                    <UploadVideo video={video} setVideo={setVideo} closeVideoUpload={closeVideoUpload}/>
                ):(
                    <>
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
                                <input onChange={handleVideoChange}
                                type="file" className="custom-file-input" />

                            </div>
                            <div className="text_div">
                                <p className="text">Drag and Drop Videos</p>
                            </div>
                        </DialogContent>
                    </>
                )}
                
            </Dialog>
        </div>
    );
};

export default SelectVideo
