import React from "react";

const SkillsHoverComponent = ({ skill }) => {
  const levels = [
    "Novice",
    "Advanced Beginner",
    "Competent",
    "Proficient",
    "Advanced",
  ];

  return (
    <div className="callout-box">
      {skill.name + ": " + levels[skill.skillLevel - 1]}
    </div>
  );
};

export default SkillsHoverComponent;
