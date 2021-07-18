import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    TextField,
  } from "@material-ui/core";
import { Close, Description, Title } from '@material-ui/icons'
import React from 'react'


const UploadVideo = ({video, setVideo, closeVideoUpload}) => {
    return (
        <div>
            <div className="header">
            <DialogTitle> Upload Videos </DialogTitle>
            <Close className="closeIcon" onClick={closeVideoUpload} />
            </div>

            <Divider/>
            <DialogContent>
            <DialogTitle> Details </DialogTitle>

                <TextField 
                label="Title" 
                variant="outlined" 
                fullwidth
                
                />
                
                <TextField
                label= "Description"
                multiline 
                rows={10} 
                variant="outlined" 
                fullWidth 
                placeHolder = "Tell viewers about your video." 
                style={{marginTop : "30px"} }
                
                />

                <input
                className="custom-file-input add-thumbanil"
                type="file"
                
                />

                <progress  max="100" />

                <DialogActions>
                    <Button variant="contained" color="primary"> Upload </Button>
                </DialogActions>
            </DialogContent>
        </div>
    )
}

export default UploadVideo
