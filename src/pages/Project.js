import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants/projects";

const Project = () => {
  const { index } = useParams();
  const project = projects.find((_, i) => i == index);
  useEffect(() => {
    // Scroll to the top on initial load or when the route changes
    window.scrollTo(0, 0);
  }, [window.location.pathname]); // Re-run effect when the pathname changes

  if (!project) {
    return <div className="flex place-content-center place-items-center w-full h-[100vh] mx-auto"><h1 className="text-md">Project not found...</h1> </div>;
  }
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
        alt={project.description}
        width={1920}
        height={1080}
        src={project.images[0]}
      />
      <div className="bg-[#ffffff0a] px-6 py-8   ">
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 25,
            top: 20,
            position: "absolute",
            left: 20,
            zIndex: 99,
            WebkitBackdropFilter: "blur(25px)",
            backdropFilter: "blur(25px)",
            textAlign: "center",
            padding: "10px 20px",
          }}
        >
          <p>{project.projectType + " Project"}</p>
        </div>

        <div className="justify-between  flex md:flex-row flex-col">
          <div>
            <h1>{project.title}</h1>

            <p>
              <i> {project.description}</i>
              {" | "}
              {!project?.endYear ? (
                <i>{project.startYear + " - Present"}</i>
              ) : (
                <i>{project.startYear + " - " + project.endYear}</i>
              )}
            </p>
          </div>

          <div className=" flex flex-row gap-4 items-center">
            {project?.tryItLink && (
              <a rel="noreferrer" target="_blank" href={project.tryItLink}>
                <p
                  style={{
                    color: "#06b6d4",
                    textDecoration: "underline",
                  }}
                >
                  Try it out!
                </p>
              </a>
            )}
            {project?.github && (
              <a rel="noreferrer" target="_blank" href={project.github}>
                <img
                  width={30}
                  height={30}
                  src={"https://i.ibb.co/0Cc13pJ/github-logo-icon-147285.png"}
                  alt="Github Icon"
                />
              </a>
            )}
            {project?.youtube && (
              <a rel="noreferrer" target="_blank" href={project.youtube}>
                <img
                  width={30}
                  height={30}
                  src={
                    "https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
                  }
                  alt="Youtube Icon"
                />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center">
          <h5 className="mt-3">Tools Used:</h5>
          {project.tools.map((item) => (
            <div className="callout-container  group  relative px-3 mt-3  flex flex-col items-center">
              <img width={20} height={20} src={item.imageUrl} alt={item.name} />
              <div className="callout-box">{item.name}</div>
            </div>
          ))}
        </div>

        {project?.note && (
          <>
            <br />
            <i style={{ color: "yellow" }}>{"**" + project.note + "**"}</i>
            <br />
          </>
        )}
        <div className="flex flex-col md:flex-row justify-between">
          <div style={{ flex: 1 }}>
            {project.longDescription.map((item, index) => (
              <>
                <br />

                <p key={index}>{item}</p>
              </>
            ))}
          </div>
          <div
            style={{ flex: 1 }}
            className="flex flex-col items-center mx-4 my-4 "
          >
            {project.youtube && (
              <iframe
                width="100%"
                height="260"
                src={project.youtube}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
            {project.images
              .filter((_, i) => i != 0)
              .map((item) => (
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    margin: 5,
                    objectFit: "contain",
                  }}
                  alt={project.description}
                  width={1920}
                  height={1080}
                  src={item}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
