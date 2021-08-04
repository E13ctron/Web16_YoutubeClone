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
    const [ likedVideos, setLikedVideos] = useState([])
    
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
    function updateViews(video){
        database.videos.doc(video.id.toString()).update({
            views : video.views + 1
        })
    }
    function likeVideo(video){
        if(currentUser){
            database.users.doc(currentUser.uid).collection("liked").doc(video.id).set(video);
        }
        database.videos.doc(video.id.toString()).update({
            likes: video.likes + 1
        })
    }
    function updatepassword(password){
        return (currentUser.updatePassword(password))
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    useEffect(() => {
        db.collection("Videos").onSnapshot((snapshot) => {
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

   useEffect(() => {
       if(currentUser){
        database.users.doc(currentUser.uid).collection("liked").get().then((querySnapShot) => {
            
                setLikedVideos(querySnapShot.docs.map((doc) => doc.data()));
            
        },[currentUser])
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
        updateViews
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}