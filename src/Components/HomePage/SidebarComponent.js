import React from "react"
import "./Sidebar.css"

export default function SidebarComponent(props){
    return(
        <div className="sidebar-row">
            <props.Icon className="sidebar-row-icons"/>
           <h2 className="sidebar-row-title">{props.title}</h2> 
        </div>
    )
}