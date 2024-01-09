import { useRouter } from "next/router";
import Image from "next/image";
import { projects } from "@/app/data/projects";

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
          width={1920}
          height={1080}
          src={project.images[0]}
        />
        <div style={{ padding: "25px" }}>
          <h1>{project.title}</h1>
          <p>
            <i>{project.description}</i>
          </p>
          {project.longDescription.map((item, index) => (
            <>
              <br />
              <p key={index}>{item}</p>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Project;
