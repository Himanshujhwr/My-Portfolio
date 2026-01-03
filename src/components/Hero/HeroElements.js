import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

/* ================= HERO CONTAINER ================= */

export const HeroContainer = styled.div`
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

/* ================= HERO WRAPPER ================= */

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

/* ================= HERO LEFT ================= */

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;

    h1 {
      font-size: 2.2rem;
    }

    h5 {
      font-size: 1.3rem;
    }
  }
`;

/* ================= HERO RIGHT ================= */

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* ================= HERO IMAGE ================= */

export const Image = styled.img`
  width: min(440px, 80vw);
  height: min(440px, 80vw);
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

/* ================= SCROLL ANIMATION ================= */

const ScrollAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-6px);
  }
`;

/* ================= SCROLL DOWN ================= */

export const ScrollDown = styled(LinkScroll)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1.5rem;

  animation: ${ScrollAnimation} 2s linear infinite;
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #f6f6f6;

  img {
    height: 28px;
    width: 28px;
    margin-left: 8px;
  }
`;
