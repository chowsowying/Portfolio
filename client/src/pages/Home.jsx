import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* <Nav /> */}
      <Nav />
      <Header />
      <About />
      <Projects />
      {/* Footer */}
      <div className="flex flex-col items-center justify-center h-[200px] text-secondary">
        <p className="text-xl">Contact me at</p>
        <p className="text-2xl font-bold">chowsowying99@gmail.com</p>
      </div>
    </div>
  );
};

export default Home;
