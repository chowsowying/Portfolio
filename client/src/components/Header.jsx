import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <section id="header" className="relative h-screen pt-[60px] ">
      {/* Container */}
      <div className="flex justify-center items-center h-full px-5 relative">
        {/* Vertical Lines */}
        <div className="absolute h-full right-[20%] top-0 bg-gray-200 w-0.5"></div>
        <div className="absolute h-full right-[40%] top-0  bg-gray-200 w-0.5"></div>
        <div className="absolute h-full right-[60%] top-0  bg-gray-200 w-0.5"></div>
        <div className="absolute h-full right-[80%] top-0  bg-gray-200 w-0.5"></div>

        {/* Content */}
        <div className="flex flex-col text-primary relative">
          {/* Title */}
          <div className=" flex items-center">
            <h1 className="text-4xl mb-5">
              Hello, <span className="font-bold">I'm Sow Ying</span>.
            </h1>
            <div className="w-[100px] h-[5px] bg-primary ml-[40px]"></div>
          </div>

          <h1 className="text-4xl">
            I'm a <span className="bg-secondary text-white">Aspiring Web Developer</span> from
            Singapore.
          </h1>

          {/* Project CTA */}
          <div className="flex gap-x-5 mt-5 justify-center">
            <a
              href="#projects"
              className="px-5 py-2 rounded-md text-secondary border-2 border-secondary font-bold">
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Socials Icons  */}
      <div className="absolute left-0 bottom-0 p-5">
        <div className="flex">
          <a
            href="https://github.com/chowsowying"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary">
            <AiFillGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/chow-sow-ying-50b2a9226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary ml-4">
            <AiFillLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
      {/* Email */}
      <div className="absolute right-0 bottom-0 p-5">
        <a
          href="mailto:
          chowsowying99@gmail.com"
          className="text-secondary hover:text-primary">
          chowsowying99@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Header;
