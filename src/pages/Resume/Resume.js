import React from "react";

const Resume = () => {
  return (
    <main className="h-full w-full px-[290px]">
      <iframe
        width={"100%"}
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
