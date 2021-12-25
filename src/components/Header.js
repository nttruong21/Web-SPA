import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link className="header-item" to="/home">
        Home
      </Link>
      <Link className="header-item" to="/about">
        About
      </Link>
      {/* <Link className="header-item" to="/add-course">
        Add course
      </Link> */}
    </div>
  );
}
export default Header;
