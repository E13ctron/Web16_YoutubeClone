import React from 'react'
import './CommentSection.css'

function CommentCard({comment}){
    return(
        <div>
            <img alt="UserImage" src={comment.photoURL} />
            <p>{comment.Name}</p>
            <p>{comment.text}</p>
        </div>
    )
}
export default CommentCard;