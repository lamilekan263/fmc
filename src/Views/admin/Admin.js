import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import ChangePassword from './pages/ChangePassword'

import Header from './Header'
import { Route } from 'react-router-dom'
import AddUser from './pages/AddUser'
import AddLibrarian from "./pages/AddLibrarian";
import AddBook from './pages/AddBook'
import IssueBook from './pages/IssueBook'
import UserList from './pages/UserListPage'
import ViewIssuedBooks from './pages/ViewIssuedBooks'
import EditAccount from './pages/EditAccount'

const Admin = ({ match }) => {

  
 
  return (
    <div className="wrapper ">
      <Header />
      <Menu />
      <div className="">
        <Route
          path={`${match.url}/profile/change-password`}
          component={ChangePassword}
        />
        <Route
          path={`${match.url}/profile/edit-account`}
          component={EditAccount}
        />
        <Route path={`${match.url}/add-user`} component={AddUser} />
        <Route path={`${match.url}/add-librarian`} component={AddLibrarian} />
        <Route path={`${match.url}/add-book`} component={AddBook} />
        <Route path={`${match.url}/issue-book`} component={IssueBook} />
        <Route path={`${match.url}/all-users`} component={UserList} />
        <Route path={`${match.url}/view-all-issued-books`} component={ViewIssuedBooks} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    auth : state.auth
  }
}


export default connect(mapStateToProps)(Admin);
