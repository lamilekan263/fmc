import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import SideBarMenu from '../menu/SideBarMenu';



const Nav = ({ menu, menuOpen, auth }) => {
  const { isAuthenticated } = auth;
  const styles = {
    bmMenu: {
      background: "white",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      zIndex: 2,
    },
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmBurgerBars: {
      background: "gray",
    },
  };
  return (
    <header className="text-gray-700 bg-white border-t border-b body-font sticky top-0 z-50">
      <div className="container flex  justify-between flex-wrap px-5 py-2 mx-auto items-center flex-row ">
        <Link
          className="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0 "
          to="/"
        >
          <img
            src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
            alt="logo"
            className="h-12 md:h-16"
          />
        </Link>
        <div className="lg:hidden">
          <SideBarMenu
            className="lg:hidden"
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            styles={styles}
            right
            disableCloseOnEsc
            menu={menu}
          />
        </div>
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base ">
          <NavLink
            to="/"
            className="mr-5 text-md font-semibold text-gray-600 lg:ml-24 hover:text-green-800 "
            activeclassname="border-b-2 border-green-900"
          >
            Home
          </NavLink>

          {/* <NavLink
            to="/resources/opac"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Opac
          </NavLink>
          <a
            href="https://www.who.int/hinari/en/"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Hinary
          </a> */}
          <NavLink
            to="/resources/free"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Resources
          </NavLink>
          <NavLink
            to="/services"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Services
          </NavLink>
          <NavLink
            to="/about-us"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:flex ml-auto">
          <Link to="/user/login">
            <button className="items-center px-8  animate-bounce py-3 mt-4 ml-5 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 border rounded-lg lg:inline-flex lg:mt-px hover:border-blue hover:bg-white hover:text-green-700 focus:ring focus:outline-none">
              { isAuthenticated ? "Sign Out" : "Sign In"}
              <svg
                className="hidden w-4 h-4 ml-1 lg:block "
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return{
    auth : state.auth
  }
}

export default connect(mapStateToProps)(Nav);
