import React from 'react'
import Body from './Body'
import Header from '../Header'
import './historypage.css'
import Sidebar from '../Sidebar/Sidebar'

function HistoryPage() {
    return (
        <div className="history_page">
            <Header />
            <div className="history_page_body">
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default HistoryPage
