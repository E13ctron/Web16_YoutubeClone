import React, { useEffect, useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { useAuth } from '../../../contexts/AuthContext'
import { Divider } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { database } from '../../../firebase'
import PlaylistNameCard from './PlaylistNameCard'
import './PlaylistVideoAdder.css'

function PlaylistVideoAdder() {
    const { playlistVideoAdderOpen,
         setPlaylistVideoAdderOpen,
          currentUser,
        currentlyPlayedVideo } = useAuth()
    const [ playlistNames, setPlaylistNames ] = useState([])
    useEffect(() => {
        try{
            database.users.doc(currentUser.uid).collection("playlists").onSnapshot((snap) => {
                setPlaylistNames(snap.docs.map((doc) => doc.data().name))
            })
        }
        catch{

        }
        
    },[currentUser, setPlaylistNames])
    function close(){
        setPlaylistVideoAdderOpen(false)
    }
    return (
        <div classname="playlist-video-adder">
            <Dialog open={playlistVideoAdderOpen} keepMounted>
                <div className="header">
                    <DialogTitle>
                        Select Playlist
                    </DialogTitle>
                    <Close className="close_icon" onClick={close} />
                </div>
                <Divider />
                <DialogContent>
                    <div className="play-lists">
                        { playlistNames.map((item) => 
                        <PlaylistNameCard name={item} />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PlaylistVideoAdder
