import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faBookOpen,
  faBullhorn,
  faGraduationCap,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router";

export default function Sidebar({ pageName }) {
  let [shiftSide, setShiftSide] = useState(false);
  let sideBarShift = () => {
    setShiftSide(!shiftSide);
  };
  return (
    <div
      className={`h-screen fixed bg-[#e5e5e5] md:flex gap-5 px-5 border-r-2 border-[dodgerblue] duration-600 hidden`}
    >
      <div className="flex flex-col gap-8 mt-20">
        <Link to={"/"}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            style={pageName == "dashboard" ? { color: "#155dfc" } : {}}
          >
            <FontAwesomeIcon icon={faSlack} />
            <h3>Dashboard</h3>
          </div>
        </Link>

        <Link to={"/progress"}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            style={pageName == "progress" ? { color: "#155dfc" } : {}}
          >
            <FontAwesomeIcon icon={faBookOpen} />
            <h3>Progress</h3>
          </div>
        </Link>
        <Link to={"/attendance"}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            style={pageName == "attendance" ? { color: "#155dfc" } : {}}
          >
            <FontAwesomeIcon icon={faCalendar} />
            <h3>Attendance</h3>
          </div>
        </Link>
        <Link to={"/grade"}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            style={pageName == "grade" ? { color: "#155dfc" } : {}}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Grade</h3>
          </div>
        </Link>
        <Link to={"/payment"}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            style={pageName == "payment" ? { color: "#155dfc" } : {}}
          >
            <FontAwesomeIcon icon={faWallet} />
            <h3>Payment</h3>
          </div>
        </Link>
        <Link to={"/announcement"}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            style={pageName == "announcement" ? { color: "#155dfc" } : {}}
          >
            <FontAwesomeIcon icon={faBullhorn} />
            <h3>Announcement</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
