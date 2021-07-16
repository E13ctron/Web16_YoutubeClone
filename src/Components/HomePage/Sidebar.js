// import { Divider } from "@material-ui/core";
import React from "react";
import SidebarComponent from "./SidebarComponent";


export default function Sidebar() {
    return(
        <div>
            <h1>Sidebar</h1>
            <SidebarComponent title="Home"/>
            <SidebarComponent title=""/>
            <SidebarComponent title=""/>
        </div>
    )
}