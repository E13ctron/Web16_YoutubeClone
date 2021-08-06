import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import PlaylistCard from './PlaylistCard'

import './Playlists.css'
function Playlists() {
    const { currentUser } = useAuth()
    const [playlists, setPlaylists ] = useState([])
    useEffect(() => {
        database.users.doc(currentUser.uid).collection("playlists").onSnapshot((snaps) => {
            setPlaylists(snaps.docs.map((doc) => doc.data()))
        
        })
    },[currentUser, setPlaylists])
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="playlists">
                    <h1>Playlists</h1>
                    {playlists.map((item) => (
                        <PlaylistCard name={item.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Playlists
