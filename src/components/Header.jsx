import React from "react";

const Header = () => {
  return (
    <header className="py-3 fixed border-b-2 border-green z-10 top-0 w-full bg-slate-800 text-white">
      <div className="wrapper flex items-center justify-between">
        <a className="text-5xl font-bold text-green" href="#">
          Logo
        </a>
        <ul className="flex items-center gap-5 font-medium text-lg">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
