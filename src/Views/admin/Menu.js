import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTachometerAlt, faBookMedical, faFolderOpen, faList, faUsers } from '@fortawesome/free-solid-svg-icons'

import Icon from "awesome-react-icons";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import { useHistory, useLocation } from "react-router-dom";

const Menu = () => {
  const history = useHistory()
    const location = useLocation()
    return (
      <div>
        <aside className="main-sidebar bg-white text-white elevation-4">
          <p className="brand-link ">
            <img
              src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="pr-5 text-md font-weight-light">
              FMCA Medical Library
            </span>
          </p>
          {/* Brand Logo */}
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              // maybe push to the route
              history.push(itemId);
            }}
            items={[
              {
                title: "Dashboard",
                itemId: "/admin/admin-dashboard",
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <FontAwesomeIcon icon={faTachometerAlt} />,
              },
              {
                title: "Profile",
                itemId: "/profile",
                elemBefore: () => <Icon name="user" />,
                subNav: [
                  {
                    title: "change password",
                    itemId: "/admin/profile/change-password",
                  },
                  {
                    title: "update details",
                    itemId: "/admin/profile/edit-account",
                  },
                ],
              },
              {
                title: "Manage Books",
                itemId: "/management",
                elemBefore: () => <FontAwesomeIcon icon={faBookMedical} />,
                subNav: [
                  {
                    title: "Add Book",
                    itemId: "/admin/add-book",
                  },
                  {
                    title: "View Books",
                    itemId: "/admin/view-books",
                  },
                ],
              },
              {
                title: "Issue Book",
                itemId: "/admin/issue-book",
                elemBefore: () => <FontAwesomeIcon icon={faFolderOpen} />,
              },
              {
                title: "View issued books",
                itemId: "/admin/view-all-issued-books",
                elemBefore: () => <FontAwesomeIcon icon={faList} />,
              },
              {
                title: "Manage Users",
                itemId: "/admin/manage-users",
                elemBefore: () => <FontAwesomeIcon icon={faUsers} />,
                subNav: [
                  {
                    title: "Add Librarian",
                    itemId: "/admin/add-librarian",
                  },
                  {
                    title: "View Librarians",
                    itemId: "/admin/all-librarian",
                  },
                  {
                    title: "Add User",
                    itemId: "/admin/add-user",
                  },

                  {
                    title: "View Users",
                    itemId: "/admin/all-users",
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
        </aside>
      </div>
    );
}

export default Menu
