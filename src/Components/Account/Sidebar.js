// import { Divider } from "@material-ui/core";
import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import SidebarComponent from './SidebarComponent'
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import "./Sidebar.css"

export default function Sidebar() {
    

    return(


        //id is used for toggling
      <div className="hp-sidebar" id="sidebar">
            <SidebarComponent Icon={HomeIcon} title="Home" />
            <div className="sidebar-empty"></div>
            <SidebarComponent Icon={PersonIcon} title="Profile" />
            <SidebarComponent Icon={LockIcon} title="Update Password" />            
         
        </div>
    )
}