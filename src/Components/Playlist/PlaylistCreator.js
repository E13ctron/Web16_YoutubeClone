import React, { useEffect, useState, useRef} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { Divider } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { database } from '../../firebase'
import './playlistcreator.css'
function PlaylistCreator() {
    const { playlistCreatorOpen,setPlaylistCreatorOpen, videos, currentUser} = useAuth()
    const [ toBeChosen, setToBeChosen ] = useState([])
    const [ processing, setProcessing ] = useState(false)
    const [ currentPlaylists, setCurrentPlaylists] = useState([])
    const playlistNameRef = useRef()
    function closePlaylistCreator(){
        setPlaylistCreatorOpen(false)
    }
    function createPlaylist(){
        setProcessing(true)
        const playlistName = playlistNameRef.current.value;
        database.users.doc(currentUser.uid).collection("playlists").doc(playlistName).set({
            name: playlistName
        })
        setProcessing(false)
        closePlaylistCreator()
        playlistNameRef.current.value=""

    }
    return (
        <div>
            <Dialog open={playlistCreatorOpen} keepMounted>
                <div className="header">
                    <DialogTitle>
                        Create Playlist
                    </DialogTitle>
                    <Close className="close_icon" onClick={closePlaylistCreator} />
                </div>
                <Divider />
                <DialogContent>
                    <div className="entire-content">
                    <Form.Group style={{ margin: "10px" }}>
                            <Form.Label>Playlist Name</Form.Label>
                            <Form.Control ref={playlistNameRef} type="text" required />
                    </Form.Group>
                    <p>If a playlist already exists with this name, it will be replaced</p>
                    <Button disabled={processing} onClick={createPlaylist}>Create Playlist</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PlaylistCreator
