import React from 'react'
import Header from '../Header/Header'
import Profile from './Profile'
import Sidebar from './Sidebar'
import PrivateRoute from "../PrivateRoute"
import "./Account.css"
import { Switch } from 'react-router-dom'

export default function Account() {
    return (
        <div>
           <Header />
           <div className="account">
               <Sidebar />
                <Switch>
                    <PrivateRoute exact route="/Account/Profile" component={Profile} />
                </Switch>
           </div>
        </div>
    )
}
