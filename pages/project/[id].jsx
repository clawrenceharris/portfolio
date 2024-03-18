import { useRouter } from "next/router";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import GithubIcon from "../../public/icons/github-icon.svg";
import YoutubeIcon from "../../public/icons/youtube-icon.svg";
import Link from "next/link";

function Project() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((item) => item.id == id);

  if (!project) {
    return <></>;
  }
  return (
    <main>
      <div>
        <Image
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
        <div style={{ padding: "43px 25px", position: "relative" }}>
          <div
            style={{
              backgroundColor: "#ffffff20",
              borderRadius: 25,
              top: 10,
              left: 25,
              position: "absolute",
              textAlign: "center",
              padding: "7px 20px",
              width: "auto",
            }}
          >
            <p>{project.projectType + " Project"}</p>
          </div>
          <div className="justify-between flex md:flex-row flex-col">
            <div style={{ marginTop: "20px" }}>
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
                <Link target="_blank" href={project.tryItLink}>
                  <p
                    style={{
                      color: "#06b6d4",
                      textDecoration: "underline",
                    }}
                  >
                    Try it out!
                  </p>
                </Link>
              )}
              {project?.github && (
                <Link target="_blank" href={project.github}>
                  <Image
                    width={30}
                    height={30}
                    src={GithubIcon}
                    alt="Github Icon"
                  />
                </Link>
              )}
              {project?.youtube && (
                <Link target="_blank" href={project.youtube}>
                  <Image
                    width={30}
                    height={30}
                    src={YoutubeIcon}
                    alt="Youtube Icon"
                  />
                </Link>
              )}
            </div>
          </div>
          <br />
          <div className="flex flex-row flex-wrap items-center">
            <h5>Tools Used:</h5>
            {project.tools.map((item) => (
              <div className="callout-container  group  relative px-3 mt-3  flex flex-col items-center">
                <Image
                  width={20}
                  height={20}
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div class="callout-box">{item.name}</div>
              </div>
            ))}
          </div>
          <br />
          <i style={{ color: "yellow" }}>
            {project?.note && "**" + project.note + "**"}
          </i>
          <br />
          {project.longDescription.map((item, index) => (
            <>
              <br />
              <p key={index}>{item}</p>
            </>
          ))}
          <br />
        </div>
      </div>
    </main>
  );
}

export default Project;
