import React from "react";
import { Element } from "react-scroll";

const AboutSection = () => {
  return (
    <Element name="about" className="section text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src={require("../assets/images/about-image.png")}
          width={500}
          height={500}
          alt="bitmoji"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Greetings! I'm Caleb, a detail-oriented developer and student with
            strong interest in building code that doesn't just "work", but can
            grow to do even more than what was intended.
            <br />
            <br />
            My interests began with a fascination for invention which eventually
            drove me to focus my time developing websites, apps and games. Now,
            with extensive experience in C#, Java, JavaScript, HTLM and CSS, I
            look forward to translating unique ideas into solid, efficient, and
            scalable code.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
