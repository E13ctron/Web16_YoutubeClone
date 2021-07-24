import React from 'react'
import Header from '../Header'
import Profile from './Profile'
import Sidebar from './Sidebar'
import "./Account.css"

export default function Account() {
    return (
        <div>
           <Header />
           <div className="account">
               <Sidebar />
               <Profile />
           </div>
        </div>
    )
}
