import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from "../firebase"

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
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe;
    }, [])

    useEffect(() => {
        db.collection("Videos").onSnapshot((snapshot) => {
            setvideos(snapshot.docs.map((doc) => doc.data()));
        })
    }, []);

    console.log(videos)

    const value = {
        signup,
        currentUser,
        signout,
        resetPassword,
        login,
        videoUploadOpen,
        setVideoUploadOpen
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}