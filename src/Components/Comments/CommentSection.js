import React,{ useRef, useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import { db } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import firebase from 'firebase/app';
import './CommentSection.css'

function CommentSection({videoId}){
    const { currentUser } = useAuth()
    const messageRef = useRef()
    const [ messages , setMessages ] = useState()
    useEffect(() => {
        db.collection("comments").doc(videoId.toString()).collection("comments").orderBy("createdAt","desc").onSnapshot((snaps) => {
            setMessages(snaps.docs.map((doc) => doc.data()))
        })
    })
    function sendMessage(){      
          const { uid, photoURL } = currentUser;
          const messagesRef = db.collection("comments").doc(videoId.toString()).collection("comments")
          
          messagesRef.add({
            text: messageRef.current.value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            Name: currentUser.displayName
          })
          messageRef.current.value = ""
          
          
    }

    return(
        <div>
            <main>

            {messages && messages.map(msg => <CommentCard comment={msg}/>)}

            <span></span>

            </main>

        

        <input ref={messageRef} placeholder="say something nice" />

        <button onClick={sendMessage}>🕊️</button>

        
    </div>
    )
}

export default CommentSection;