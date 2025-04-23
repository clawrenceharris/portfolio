import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/project/${index}`)}>
      <div className="h-[200px] md:h-[300px]  overflow-hidden rounded-[25px] relative group">
        <img
          src={project.images[0]}
          alt={project.description}
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex flex-row justify-between">
          <h5 className="text-xl font-semibold mb-2">{project.title}</h5>

          <p>
            {!project?.endYear ? (
              <i>{project.startYear + " - Present"}</i>
            ) : (
              <i>{project.startYear + " - " + project.endYear}</i>
            )}
          </p>
        </div>

        <p className="text-[#ADB7BE] text-left">{project.description}</p>
      </div>
    </button>
  );
};

export default ProjectCard;
