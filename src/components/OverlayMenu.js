import React from 'react';

function OverlayMenu() {

    const removeSidebar = () => {
      let menu = document.querySelector(".hamburger-menu__expanded").classList;
      let body = document.body;

      if (menu.contains("active")) {
        menu.remove("active");
        body.classList.remove("remove-scroll");
      }

    }

    return (
      <div class="hamburger-menu__expanded">
          <div class="sidebar">
            <i class="px-3 py-3 fas fa-bars" onClick={removeSidebar}></i>
          </div>
          <div class="w-100 h-100" onClick={removeSidebar}>
              &nbsp;
          </div>
      </div>
    );
  }
  
  export default OverlayMenu;