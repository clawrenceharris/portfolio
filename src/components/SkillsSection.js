import React from "react";

import { skills } from "../constants/skills";
import Skill from "./Skill";
import { Element } from "react-scroll";
const SkillsSection = () => {
  return (
    <Element
      name="skills"
      className="section text-white flex flex-col items-center bg-[#191919]"
      id="skills"
    >
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-4 md:mt-0 text-left  h-full">
        {skills.map((item, index) => (
          <Skill skill={item} key={index} />
        ))}
      </div>
    </Element>
  );
};

export default SkillsSection;
