import React,{ useState, useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { db } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import VideoCard from '../HomePage/VideoCard'
import './subscriptions.css'

function Subscriptions() {
    const { currentUser, videos } = useAuth();
    const [ subscriptionVideos, setSubscriptionVideos ] = useState([])
    const [ subscribedChannels, setSubscribedChannels ] = useState([])
    useEffect(() => {
            const subscribedVideos = []
        db.collection("UserSubscriptions").doc(currentUser.uid).collection("subscribedChannels").get().then((snap) => {
            setSubscribedChannels(snap.docs.map((doc) => doc.data().name))
            
        })
        for(var j = 0;j < videos.length;j++){
            if(subscribedChannels.includes(videos[j].email)){
                subscribedVideos.push(videos[j])
            }
        }
        setSubscriptionVideos(subscribedVideos)
    },[videos,currentUser,setSubscriptionVideos, setSubscribedChannels, subscribedChannels])
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="subscriptions">
                { subscriptionVideos.map((video) => (
                    <VideoCard video={video} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Subscriptions
