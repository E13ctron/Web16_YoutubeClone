import React, { useRef, useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase/app";
import './CommentSection.css'

function CommentSection({ videoId }) {
  const { currentUser } = useAuth();
  const messageRef = useRef();
  const [messages, setMessages] = useState();
  const [ messageSend, setMessageSend] = useState(false)
  useEffect(() => {
    if(messageSend){
      db.collection("comments")
      .doc(videoId.toString())
      .collection("comments")
      .orderBy("createdAt", "desc")
      .onSnapshot((snaps) => {
        setMessages(snaps.docs.map((doc) => doc.data()));
      });
    }
    setMessageSend(false)
  },[ messageSend, setMessageSend, videoId]);
  function sendMessage() {
    const { uid, photoURL } = currentUser;
    const messagesRef = db
      .collection("comments")
      .doc(videoId.toString())
      .collection("comments");

    messagesRef.add({
      text: messageRef.current.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      Name: currentUser.displayName,
    });
    messageRef.current.value = "";
    setMessageSend(true)
  }

  return (
    <div>
        <div className="comment-input">
        <input ref={messageRef} className="comment-input-box" placeholder="Comment publicly here" />

        <button className="comment-button" onClick={sendMessage}>🕊️</button>
      </div>
      <main>
        {messages && messages.map((msg) => <CommentCard comment={msg} />)}

        <span></span>
      </main>

      
    </div>
  );
}

export default CommentSection;
