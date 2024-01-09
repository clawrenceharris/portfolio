import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from 'next/image';
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <Link href={previewUrl}>
      <div
      
        className="h-[200px] md:h-[300px]  overflow-hidden rounded-[25px] relative group"
       
      >
        <Image
              src={imgUrl}
              alt={title}
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
       
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
