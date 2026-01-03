import React from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  MobileMenu,
  MobileLink,
} from "./HeaderElements";

const Header = ({ toggle, isOpen }) => {
  return (
    <>
      <Nav>
        {/* LOGO */}
        <Logo>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
        </Logo>

        {/* DESKTOP MENU */}
        <NavMenu>
          <NavLink className="menu-item" to="home" smooth>
            Home
          </NavLink>
          <NavLink className="menu-item" to="projects" smooth>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth>
            Contact
          </NavLink>
        </NavMenu>

        {/* RESUME BUTTON */}
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1y-k6lO792puTzafCjvqx61qhmFSVzFzW/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>

        {/* HAMBURGER */}
        <Bars onClick={toggle} />
      </Nav>

      {/* MOBILE MENU */}
      <MobileMenu isOpen={isOpen}>
        <MobileLink to="home" smooth onClick={toggle}>
          Home
        </MobileLink>
        <MobileLink to="projects" smooth onClick={toggle}>
          Projects
        </MobileLink>
        <MobileLink to="about" smooth onClick={toggle}>
          About
        </MobileLink>
        <MobileLink to="contact" smooth onClick={toggle}>
          Contact
        </MobileLink>
      </MobileMenu>
    </>
  );
};

export default Header;
