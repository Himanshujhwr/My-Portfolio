import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>

        <div className="BigCard">
          {/* 🔥 IMAGE WITHOUT ANIMATION */}
          <Image src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Himanshu" />

          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              Hello! My name is <strong>Himanshu Jhanwar</strong>. A Full Stack
              Developer specializing in the MERN stack. With a strong foundation
              in data structures and algorithms (DSA), I build scalable and
              optimized web applications that deliver seamless user experiences.
              My expertise extends to data science and machine learning.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              Beyond development, I enjoy exploring new technologies,
              participating in hackathons, and contributing to innovative
              projects. Let’s connect and build something amazing!
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" animateOnce key={index}>
                  <Tech className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
