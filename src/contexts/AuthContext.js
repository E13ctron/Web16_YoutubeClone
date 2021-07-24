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
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [videoUploadOpen, setVideoUploadOpen] = useState(false)

    const[videos, setvideos] = useState([])

    const [currentUserData, setCurrentUserData] = useState()
    const [myVideos, setMyVideos] = useState()
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
        database.videos.where("UserID","==",currentUser.uid.toString()).get().then((querySnapshot) => {
            setMyVideos(querySnapshot.docs.map((doc) => doc.data()));
        })
       }
   },[currentUser])
    const value = {
        videos,
        signup,
        currentUser,
        signout,
        resetPassword,
        login,
        updatepassword,
        myVideos,
        videoUploadOpen,
        setVideoUploadOpen,
        currentUserData
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}