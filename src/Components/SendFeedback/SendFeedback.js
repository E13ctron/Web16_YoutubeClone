// import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './SendFeedback.css';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useAuth } from '../../contexts/AuthContext'
import { db } from '../../firebase';
import firebase from 'firebase';
import SearchIcon from '@material-ui/icons/Search';
// import FeedbackIcon from '@material-ui/icons/Feedback';

function SendFeedback() {

        const { currentUser } = useAuth()

            const [input, setInput] = useState("");
            const [imageUrl, setImageUrl] = useState("");
            const handleSubmit = (e) => {
                e.preventDefault();
                db.collection("posts").add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    profilePic: currentUser.photoURL,
                    username: currentUser.displayName,
                    image: imageUrl
                })

                setInput("");

                setImageUrl("");
            };
            return (
                <div className="messageSender">
                    <div className="messageSender_top">
                        {/* <Avatar src={user.photoURL} /> */}
                        <form>
                            <SearchIcon />
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="messageSender_input"
                                placeholder={`Describe your issue `} />
                            {/* <input
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="image URL {optional}" /> */}
                            <InsertEmoticonIcon />
                            <button onClick={handleSubmit} type="submit">Send feedback</button>
                        </form>
                    </div>

                    <div className="messageSender_button">
                      
                        {/* <div className="messageSender_option">
                            <InsertEmoticonIcon style={{ color: "orange" }} />
                            <h3>Feeling/activity</h3>
                        </div> */}

                    </div>

                </div>
            )
        }

export default SendFeedback;
