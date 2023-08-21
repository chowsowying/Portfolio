import React, { useState, useEffect } from "react";

const Nav = () => {
  // State
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="h-[60px] flex justify-between items-center z-50 fixed max-w-[1600px] w-full px-5">
      {/* Logo */}
      <a
        onClick={() => setActiveNav("#")}
        href="#"
        className={`cursor-pointer text-xl text-primary font-bold ${
          activeNav === "#" ? "font-bold text-primary" : ""
        }`}>
        sy.
      </a>
      {/* Nav Links */}
      <div className="flex gap-x-5">
        <a
          onClick={() => setActiveNav("#about")}
          href="#about"
          className={`cursor-pointer ${activeNav === "#about" ? "font-bold text-primary" : ""}`}>
          01. About
        </a>
        <a
          onClick={() => setActiveNav("#projects")}
          href="#projects"
          className={`cursor-pointer ${activeNav === "#projects" ? "font-bold text-primary" : ""}`}>
          02. Projects
        </a>
      </div>
    </div>
  );
};

export default Nav;
