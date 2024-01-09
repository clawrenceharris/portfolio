"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const uniqueTags = new Set();

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag == "All"
      ? projects
      : projects.filter((project) => project.tags.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
                  onClick={handleTagChange}
                  name={item}
                  isSelected={tag === item}
                />
              );
            }
            return null; // Skip rendering if the category is a duplicate
          });
        })}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.images[0]}
              gitUrl={project.gitUrl}
              previewUrl={"/project/" + project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
