import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Element id="home" name="home" className="section lg:py-16">
      <div className="flex flex-col-reverse items-center md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-[210%]  sm:text-[270%] md:text-[290%] lg:text-[300%]  lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm
            </span>
            <br></br>
            Caleb Harris
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a dedicated, detail-oriented Computer Science student with a
            profound enthusiasm for crafting impactful apps, games, and
            websites. My creative process is anchored in a user-centric mindset,
            where I actively consider the end-user experience to ensure
            intuitive, aesthetic and engaging digital solutions.
          </p>
          <div>
            <a
              href="/#contact"
              className="font-bold hover:opacity-80 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </a>
            <button
              onClick={() => navigate("/resume")}
              href="/resume.pdf"
              download="MyResume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="font-bold block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] relative ">
            <img
              src={require("../assets/images/hero-image.png")}
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default HeroSection;
