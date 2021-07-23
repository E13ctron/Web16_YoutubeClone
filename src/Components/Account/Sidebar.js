// import { Divider } from "@material-ui/core";
import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import SidebarComponent from '../Sidebar/SidebarComponent'
import "./Sidebar.css"

export default function Sidebar() {
    

    return(


        //id is used for toggling
      <div className="hp-sidebar" id="sidebar">
            <SidebarComponent Icon={PersonIcon} title="Profile" />            
        </div>
    )
}