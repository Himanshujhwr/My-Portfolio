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
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/profile.jpg" alt="Himanshu" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Himanshu Jhanwar</strong>. A Full Stack
              Developer specializing in the MERN stack. With a strong foundation
              in data structures and algorithms (DSA), I build scalable and
              optimized web applications that deliver seamless user experiences.
              My expertise extends to data science and machine learning,
              allowing me to develop intelligent and data-driven solutions. I am
              passionate about solving complex problems and constantly refining
              my coding skills to write efficient and high-performance code.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Beyond development, I enjoy exploring new technologies,
              participating in hackathons, and contributing to innovative
              projects. Whether it's designing intuitive frontends, architecting
              robust backends, or leveraging data to drive insights, I am always
              eager to push boundaries and create impactful digital solutions.
              Explore my work and let's connect to build something amazing!
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
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
