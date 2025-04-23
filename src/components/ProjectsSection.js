import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { projects } from "../constants/projects";
import { Element } from "react-scroll";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true });
  const uniqueTags = new Set();

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Element className="section" name="projects" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center flex-wrap items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        {projects.flatMap((project) => {
          return project.tags.map((item) => {
            if (!uniqueTags.has(item)) {
              uniqueTags.add(item);
              return (
                <ProjectTag
                  key={item}
                  onClick={handleTagChange}
                  name={item}
                  isSelected={tag === item}
                />
              );
            }
            return null; // Skip rendering if the tag is a duplicate
          });
        })}
      </div>

      <ul ref={listRef} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects
          .sort((a, b) =>
            a.isOngoing
              ? a.startYear < b.startYear
                ? 1
                : -1
              : a.endYear - a.startYear > b.sta
              ? -1
              : 1
          )
          .map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                index={index}
                project={project}
              />
            </motion.li>
          ))}
      </ul>
    </Element>
  );
};

export default ProjectsSection;
