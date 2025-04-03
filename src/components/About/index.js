import React from "react";
import Tada from "react-reveal/Tada";
import Pulse from "react-reveal/Pulse";
import {
  AboutSection,
  Aboutinfo,
  AboutImage,
  AboutInfoDir,
  AboutInfoDesc,
  Span,
  HeadingFour
} from "./Style.js";

const About = () => {
  return (
    <Pulse>
      <AboutSection id="about-section">
        {/* <AboutSectionOverlay /> */}
        <AboutImage />
        <Aboutinfo>
          <Tada>
            <AboutInfoDir>
              <Span>Creative</Span> Front End Developer
            </AboutInfoDir>
          </Tada>
          <AboutInfoDesc>
            Detail-oriented Front-end Web Developer with 5 years of proven experience in building 
            and developing responsive websites, including 2 years specializing in front-end microservices architecture. 
            A strong advocate of the mobile-first strategy, specializing in crafting seamless user experiences. 
            Proficient in HTML, CSS, and JavaScript, along with modern libraries and frameworks such as Vue.js, React.js and Next.js.
          </AboutInfoDesc>
          <Tada>
            <HeadingFour>Let's work together.</HeadingFour>
          </Tada>
        </Aboutinfo>
      </AboutSection>
    </Pulse>
  );
};

export default About;
