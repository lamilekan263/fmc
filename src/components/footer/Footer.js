import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
      <footer className="mt-20 bg-green-700 text-white border-t body-font">
        <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
          <div className="flex-shrink-0 flex items-center flex-col justify-center w-64 mx-auto text-center md:mx-0 md:text-left">
            <Link
              to="#"
              className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start "
            >
              <img src={Logo} alt="Logo" />
            </Link>
            <p className="mt-6 text-lg text-center text-white">
              The FMCA Medical Library
            </p>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left ">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Company
              </h1>
              <nav className="mb-10 list-none">
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-white hover:text-gray-800"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-white hover:text-gray-800"
                  >
                    Services
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Support
              </h1>
              <nav className="mb-10 list-none">
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-white hover:text-gray-800"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-semibold tracking-widest text-white uppercase title-font">
                Address
              </h1>
              <div className="flex flex-col">
                <div className="pt-3">
                  <h1>Location</h1>
                  <p className="ml-3 text-sm">
                    -Bisi Onabanjo Way, Idi-Aba, Abeokuta Ogun State.
                  </p>
                </div>
                <div className="pt-3">
                  <h1>Email</h1>
                  <a
                    href="mailto:medical-library.fmca@fmc.org"
                    className="ml-3 text-sm"
                  >
                    - medical-library.fmca@fmc.org
                  </a>
                </div>
                <div className="py-3">
                  <h1>Phone Numbers</h1>
                  <div className="flex flex-col">
                    {" "}
                    <a href="tel:08095947083" className="ml-3 text-sm">
                      -08095947083
                    </a>
                    <a href="tel: 08095946034" className="ml-3 text-sm">
                      - 08095946034
                    </a>
                    <a href="tel:08033482191" className="ml-3 text-sm">
                      -08033482191
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-greenGray-900">
          <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
            <p className="text-sm text-center text-white sm:text-left ">
              © The FMCA Medical Library 2020
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <p className="text-white hover:text-green-500">
                <svg
                  fill="currentColor "
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </p>
              <p className="ml-4 text-white hover:text-green-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </p>
              <p className="ml-4 text-white hover:text-green-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </p>
            </span>
          </div>
        </div>
      </footer>
    );
}

export default Footer
