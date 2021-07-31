import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { useAuth } from '../../contexts/AuthContext'
import './search.css'
import VideoCard from './VideoCard'

function Search() {
    const { videos } = useAuth();
    const [ foundVideos, setFoundVideos ] = useState()
    const [result, setResult ] = useState()
    
    useEffect(() => {
        const urlBlocks = window.location.href.split("/");
    const query = urlBlocks[urlBlocks.length-1].toLowerCase();
        const videoArrays = []
    for(var index = 0; index < videos.length;index++){
        const currentVideo = videos[index]
        const titleWords = currentVideo.title.toString().toLowerCase().split(' ')
        
        if(titleWords.includes(query)){
            videoArrays.push(currentVideo)
        }
    }
    if(videoArrays.length === 0){
        setResult("No Videos Found")
    }
    else{
        setFoundVideos(videoArrays)
        
        setResult("Search Results")
    }
    //console.log(foundVideos)
    },)
    return (
        <div>
            <Header />
            <div className="search-page">
                <Sidebar />
                <div className="search-result">
                    <h1>{result}</h1>
                    {foundVideos ? foundVideos.map((video) => (
                            <VideoCard video={video} />
                        )) : <h1></h1>}
                </div>
            </div>
        </div>
    )
}

export default Search
