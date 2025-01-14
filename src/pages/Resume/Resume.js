import React from "react";

const Resume = () => {
  return (
    <main className="items-center flex">
      <iframe
        width={"600px"}
        height={"100%"}
        style={{
          height: "100vh",
        }}
        src={require("./resume.pdf")}
        title={"Caleb Harris"}
      />
    </main>
  );
};

export default Resume;
