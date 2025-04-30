import React from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import { NavLink } from "./";

const HeroSection = () => {
  const navigate = useNavigate();

  return (

   

    <Element id="home" name="home" className="section lg:py-16">
      <div className="flex flex-col-reverse items-center md:flex-row">
        <div
          
          className="col-span-8  place-self-center md:text-left text-center "
        >
          <h1 className="text-white mb-4 text-[210%]  sm:text-[270%] md:text-[290%] lg:text-[300%]  lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm
            </span>
            <br></br>
            Caleb Harris
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I’m a Computer Science student passionate about building immersive digital experiences that enhance product strategy. I specialize in crafting high-quality apps, games, and websites, and I’m always eager to take on new opportunities that challenge and expand my skills. 
          </p>
          <div className="flex flex-col md:flex-row  gap-5  items-center">
            
    
            <button className="w-full p-1  block bg-gradient-to-br from-primary-500 to-secondary-500  text-white ">

            
            <NavLink
              to="contact"
               className="transition duration-50 ease-in-out w-full inline-block hover:bg-slate-800 py-2 rounded-full "
            >
                Hire Me
              </NavLink>
              </button>
            <button
              
              onClick={() => navigate("/resume")}
              href="/resume.pdf"
              download="MyResume.pdf"
              className="py-3  block w-full rounded-full hover:bg-[#ffffff90] text-black  mt-3  md:m-0
              bg-white transition duration-50 ease-in-out"            >
                View Resume
            </button>
            </div>
        </div>
        <div
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
        </div>
      </div>
      </Element>
  );
};

export default HeroSection;
