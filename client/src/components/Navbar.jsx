import React from "react";
import "../styles/navbar.scss";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="mainNavbarDiv">
      <div>
        <Link to="/">
          <BiRestaurant className="restaurantDiv" />
        </Link>
      </div>
      <div>
        <ul className="navbarUl">
          <Link to="/foods">
            <li>Foods</li>
          </Link>
          <Link to="/orders">
            <li>Orders</li>
          </Link>
          <Link to="/waiters">
            <li>Waiters</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
