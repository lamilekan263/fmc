import React from 'react'


const Header = () => {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light z-0">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link cursor-pointer" data-widget="pushmenu" >
                <i className="fas fa-bars" />
              </p>
            </li>
           
          </ul>
         
        </nav>
      </div>
    );
}

export default Header
