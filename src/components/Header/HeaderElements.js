import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

/* ================= NAV ================= */

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 10;
`;

/* ================= LOGO ================= */

export const Logo = styled.div`
  img {
    width: 87px;
    height: 87px;
  }
`;

/* ================= NAV LINKS ================= */

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #f6f6f6;
  }
`;

/* ================= HAMBURGER ================= */

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

/* ================= DESKTOP MENU ================= */

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  .menu-item + .menu-item {
    margin-left: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* ================= RESUME BUTTON ================= */

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* ================= MOBILE MENU ================= */

export const MobileMenu = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  background: #151418;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 999;
`;

export const MobileLink = styled(ScrollLink)`
  color: #fff;
  font-size: 1.6rem;
  margin: 1rem 0;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;
