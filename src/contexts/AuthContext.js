import React, { useContext, useEffect, useState } from 'react'
import { db } from "../firebase"
import { auth } from "../firebase"
import { database } from '../firebase'
// import { useLocation } from 'react-router'


const AuthContext = React.createContext()

export function useAuth() {
    // const currentLocation = useLocation();
    // const previewedChannel = new URLSearchParams(currentLocation.search).get("name");
    return (
        useContext(AuthContext)
    )
}
export function AuthProvider({children}){
    const [ currentUser, setCurrentUser] = useState()
    const [ loading, setLoading] = useState(true)
    const [ videoUploadOpen, setVideoUploadOpen] = useState(false)
    const [ videos, setvideos] = useState([])
    const [ currentUserData, setCurrentUserData] = useState()
    const [ likedVideos, setLikedVideos ] = useState([])
    const [subscriberNumber, setSubscriberNumber] = useState(0);
    const [subscriptions,setSubscriptions] = useState([])
    
    function signup(email, password){
        return (auth.createUserWithEmailAndPassword(email, password))
        
    }
    function login(email, password){
        return(auth.signInWithEmailAndPassword(email, password))
    }
    function signout(){
        setCurrentUser(null)
        return(auth.signOut())
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    function updatepassword(password){
        return (currentUser.updatePassword(password))
    }
    function likeVideo(video){
        database.users.doc(currentUser.uid.toString()).collection("liked").doc(video.id).set(video)
        database.videos.doc(video.id).update({
            likes : video.likes + 1
        })
    }
    function subscribeChannel(previewedChannel){
        db.collection("UserSubscriptions").doc(currentUser.uid.toString()).collection("subscribedChannels").doc(previewedChannel).add({
            name:previewedChannel
        })
        db.collection("IndividualUsers").doc(previewedChannel.email).update({
            subscriberNumber: subscriberNumber + 1
        })
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    useEffect(() => {
        db.collection("Videos").orderBy("views","desc").onSnapshot((snapshot) => {
            setvideos(snapshot.docs.map((doc) => doc.data()));
        })
    }, []);

    console.log(videos)

    useEffect(() => {
        if(currentUser){
            database.users.doc(currentUser.uid.toString()).get().then((doc) => {
                if(doc.exists){
                    setCurrentUserData(doc.data())
                }
            })
        }
    })
    function updateViews(video){
        database.videos.doc(video.id).update({
            views: video.views + 1
        })
    }       
    useEffect(() => {
        if(currentUser){
            database.users.doc(currentUser.uid.toString()).collection("liked").onSnapshot((QuerySnap) => {
                
                setLikedVideos(QuerySnap.docs.map((doc) => doc.data()))
                
            })
        }
    },[currentUser])
    useEffect(() => {
        if(currentUser){
            db.collection("UserSubscriptions").doc(currentUser.uid.toString()).collection("subscribedChannels").onSnapshot((snapshot) => {
                
                setSubscriptions(snapshot.docs.map((doc) => doc.data()))
                
            })
        }
    },[currentUser])

    const value = {
        videos,
        loading,
        signup,
        currentUser,
        signout,
        resetPassword,
        login,
        updatepassword,
        videoUploadOpen,
        setVideoUploadOpen,
        currentUserData,
        likedVideos,
        likeVideo,
        updateViews,
        subscriptions,
        subscribeChannel
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}