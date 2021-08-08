import React from 'react'
import './CommentSection.css'
import { Avatar } from '@material-ui/core';

function CommentCard({comment}){
    return(
        <div className="comment-card">
            <div className="user-img">
            <Avatar
          alt=""
          src={comment.photoURL}
        />
            </div>
            <div className="comment-details">
            <div className="user-name">{comment.Name}</div>
            <div className="user-comment">{comment.text}</div>
            </div>
            
        </div>
    )
}
export default CommentCard;