import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <Nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      {/* Left Section: Logo & Navigation Menu */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo to="/" style={{ marginRight: "30px" }}>
          <img
            src="/logo.png"
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
        </Logo>
        <NavMenu style={{ display: "flex" }}>
          <NavLink className="menu-item" to="/" style={{ marginLeft: "180px" }}>
            Home
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
      </div>

      {/* Right Section: Resume Button & Menu Toggle */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1y-k6lO792puTzafCjvqx61qhmFSVzFzW/view?usp=drivesdkz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </div>
    </Nav>
  );
};

export default Header;
