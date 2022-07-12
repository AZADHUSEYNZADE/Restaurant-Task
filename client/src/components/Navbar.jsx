import React from "react";
import "../styles/navbar.scss";
import { BiRestaurant } from "react-icons/bi";

import { Link } from "react-router-dom";

import { Flex } from "./Flex";
import { Container } from "./Container";
function Navbar() {
  return (
    <div className="mainNavbarDiv">
      <Container>
        <Flex style={{ justifyContent: "space-between" }}>
          <Link to="/">
            <BiRestaurant size={40} />
          </Link>
          <Flex elementName="ul">
            <li>
              <Link to="/foods">Foods</Link>
            </li>

            <li>
              <Link to="/orders">Orders</Link>
            </li>

            <li>
              <Link to="/waiters">Waiters</Link>
            </li>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default Navbar;
