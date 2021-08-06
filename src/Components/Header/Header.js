import React, { useState, useEffect, useRef} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Avatar from "@material-ui/core/Avatar";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Popover } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

export default function Header() {

  const { signout , setVideoUploadOpen, videoUploadOpen, currentUser } = useAuth()
  const [avatarUrl, setAvatarUrl] = useState()
  const history = useHistory()
  const searchQueryRef = useRef()

 useEffect(() => {
  if(currentUser.photoURL){
    setAvatarUrl(currentUser.photoURL.toString())
    // console.log(currentUser.photoURL)

  }
 },[currentUser]) 
 function search(){
   history.push("/search/"+ searchQueryRef.current.value)
 }
  async function signOut(){
    await signout()
    history.push("/")
  }
  function openUploadVideo(){
    setVideoUploadOpen(true)
    console.log(videoUploadOpen)
  }
  const handleLogoClick = () => history.push("/")
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="hp-header">
      <div className="hp-left-header">
        <MenuIcon onClick={window["toggleSidebar"]} />
        <img onClick={handleLogoClick}
          className="yt-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg"
          alt=""
        />
      </div>
      <div className="hp-mid-header">
        <input type="text" ref={searchQueryRef} placeholder=" Search" />
        <SearchIcon onClick={search} className="searchicon" />
      </div>
      <div className="hp-right-header">
        <VideoCallIcon onClick={openUploadVideo} className="hp-right-header-icon" />
        <MeetingRoomIcon onClick={signOut} className="hp-right-header-icon" />
        <Avatar
          alt=""
          src={avatarUrl}
          onClick={handleClick}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className="account-popover">
            <div className="po-top">
            <div className="po-left">
              <div className="po-avatar">
                <Avatar src={avatarUrl}/>
              </div>
              <div className="po-empty"></div>
            </div>
            <div className="po-right">
              <div className="po-account-details">
                <div className="username">{currentUser.displayName}</div>
                <div className="email-address">{currentUser.email}</div>
              </div>
              <div className="po-manage-account">
                <Link to="/Account"><div className="po-manage-account-link">Manage your Account</div></Link>
              </div>
            </div>
            </div>
            <div className="po-down">
              <div className="add-account">
                <div className="add-account-icon">
                <PersonAddIcon/>
                </div>
                <div className="add-another-account">
                  Add another account
                </div>
              </div>
              <div className="signout-button">
              <Button onClick={signOut} >Sign Out</Button>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}
