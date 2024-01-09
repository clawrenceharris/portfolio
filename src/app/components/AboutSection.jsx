"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="bitmoji"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Greetings! I'm Caleb Harris, an enthusiastic and detail-oriented
            developer with a passion for building innovative solutions. As a
            Computer Science student at Anne Arundel Community College based in
            Glen Burnie, Maryland, I've immersed myself in the world of coding
            and problem-solving. My journey began with a fascination for
            technology, leading me to focus my interests in development for web,
            mobile, and games. With a solid foundation in C#, Java, JavaScript,
            Python, HTLM5 and CSS I enjoy translating ideas into clean,
            efficient, and scalable code. Whether it's crafting responsive
            websites, designing elegant user interfaces, developing innovative
            games, or optimizing user experiences, I take pride in delivering
            high-quality, user-centric solutions. Let's collaborate on
            transforming ideas into impactful digital experiences!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
