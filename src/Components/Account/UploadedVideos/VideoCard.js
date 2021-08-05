import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import "./UV-VideoCard.css";
import { useHistory } from "react-router-dom";

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
          <DeleteIcon className="delete_icon" onClick={deleteVideoClicked} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
