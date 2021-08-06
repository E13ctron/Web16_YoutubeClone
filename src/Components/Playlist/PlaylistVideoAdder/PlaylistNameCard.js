import React from 'react'
import './PlaylistNameCard'
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
        <div className="card" onClick={addVideoToPlaylist}>
            <p>{name}</p>
        </div>
    )
}

export default PlaylistNameCard
