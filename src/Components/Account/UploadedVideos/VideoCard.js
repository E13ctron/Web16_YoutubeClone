import React,{useState} from "react";
import { useAuth } from "../../../contexts/AuthContext";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import "./UV-VideoCard.css";
import { useHistory } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@material-ui/core";
import { Close } from '@material-ui/icons'
import { db } from "../../../firebase";

const VideoCard = ({ video }) => {
  const history = useHistory();
  const { setDeleteVideoOpen, setVideoDeleted } = useAuth();
  const handleWatchVideo = () => history.push(`/watch/${video.id}`);
  const handlePreviewChannel = () =>
    history.push(`/PreviewChannel?name=${video.email}`);
  // console.log(video.email);

  const newDate = moment
    .unix(video?.timestamp?.seconds)
    .format("YYYYMMDD, HH:mm:ss");
  const uploadedTime = moment(newDate, "YYYYMMDD, HH:mm:ss").fromNow();
  function deleteVideoClicked() {
    setDeleteVideoOpen(true);
    setVideoDeleted(video);
  }
   
  const [ editDialogOpen, setEditDialogOpen ] = useState(false)
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");

  function editVideoClicked(){ 
    setEditDialogOpen(true)
  }
  function closeDialog(){
    setEditDialogOpen(false)
  }

  return (
    <div className="videocard">
      <img
        onClick={handleWatchVideo}
        className="videocard_image"
        src={video.thumbnailURL}
        alt="Thumbnail"
      />
      <div className="UV-videocard_info">
        <div className="videocard_info_left">
          <Avatar
            onClick={handlePreviewChannel}
            className="videoCard_avatar"
            src={video.channelImage}
          />

          <div className="videocard_channel">
            <h1 className="videocard_title" onClick={handleWatchVideo}>
              {video.title}
            </h1>

            <div className="videocard_texts">
              <p className="videocard_text" onClick={handlePreviewChannel}>
                {video.channelName}
              </p>
              <p className="videocard_text">
                {video.views} views • {uploadedTime}
              </p>
            </div>
          </div>
        </div>

        <div className="videocard_info_right">
          <EditIcon className="edit_icon" onClick={editVideoClicked} />
          <DeleteIcon className="delete_icon" onClick={deleteVideoClicked} />
        </div>
      </div>



      <div>
            <Dialog open={editDialogOpen} keepMounted>
            <div>
          <div className="header">
          <DialogTitle> Edit Video Details </DialogTitle>
          <Close className="closeIcon" onClick={closeDialog} />
          </div>

          <Divider/>
          <DialogContent>
              <TextField 
              label="Title" 
              variant="outlined" 
              fullwidth
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
              />
              
              <TextField
              label= "Description"
              multiline 
              rows={10} 
              variant="outlined" 
              fullWidth 
              placeHolder = "Tell viewers about your video." 
              style={{marginTop : "30px"} }
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              defaultValue={description}
              />

              <DialogActions>
                  <Button
                  //  onClick={handleSubmit}
                   variant="contained" color="primary"> Upload </Button>
              </DialogActions>
          </DialogContent>
      </div>     
            </Dialog>
        </div>
    </div>

    
    

  );

  var editBtn= document.querySelector(".delete_icon").setAttribute('video-id',video.id);
};

export default VideoCard;
