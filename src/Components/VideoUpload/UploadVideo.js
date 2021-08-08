import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@material-ui/core";
import { Close } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {v4 as uuidv4} from "uuid"
import { db, storage } from "../../firebase";
import firebase from "firebase";                                           

const UploadVideo = ({video, setVideo, closeVideoUpload}) => {

  const[progress, setProgress] = useState(0);
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");

  const[thumbnail, setThumbnail] = useState(null);

  const[urlThumbnail, setUrlThumbnail] = useState(null);
  const[urlVideo, setUrlVideo] = useState(null);

  const[id, setID] = useState(uuidv4());

  const[uploadedThumbnail, setUploadedThumbnail] = useState(false)
  const[uploadedVideo, setUploadedVideo] = useState(false)

  const{currentUser} = useAuth();
  //console.log('uid: ', currentUser.uid)

  const createID=()=> setID(uuidv4());

  const handleThumbnailChange=(e)=>{
      if (e.target.files[0]){
          setThumbnail(e.target.files[0]);
      }
  }
  
  const handleUploadThumbnail = () => {
      const uploadThumbnail = storage
        .ref(`thumbnails/${id}`)
        .put(thumbnail);
  
      uploadThumbnail.on(
        "state_changed",
        (snapshot) => {
         
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("thumbnails")
            .child(id)
            .getDownloadURL()
            .then((url) => {
              setUrlThumbnail(url);
              setUploadedThumbnail(true);
            });
        }
      );
    };
    

  const handleUploadVideo = () => {
      const uploadVideo = storage.ref(`videos/${id}`).put(video);
      
      uploadVideo.on(
          "state_changed",
          (snapshot) => {
            const progressPercent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
          },
          (err) => {
            console.log(err);
          },
          () => {
            storage
              .ref("videos")
              .child(id)
              .getDownloadURL()
              .then((url) => {
                setUrlVideo(url);
                setUploadedVideo(true);
              })
              .catch((err) => console.log(err));
          }
        );
      };

 

  const handleSubmit = () => {
      createID();
      handleUploadVideo();
      handleUploadThumbnail();
  };

  useEffect(() => {        if (uploadedThumbnail && uploadedVideo) {
        db.collection("Videos")
          .doc(id).set({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            id: id,
            videoURL: urlVideo,
            thumbnailURL: urlThumbnail,
            title: title,
            description: description,
            channelName: currentUser.displayName,
            email: currentUser.email,
            UserID: currentUser.uid,
            likes: 0,
            dislikes: 0,
            views: 0,
            channelImage: currentUser.photoURL
          })
          
          .then(() => {
            setProgress(0);
            setVideo(null);
            setTitle("");
            setThumbnail("");
            setUrlThumbnail("");
            setUrlVideo("");
            setDescription("");
            closeVideoUpload();
          });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedThumbnail, uploadedVideo]);
  
// async function deleteFile(){
//   try {
//  const response = await Drive.files.delete({
//    fieldId: ' '
//  });
//  console.log(response.data, response.status)
//   }
//   catch(error){
//     console.log(error.message)
//   }
// }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
              />
              
              <TextField
              label= "Description"
              multiline 
              rows={10} 
              variant="outlined" 
              fullWidth 
              placeHolder = "Tell viewers about your video." 
              style={{marginTop : "30px"} }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />

              <input
              className="custom-file-input add-thumbanil"
              type="file"
              onChange={handleThumbnailChange}
              />

              <progress value={progress} max="100" />

              <DialogActions>
                  <Button onClick={handleSubmit} variant="contained" color="primary"> Upload </Button>
              </DialogActions>
          </DialogContent>
      </div>
  )
}

export default UploadVideo;