import React from 'react';

function Hamburger() {

    const showSidebar = () => {
      let menu = document.querySelector(".hamburger-menu__expanded").classList;
      let body = document.body;

      menu.add("active");
      body.classList.add("remove-scroll");



      // if (menu.contains("expanded")) {
      //   hamburger.remove("expanded");
      //   body.classList.remove("remove-scroll");
      // } else {
      //   hamburger.add("expanded");
      //   body.classList.add("remove-scroll");
      // }
    }

    return (
      <div class="hamburger-menu">
          <i class="px-3 py-3 fas fa-bars" onClick={showSidebar}></i>
      </div>
    );
  }
  
  export default Hamburger;