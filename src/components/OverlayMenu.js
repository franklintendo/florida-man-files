import React from 'react';
import { Link } from "react-router-dom";

function OverlayMenu() {

    // Cases.json is fed into this function to create links based on each entry within the JSX
    function renderLinks(links) {
      return links.map(entry => {
          return <Link push to={`/case/${entry.link}`} onClick={removeSidebar} key={entry.id}>{entry.name}</Link> 
      });
    }

    const removeSidebar = () => {
      let menu = document.querySelector(".hamburger-menu__expanded").classList;
      let body = document.body;

      if (menu.contains("active")) {
        menu.remove("active");
        body.classList.remove("remove-scroll");
      }

    }

    return (
      <div className="hamburger-menu__expanded">
          <div className="sidebar">
            <i className="px-3 py-3 fas fa-bars" onClick={removeSidebar}></i>
            <Link push to={'/'} onClick={removeSidebar}>Home</Link>
            { renderLinks(require('../cases.json')) }
          </div>
          <div className="w-100 h-100" onClick={removeSidebar}>
            
          </div>
      </div>
    );
  }
  
  export default OverlayMenu;