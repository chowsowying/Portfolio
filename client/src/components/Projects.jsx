import React from "react";

const Projects = () => {
  return (
    <section id="projects" className=" h-full pt-[60px]">
      {/* Container */}
      <div className="flex flex-col h-full p-5 ">
        {/* Title */}
        <div className="flex flex-col text-secondary">
          <h1 className="text-3xl mb-5 font-bold">02. Projects</h1>
          <p className="text-xl">Here are some of my projects</p>
        </div>
        {/* 3 Projects */}
        <div className="flex flex-col mt-5">
          {/* Project 1 */}
          <div className="grid lg:grid-cols-[1fr,1fr] gap-x-5 text-secondary ">
            {/* Info */}
            <div className="flex flex-col border border-secondary rounded-md p-5">
              <div>
                {/* Title */}
                <h1 className="text-2xl font-bold mb-5">ChatPal</h1>
                {/* Description */}
                <p className="text-md">
                  ChatPal is a chat application that allows users to chat with each other in
                  real-time. Users can also send images and emojis in the chat room.
                </p>
                {/* Tech Stack */}
                <p className="mt-5 font-bold">Technology used: </p>
                <p>React, NodeJS, Express, MongoDB, Redux, TailwindCSS, socket.io </p>
                {/* Demo Account */}
                <p className="mt-5 font-bold">Demo Account: </p>
                <p>
                  Username:
                  <span className="font-bold"> john@email.com</span> | Password:
                  <span className="font-bold"> 123456aA</span>
                </p>
                <p>
                  Username:
                  <span className="font-bold"> felix@email.com</span> | Password:
                  <span className="font-bold"> 123456aA</span>
                </p>
                {/* Warning */}
                <p className="mt-5 font-bold">Note: </p>
                <p className="text-primary font-bold">
                  As it is hosted on a free server, it may take a while to load the website. Please
                  be patient!
                </p>
              </div>
              {/* CTA */}
              <div className="flex gap-x-5 mt-5">
                <a
                  href="https://chat-pal-client.onrender.com"
                  target="_blank"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                  Live Demo
                </a>
                <a
                  href="https://github.com/chowsowying/ChatPal"
                  target="_blank"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                  Source Code
                </a>
              </div>
            </div>
            {/* image */}
            <div className="flex flex-col">
              <img
                className=" w-full h-full mt-5 lg:mt-0 object-cover rounded-md"
                src="https://res.cloudinary.com/dstpxts8k/image/upload/v1692612439/chatpal_zgb1uu.png"
                alt=""
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-[1fr,1fr] gap-x-5 mt-5 text-secondary ">
            {/* Info */}
            <div className="flex flex-col border border-secondary rounded-md p-5">
              <div>
                {/* Title */}
                <h1 className="text-2xl font-bold mb-5">ShopNow</h1>
                {/* Description */}
                <p className="text-md">
                  ShopNow is an e-commerce website that allows users to buy products online. Users
                  can add products to their cart and checkout using Stripe. Users can also view
                  their order history. Admins can add, edit and delete products. Admins can also
                  view and manage orders.
                </p>
                {/* Tech Stack */}
                <p className="mt-5 font-bold">Technology used: </p>
                <p>React, Node, Express, MongoDB, Redux, TailwindCSS, Firebase, Stripe</p>
                {/* Demo Account */}
                <p className="mt-5 font-bold">Demo Account: </p>
                <p>
                  Username:
                  <span className="font-bold"> sow99dev@gmail.com</span> | Password:
                  <span className="font-bold"> 123456aA</span>
                </p>
                {/* Warning */}
                <p className="mt-5 font-bold">Note: </p>
                <p className="text-primary font-bold">
                  As it is hosted on a free server, it may take a while to load the website. Please
                  be patient!
                </p>
              </div>
              {/* CTA */}
              <div className="flex gap-x-5 mt-5">
                <a
                  href="https://shop-now-client.onrender.com/"
                  target="_blank"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                  Live Demo
                </a>
                <a
                  href="https://github.com/chowsowying/shop-now"
                  target="_blank"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                  Source Code
                </a>
              </div>
            </div>
            {/* image */}
            <div className="flex flex-col">
              <img
                className=" w-full h-full mt-5 lg:mt-0 object-cover rounded-md"
                src="https://res.cloudinary.com/dstpxts8k/image/upload/v1692619398/shopNow_ctttcg.png"
                alt=""
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid lg:grid-cols-[1fr,1fr] gap-x-5 text-secondary mt-5 ">
            {/* Info */}
            <div className="flex flex-col border border-secondary rounded-md p-5">
              <div>
                {/* Title */}
                <h1 className="text-2xl font-bold mb-5">FilmScore</h1>
                {/* Description */}
                <p className="text-md">
                  FilmScore is a movie review website that allows users to read and write movie
                  reviews. Admins can add, edit and delete movies and artists. Admins can also view
                  and manage users.
                </p>
                {/* Tech Stack */}
                <p className="mt-5 font-bold">Technology used: </p>
                <p>React, Node, Express, MongoDB, Redux, TailwindCSS, AntD</p>
                {/* Demo Account */}
                <p className="mt-5 font-bold">Demo Account: </p>
                <p>
                  Username:
                  <span className="font-bold"> john@email.com</span> | Password:
                  <span className="font-bold"> 123456</span>
                </p>
                {/* Warning */}
                <p className="mt-5 font-bold">Note: </p>
                <p className="text-primary font-bold">
                  As it is hosted on a free server, it may take a while to load the website. Please
                  be patient!
                </p>
              </div>
              {/* CTA */}
              <div className="flex gap-x-5 mt-5">
                <a
                  href="https://film-score-client.onrender.com"
                  target="_blank"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                  Live Demo
                </a>
                <a
                  href="https://github.com/chowsowying/film-score"
                  target="_blank"
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                  Source Code
                </a>
              </div>
            </div>
            {/* image */}
            <div className="flex flex-col">
              <img
                className=" w-full h-full mt-5 lg:mt-0 object-cover rounded-md"
                src="https://res.cloudinary.com/dstpxts8k/image/upload/v1692630732/filmScore_c4eaa8.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
