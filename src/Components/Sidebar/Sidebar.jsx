import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/Logo-ryp.png';
import Toggl from '../Toggle/Toggl';


const Sidebar = () => {
    const [toggle, showMenu] = useState(false)
  return (
    <>
    <aside className={toggle ? "aside show_menu" : "aside"}>
        <a href="#home" className="nav__logo">
            <img style={{width:'100px'}} src={Logo} alt="" />
        </a>
        <Toggl />

        <nav className="nav">
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            <i className='icon-home'></i>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                        <i className='icon-user-following'></i>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" className="nav_link">
                        <i className='icon-briefcase'></i>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#resume" className="nav_link">
                        <i className='icon-graduation'></i>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                        <i className='icon-layers'></i>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#blog" className="nav_link">
                        <i className='icon-note'></i>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                        <i className='icon-bubble'></i>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </nav>

        <div className="nav_footer">
            <span className="copyright">
                &copy;2024
            </span>
        </div>
    </aside>

    <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar