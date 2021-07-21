import React from "react"
import "./Sidebar.css"
import { useHistory } from "react-router-dom"

export default function SidebarComponent(props){
    const history = useHistory()

    function onClick(){
        history.push("/"+ props.title)
        
    }
    return(
        <div onClick={onClick} className="sidebar-row">
            <props.Icon className="sidebar-row-icons"/>
           <h2 className="sidebar-row-title">{props.title}</h2> 
        </div>
    )
}