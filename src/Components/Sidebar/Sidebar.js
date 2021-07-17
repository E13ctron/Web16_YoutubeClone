// import { Divider } from "@material-ui/core";
import React from "react";
import { useHistory } from 'react-router-dom';
import SidebarComponent from "./SidebarComponent";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';

import "./Sidebar.css"

export default function Sidebar() {
    const history = useHistory()

    function openHistory(){
        console.log("Function called")
        alert("function called")
        history.push("/history")
    }
    return(

      <div className="hp-sidebar">
            <SidebarComponent Icon={HomeIcon} title="Home"/>
            <SidebarComponent Icon={ExploreIcon} title="Explore"/>
            <SidebarComponent Icon={FavoriteIcon} title="Liked"/>
            <SidebarComponent Icon={HistoryIcon} title="History" />
            <div className="sidebar-empty"></div>
            <SidebarComponent Icon={SettingsIcon} title="Settings"/>
            <SidebarComponent Icon={FeedbackIcon} title="Send Feedback"/>

        </div>
    )
}