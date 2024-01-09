import React from "react";
import Image from "next/image";
function Skill({ imgUrl, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full w-[90px] h-[90px] flex items-center border-gray border-[1px] p-5 overflow-hidden">
        <Image width={100} height={100} src={imgUrl} alt={name + "logo"} />
      </div>

      <h5 className="mt-5">{name}</h5>
    </div>
  );
}

export default Skill;
