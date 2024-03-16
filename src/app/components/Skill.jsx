import React from "react";
import Image from "next/image";
import SkillsHoverComponent from "./SkillsHoverComponent";
function Skill({ skill }) {
  return (
    <div className="callout-container group relative mx-[20px]  flex flex-col items-center">
      <div className="skill-circle rounded-full sm:w-[80px] sm:h-[80px] w-[70px] h-[70px] flex items-center border-[#ffffff20] border-2 p-5 overflow-hidden">
        <Image width={100} height={100} src={skill.imgUrl} alt={skill.name} />
      </div>
      <SkillsHoverComponent skill={skill} />
    </div>
  );
}

export default Skill;
