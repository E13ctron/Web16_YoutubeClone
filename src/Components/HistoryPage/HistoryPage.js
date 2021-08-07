import React from 'react'
import HistoryVideoSection from './HistoryVideoSection'
import Header from '../Header/Header'
import './historypage.css'
import Sidebar from '../Sidebar/Sidebar'

function HistoryPage() {
    return (
        <div>
           <Header />

           <div className="history_page">
               <Sidebar />

               {/* id="content" is used for toggling  */}
               <div className="history-video-section" id="content">
                   

                    <HistoryVideoSection />
               </div>

           </div>
        </div>
    )
}

export default HistoryPage
