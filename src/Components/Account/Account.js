import React from 'react'
import Header from '../Header'
import AccountSection from './AccountSection'
import Sidebar from './Sidebar'
import "./Account.css"

export default function Account() {
    return (
        <div>
           <Header />
           <div className="account">
               <Sidebar />
               <AccountSection />
           </div>
        </div>
    )
}
