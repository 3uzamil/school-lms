import React from "react";
import logo from "../assets/logo.png";
import profilePic from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <section className="p-5 bg-[#e5e5e5] flex justify-between border-b-2">
      {/* Navbar Left */}
      <div className="flex gap-5 items-center">
        {/* Logo */}
        <figure>
          <img src={logo} alt="logo" width={50} />
        </figure>
        {/* School Name */}
        <h1 className="font-bold text-[#242424] text-[20px]">
          School LMS - Student Portal
        </h1>
      </div>
      {/* Navbar Right */}
      <div className="flex items-center gap-5">
        {/* Notification Icon */}
        <div>
          <FontAwesomeIcon icon={far.faBell} style={{fontSize: "20px"}} />
        </div>
        {/* Profile */}
        <div className="flex items-center gap-1.5 cursor-pointer">
          {/* Profile Picture */}
          <figure>
            <img src={profilePic} width={30} className="rounded-[50px]" />
          </figure>
          {/* User Name */}
          <h2 className="font-semibold">Muzamil Hussain</h2>
          {/* Angle Icon for Profile menu */}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </section>
  );
}
