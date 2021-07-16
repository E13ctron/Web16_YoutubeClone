import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Avatar from "@material-ui/core/Avatar";
import './Header.css';
import { useHistory } from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext"
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

export default function Header() {
  const { signout } = useAuth()
  const history = useHistory()
  async function signOut(){
    await signout()
    history.push("/")
  }
  function openUploadVideo(){
    history.push("/uploadvideo")
  }
  return (
    <div className="hp-header">
      <div className="hp-left-header">
        <MenuIcon />
        <img
          className="yt-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg"
          alt=""
        />
      </div>
      <div className="hp-mid-header">
        <input type="text" />
        <SearchIcon className="searchicon"/>
      </div>
      <div className="hp-right-header">
        <VideoCallIcon onClick={openUploadVideo} className="hp-right-header-icon"/>
        <NotificationsIcon className="hp-right-header-icon"/>
        <MeetingRoomIcon onClick={signOut} className="hp-right-header-icon"/>
        <Avatar
          alt=""
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
        />
      </div>
    </div>
  );
}
