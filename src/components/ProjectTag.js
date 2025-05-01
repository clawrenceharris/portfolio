import React from "react";
const ProjectTag = ({ name, onClick, isSelected }) => {
  const selectedStyles = "text-white border-gradient";
    
  return (
    <button
      className={`${isSelected ? selectedStyles : ""} " border-color-[#ffffff40] border-2  text-[#ADB7BE] border-slate-600 hover:border-white m-[8px] rounded-full px-[2px] py-[2px]  text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      <div className=" py-3 px-5 rounded-full">{name}</div>
    </button>
  );
};

export default ProjectTag;
