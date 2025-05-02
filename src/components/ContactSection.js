import React from "react";
import GithubIcon from "../assets/icons/github-icon.svg";
import YoutubeIcon from "../assets/icons/youtube-icon.svg";
import { Element } from "react-scroll";

const ContactSection = () => {
  return (
    <Element
      name="contact"
      id="contact"
      className="section grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div>
        <h3 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h3>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities. My inbox is always
          open. Whether you have a question or just want to say hi, I will try
          my best to get back to you within 3 days!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/clawrenceharris"
          >
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCnYo2lHcdEvwJp-xOIpkc7w"
          >
            <img src={YoutubeIcon} alt="Youtube Icon" />
          </a>
        </div>
      </div>
      <div>
        <form action="https://formspree.io/f/mpwwnzqz" method="POST">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="border-gradient hover:opacity-80 text-white font-medium py-2.5 px-5 rounded-full w-full "
          >
            Send Message
          </button>
        </form>
      </div>
    </Element>
  );
};

export default ContactSection;
