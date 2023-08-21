import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { SiRedux, SiTailwindcss, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="h-[full] pt-[60px]">
      <div className="flex flex-col h-full p-5 ">
        {/* Title */}
        <div className="flex flex-col text-secondary">
          <h1 className="text-3xl mb-5 font-bold">01. About Me</h1>
          <p className="text-xl">Get to know me!</p>
        </div>
        {/* About Me */}
        <div className="flex flex-col mt-5">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-x-5 text-secondary ">
            {/* image */}
            <div className="flex flex-col">
              <img
                className=" w-full h-[400px] mt-5 lg:mt-0 object-cover rounded-md"
                src="https://res.cloudinary.com/dstpxts8k/image/upload/v1692547450/IMG_3650-removebg-preview_dnyl65.png"
                alt="Sow Ying"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col p-5">
              <div className="">
                {/* Title */}
                <h1 className="text-2xl font-bold mb-5">Hi, I'm Sow Ying!</h1>
                {/* Description */}
                <p className="text-md">
                  I'm currently a Year 3 Software Engineering student at Singapore Institute of
                  Technology (SIT). I'm passionate about building web applications and I'm always
                  looking for opportunities to learn and grow as a developer.
                </p>
                <p className="text-md mt-5">
                  From a young age, I've always been interested in technology and how it works.
                  Although I may not have past experience in the tech industry, I'm always willing
                  to learn and I'm a fast learner. I'm also a team player and I'm able to work well
                  with others.
                </p>
                <p className="text-md mt-5">
                  In my free time, I enjoy watching Youtube videos and listening to music. One fun
                  fact about me is that I love my coffee and I can't start my day without a cup of
                  coffee!
                </p>

                {/* Tech Stack */}
                <p className="my-5 font-bold">Technology Stack:</p>
                {/* icons */}
                <div className="flex flex-wrap gap-x-5 gap-y-5">
                  <div className="flex flex-col items-center">
                    <FaReact className="text-5xl hover:text-primary" />
                    <p>React</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaNodeJs className="text-5xl hover:text-primary" />
                    <p>NodeJS</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiExpress className="text-5xl hover:text-primary" />
                    <p>ExpressJS</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <BiLogoJavascript className="text-5xl hover:text-primary" />
                    <p>Javascript</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiLogoMongodb className="text-5xl hover:text-primary" />
                    <p>MongoDB</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiRedux className="text-5xl hover:text-primary" />
                    <p>Redux</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiTailwindcss className="text-5xl hover:text-primary" />
                    <p>TailwindCSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
