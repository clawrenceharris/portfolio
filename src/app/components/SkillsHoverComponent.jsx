import React from "react";

const SkillsHoverComponent = ({ skillLevel }) => {
  const levels = [
    "Novice",
    "Advanced Beginner",
    "Competent",
    "Proficient",
    "Advanced",
  ];

  return (
    // <div className="text-sm rounded-lg hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 p-4 bg-[#121212] text-white">
    //   {levels[skillLevel - 1]}
    // </div>
    <div class="callout-box">{levels[skillLevel - 1]}</div>
  );
};

export default SkillsHoverComponent;
