import React from "react";
import { Element } from "react-scroll";

const AboutSection = () => {
  return (

   

    <Element name="about" className="section text-white" id="about">
      <div className="flex flex-col items-center py-8 px-4  sm:py-28 xl:px-16">
      <h2 className="text-4xl font-bold text-white mb-4">About</h2>
        <div className="flex flex-col  lg:flex-row gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          
      
        <img
          src={require("../assets/images/about-image.png")}
          width={500}
          height={500}
          alt="bitmoji"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            A detail-oriented developer and student with
            strong interest in building code that doesn't just "work", but can
            grow to do even more than originally expected.
            <br/><br/>
                My interests began with a fascination for invention which eventually
                drove me to focus my time developing websites, apps and games. I've developed most my skills in C#, Java, JavaScript, HTLM and CSS.
                
              <br/><br/>
              When given any project, my creative process always starts with a user-first approach—every design decision I make is aimed towards the end user to deliver intuitive, visually compelling, and effective technical solutions.

                
              </p>
            
          
          </div>
          </div>
      </div>
      </Element>
  );
};

export default AboutSection;
