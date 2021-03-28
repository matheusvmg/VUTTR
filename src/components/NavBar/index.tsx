import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLeftSide, NavRightSide, Badge } from "./styles";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLeftSide>
          <ul>
            <li>
              <Link to="/">
                <img
                  src="/images/icons/Icon-Chevron-Left-2px.svg"
                  alt="go back"
                  id="goback"
                />
              </Link>
            </li>
            <li>
              <Link to="/" style={{ marginLeft: "20px" }}>
                <img src="/images/Logo Bossa.svg" alt="logo" id="logo" />
              </Link>
              <h4 id="title-project">VUTTR</h4>
            </li>
          </ul>
        </NavLeftSide>
        <NavRightSide>
          <Badge>1</Badge>
        </NavRightSide>
      </Nav>
    </>
  );
};

export default NavBar;
