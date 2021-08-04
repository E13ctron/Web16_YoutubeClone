// import { Divider } from "@material-ui/core";
import React from "react";

import SidebarComponent from "./SidebarComponent";
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';
import FeedbackIcon from '@material-ui/icons/Feedback';

import "./Sidebar.css"

export default function Sidebar() {
    

    return(


        //id is used for toggling
      <div className="hp-sidebar" id="sidebar">
            <SidebarComponent Icon={HomeIcon} title="Home"/>
            <SidebarComponent Icon={FavoriteIcon} title="Liked"/>
            <SidebarComponent Icon={HistoryIcon} title="History" />
            <div className="sidebar-empty"></div>
            <SidebarComponent Icon={PersonIcon} title="Account"/>
            <SidebarComponent Icon={FeedbackIcon} title="Send Feedback"/>

        </div>
    )
}