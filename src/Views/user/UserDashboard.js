import React, { useState } from 'react'

import { Route } from 'react-router-dom'
import SideNav from './SideNav'

import Dashboard from './pages/Dashboard'
import ChangePassword from './pages/ChangePassword'
import EditAccount from './pages/EditAccount'
import BookRequest from './pages/BookRequest'
import IssuedBooks from './pages/IssuedBooks'

const UserDashboard = (props) => {
 const [ isSideBarOpen, setIsSideBarOpen] =useState(false)
    return (
      <div >
       
        <div className="flex">
        <div className={` inset-0  block transition-opacity    ${
          isSideBarOpen ? "hidden" : "block"
        }`}>
        <SideNav className="w-2/3 " isSideBarOpen={isSideBarOpen}/>
        
        </div>
        <div className="sticky top-0 md:hidden" onClick={() =>{ 
          setIsSideBarOpen(!isSideBarOpen)
          
          console.log(isSideBarOpen)
          }}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg></div>
          
          <div>
           <Route path={`${props.match.url}/user-dashboard`} component={Dashboard} />
        <Route
          path={`${props.match.url}/profile/change-password`}
          component={ChangePassword}
        />
        <Route path={`${props.match.url}/profile/edit-account`} component={EditAccount} />
        <Route path={`${props.match.url}/request-book`} component={BookRequest} />
        <Route path={`${props.match.url}/issued-books`} component={IssuedBooks} /></div>
          
        </div>
      </div>
    );
}

export default UserDashboard
