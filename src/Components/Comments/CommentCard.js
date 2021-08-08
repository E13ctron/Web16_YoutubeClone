import React from 'react'

function CommentCard({comment}){
    return(
        <div>
            <img src={comment.photoURL} />
            <p>{comment.Name}</p>
            <p>{comment.text}</p>
        </div>
    )
}
export default CommentCard;