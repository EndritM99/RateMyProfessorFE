import React, { useState } from "react";
import { Link } from "react-router-dom";
import historyIcon from '../icons/grid.svg'
import adminIcon from '../icons/admin-avatar.svg'
import professorIcon from '../icons/message.svg'
import userIcon from '../icons/user.svg'
import loginIcon from '../icons/settings.svg'
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpanded, setExpandedState] = useState(false);

  const menuItems = [
    {
      text: "History",
      icon: historyIcon,
      sectionId: "history-section"
    },
    {
      text: "Professor",
      icon: professorIcon,
      sectionId: "/professor"
    },
    {
      text: "LogIn/Singup",
      icon: loginIcon,
      sectionId: "/login"
    },
    {
      text: "Profile",
      icon: userIcon,
      sectionId: "/profile"
    },
    
  ];

  const handleMenuItemClick = (sectionId) => {
    if (sectionId.startsWith('/')) {
      return; 
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={
        isExpanded
          ? 'side-nav-container'
          : 'side-nav-container side-nav-container-NX'
      }
    >
      
      
      {isExpanded && (
        
        <div className='nav-menu'>
          <div>
            <button className="hamburger" onClick={() => setExpandedState(!isExpanded)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          {menuItems.map(({ text, icon, sectionId }) => (
            <div key={text} className='menu-item'>
              {(text === 'Professor' || text === 'Profile' || text === 'LogIn/Singup') ? (
                <Link to={sectionId} style={{ animationDelay: '0.9s' }}>
                  <img className='menu-item-icon' src={icon} alt='' />
                  <span>{text}</span>
                </Link>
              ) : (
                <a href={`#${sectionId}`} onClick={() => handleMenuItemClick(sectionId)}>
                  <img className='menu-item-icon' src={icon} alt='' />
                  <span>{text}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {!isExpanded && (
        <div className='nav-menu'>
          {menuItems.map(({ text, icon, sectionId }) => (
            <div key={text} className='menu-item'>
              {(text === 'Professor' || text === 'Profile' || text === 'LogIn/Singup') ? (
                <Link to={sectionId}>
                  <img className='menu-item-icon' src={icon} alt='' />
                </Link>
              ) : (
                <a href={`#${sectionId}`} onClick={() => handleMenuItemClick(sectionId)}>
                  <img className='menu-item-icon' src={icon} alt='' />
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Other UI elements... */}
    </div>
  );
};

export default SideNavBar;
