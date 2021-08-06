import React from 'react'
import './PlaylistNameCard.css'
import { useAuth } from '../../../contexts/AuthContext'
import { database } from '../../../firebase'

function PlaylistNameCard({name}) {
    const { currentlyPlayedVideo, currentUser } = useAuth()
    function addVideoToPlaylist(){
        database.users
        .doc(currentUser.uid)
        .collection("playlists")
        .doc(name)
        .collection("videos")
        .doc(currentlyPlayedVideo.id)
        .set(currentlyPlayedVideo)
    }
    return (
        <div className="playlist-card" onClick={addVideoToPlaylist}>
            <p className="playlist-name">{name}</p>
            
        </div>
    )
}

export default PlaylistNameCard
