import React,{ useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { database } from '../../firebase'
import { useHistory } from 'react-router-dom'
import './PlaylistCard.css'

function PlaylistCard({name}) {
    const history = useHistory()
    const { currentUser, setQueue, setPlaylistPlaying,queue } = useAuth()
    const [ clicked, setClicked ] = useState(false)
    var tempArr = []
    function startPlaylist(){
        database.users.doc(currentUser.uid)
        .collection("playlists")
        .doc(name)
        .collection("videos")
        .onSnapshot((snaps) => {
           setQueue(snaps.docs.map((doc) => (doc.data())))
        })
        
}
   useEffect(() => {
    if(queue.length > 0){
        setPlaylistPlaying(true)
        history.push("/watch/"+queue[0].id)
    }
   }, [queue])
    return (
        <div onClick={startPlaylist} className="playlist" >
            <h2>{name}</h2>
        </div>
    )
}

export default PlaylistCard
