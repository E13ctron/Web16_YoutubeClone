import React from 'react'
import './PlaylistNameCard.css'
import { useAuth } from '../../../contexts/AuthContext'
import { database } from '../../../firebase'

function PlaylistNameCard({name}) {
    const { currentlyPlayedVideo
        , currentUser,
        setPlaylistVideoAdderOpen } = useAuth()
    const [ position, setPosition ] = useState(0)
    useEffect(() => {
        try{
            database.users
        .doc(currentUser.uid)
        .collection("playlists")
        .doc(name).collection("videos").get().then((doc) => {
            setPosition(doc.docs.length)
        })
        
        }catch{
            setPosition(0)
        }
    }, [currentUser,setPosition,position])
    function addVideoToPlaylist(){
        database.users
        .doc(currentUser.uid)
        .collection("playlists")
        .doc(name)
        .collection("videos")
        .doc(position.toString())
        .set(currentlyPlayedVideo)
        database.users
        .doc(currentUser.uid)
        .collection("playlists")
        .doc(name).update({
            size: position + 1
        })
        setPlaylistVideoAdderOpen(false)
    }
    return (
        <div className="playlist-card" onClick={addVideoToPlaylist}>
            <p className="playlist-name">{name}</p>
            
        </div>
    )
}

export default PlaylistNameCard
