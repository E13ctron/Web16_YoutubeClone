import React, { useEffect} from 'react'
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar'
import VideoSection from './VideoSection'
import "./Homepage.css";
import { useAuth } from '../../contexts/AuthContext'

export default function HomePage() {
    const { setQueue, setPlaylistPlaying } = useAuth()
    useEffect(() => {
        setQueue([])
        setPlaylistPlaying(false)
    },[setQueue, setPlaylistPlaying])
    return (
        <div>
           <Header />

           <div className="home_page">
               <Sidebar />

               {/* id="content" is used for toggling  */}
               <div className="video-section" id="content">
                   

                    <VideoSection />
               </div>

           </div>
        </div>
    )
}