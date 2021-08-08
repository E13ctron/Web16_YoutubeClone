import React,{ useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { database } from '../../firebase'
import { useHistory } from 'react-router-dom'
import DeleteIcon from "@material-ui/icons/Delete";
import './PlaylistCard.css'

function PlaylistCard({name}) {
    const history = useHistory()
    const [ videosCount, setVideosCount] = useState()
    const { currentUser,
         setQueue,
        setPlaylistPlaying,
        queue,
         setDeletePlaylistOpen,
         confirmedPlaylistDelete,
         setConfirmedPlaylistDelete
        } = useAuth()
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
        
        if(confirmedPlaylistDelete){
            database.users.doc(currentUser.uid)
            .collection("playlists")
            .doc(name)
            .delete()
        }
        setConfirmedPlaylistDelete(false)
    },[confirmedPlaylistDelete,setConfirmedPlaylistDelete,name, currentUser])
   useEffect(() => {
    if(queue.length > 0){
        setPlaylistPlaying(true)
        history.push("/watch/"+queue[0].id)
    }
   }, [queue, setPlaylistPlaying,history])
   useEffect(() => {
    try{
        database.users.doc(currentUser.uid)
    .collection("playlists")
    .doc(name).get().then((doc) => {
        setVideosCount(doc.data().size)
    })
    }catch{

    }
   },[currentUser,name])
   
    return (
        <div className="playlist" >
            <h2 onClick={startPlaylist} >{name}</h2>
            <p>Videos: {videosCount}</p>
            <DeleteIcon onClick={() => setDeletePlaylistOpen(true)} />
        </div>
    )
}

export default PlaylistCard
