import React, { useContext, useEffect, useState } from 'react'
import { db } from "../firebase"
import { auth } from "../firebase"
import { database } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
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
    const [ deleteVideoOpen , setDeleteVideoOpen] = useState(false)
    const [ videoDeleted, setVideoDeleted] = useState()
    const [subscriptions,setSubscriptions] = useState([])
    const [LOGO,SetLOGO]= useState([])
    
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
    function unlikeVideo(video){
        database.users.doc(currentUser.uid.toString()).collection("liked").doc(video.id).delete(video)
        database.videos.doc(video.id).update({
            likes : video.likes - 1
        })
    }
    function subscribeChannel(previewedChannel){
        db.collection("UserSubscriptions").doc(currentUser.uid.toString()).collection("subscribedChannels").doc(previewedChannel).set({
            name:previewedChannel
        })
        db.collection("IndividualUsers").doc(previewedChannel).get().then((snap) => {
            if(snap.exists){
                db.collection("IndividualUsers").doc(previewedChannel).update({
                    subscribers: snap.data().subscribers + 1
                })
            }
            else{
                db.collection("IndividualUsers").doc(previewedChannel).set({
                    name: previewedChannel,
                    subscribers: 1
                })
            }
        })
    }
    function unsubscribeChannel(previewedChannel){
        db.collection("UserSubscriptions").doc(currentUser.uid.toString()).collection("subscribedChannels").doc(previewedChannel).delete()
        db.collection("IndividualUsers").doc(previewedChannel).get().then((snap) => {
            if(snap.exists){
                db.collection("IndividualUsers").doc(previewedChannel).update({
                    subscribers: snap.data().subscribers - 1
                })
            }
            else{
                db.collection("IndividualUsers").doc(previewedChannel).set({
                    name: previewedChannel,
                    subscribers: 0
                })
            }
        })
    }
     
    function deletePrevLogo(logoId){
        db.collection("ChannelUsers").where('UserId','==' , currentUser.uid).delete()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    useEffect(() => {
        db.collection("Videos").orderBy("timestamp","desc").onSnapshot((snapshot) => {
            setvideos(snapshot.docs.map((doc) => doc.data()));
        })
    }, []);
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


    useEffect(() => {
        if(currentUser){
            db.collection("ChannelUsers").where('UserId','==',currentUser.uid.toString()).onSnapshot((snapshot) => {
                    SetLOGO(snapshot.docs.map((doc)=>doc.data()))
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
        deleteVideoOpen,
        setDeleteVideoOpen,
        videoDeleted,
        setVideoDeleted,
        subscriptions,
        subscribeChannel,
        unsubscribeChannel,
        unlikeVideo,
        deletePrevLogo,
        LOGO,SetLOGO
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}