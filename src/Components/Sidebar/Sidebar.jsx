import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../assets/logoryp.png';
import Toggl from '../Toggle/Toggl';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <aside className={toggle ? "aside show_menu" : "aside"}>
        <Link to="/" className="nav__logo">
          <img style={{width:'500px'}} src={Logo} alt="" />
        </Link>
        <Toggl />

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <Link to="/" className={`nav_link ${isActive("/")}`}>
                  <i className='icon-home'></i>
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/about" className={`nav_link ${isActive("/about")}`}>
                  <i className='icon-user-following'></i>
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/services" className={`nav_link ${isActive("/services")}`}>
                  <i className='icon-briefcase'></i>
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/resume" className={`nav_link ${isActive("/resume")}`}>
                  <i className='icon-graduation'></i>
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/portfolio" className={`nav_link ${isActive("/portfolio")}`}>
                  <i className='icon-layers'></i>
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/blog" className={`nav_link ${isActive("/blog")}`}>
                  <i className='icon-note'></i>
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/contact" className={`nav_link ${isActive("/contact")}`}>
                  <i className='icon-bubble'></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy;2024</span>
        </div>
      </aside>

      <div 
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} 
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;