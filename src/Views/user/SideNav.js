import React  from 'react'

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import { useHistory, useLocation } from "react-router-dom";

import Icon from "awesome-react-icons";


const SideNav = ({isSideBarOpen}) => {
    const history = useHistory()
    const location = useLocation()
    
    return (
      <div >
      {/* side bar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSideBarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}>
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId={ location.pathname }
          onSelect={({ itemId }) => {
            // maybe push to the route
            history.push(itemId);
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "/user/user-dashboard",
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <Icon name="coffee" />,
            },
            {
              title: "Profile",
              itemId: "/profile",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "change password",
                  itemId: "/user/profile/change-password",
                },
                {
                  title: "edit account",
                  itemId: "/user/profile/edit-account",
                },
              ],
            },
            {
              title: "Management",
              itemId: "/management",
              elemBefore: () => <Icon name="book" />,
              subNav: [
                {
                  title: "submit book request",
                  itemId: "/user/request-book",
                },
                {
                  title: "View Issued Books",
                  itemId: "/user/issued-books",
                },
              ],
            },
            {
              title: "Log Out",
              itemId: "/another",
              elemBefore: () => <Icon name="log-out" />,
            },
          ]}
        />
        </div>
      </div>
    );
}

export default SideNav
