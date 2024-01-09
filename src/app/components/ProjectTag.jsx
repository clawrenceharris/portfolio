import React from "react";
import { blue, teal } from "tailwindcss/colors";
const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-gradient"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full px-[2px] py-[2px] border-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      <div className="bg-[#121212] py-3 px-5 rounded-full">{name}</div>
    </button>
  );
};

export default ProjectTag;
