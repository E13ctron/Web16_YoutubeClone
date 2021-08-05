import React from 'react';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import SendFeedback from './SendFeedback';
import './Feedback.css'

function Feedback() {
    return (
        <div className="feedback">
            <Header />
            <div className="feeback_sidebar">
                <Sidebar />
                <div className="feedback_body">
                    <SendFeedback />
                </div>
            </div>

        </div>
    )
}

export default Feedback
