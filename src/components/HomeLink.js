import React from 'react';
import { Link } from "react-router-dom";

function HomeLink() {

    return (
        <Link push="true" to={'/'}><i className="px-3 py-3 fas fa-home florida__home--icon"></i></Link>
    );
  }
  
  export default HomeLink;