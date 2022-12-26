import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Nav() {
  return (
    <div className="flex w-[100%] justify-between p-6 absolute">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1 bg-accent text-black hover:bg-accent-focus">
          Contact Me
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold">
          <li className="bg-[#0077B5]">
            <a href="https://www.linkedin.com/in/subham-dutta-8670b8178/" target="_blank" rel="noreferrer"> <FaLinkedin /> Linkedin</a>
          </li>
          <li className="bg-[#00ACEE]">
            <a href="https://twitter.com/Subhamd88404337" target="_blank" rel="noreferrer"><FaTwitter /> Twitter</a>
          </li>
        </ul>
      </div>
      <div className="text-white p-2 rounded-full bg-[#586069] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-[#24292e]"> <a href="https://github.com/Sduttt/bookfinder" target="_blank" rel="noreferrer" className="flex items-center">
      < FaGithub className="text-4xl " /> &nbsp; &nbsp; <button className=" p-1 text-lg font-semibold">Source Code</button> </a>
      </div> 
    </div>
  );
}
export default Nav;
