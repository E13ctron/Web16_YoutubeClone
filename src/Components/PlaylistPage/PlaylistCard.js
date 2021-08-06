import React from 'react'
import './PlaylistCard.css'

function PlaylistCard({name}) {
    return (
        <div className="playlist" >
            <h2>{name}</h2>
        </div>
    )
}

export default PlaylistCard
