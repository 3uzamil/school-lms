import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faBookOpen,
  faBullhorn,
  faGraduationCap,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router";

export default function Sidebar() {
  let [shiftSide, setShiftSide] = useState(false);
  let sideBarShift = () => {
    setShiftSide(!shiftSide);
  };
  return (
    <div
      className={`h-screen fixed bg-[#e5e5e5] md:flex gap-5 pl-5 duration-600 ${shiftSide ? "-translate-x-45" : ""} hidden`}
    >
      <div className="flex basis-[80%] flex-col gap-8 mt-20">
        <Link to={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faSlack} />
            <h3>Dashboard</h3>
          </div>
        </Link>

        <Link to={"/progress"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBookOpen} />
            <h3>Progress</h3>
          </div>
        </Link>
        <Link to={"/attendance"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faCalendar} />
            <h3>Attendance</h3>
          </div>
        </Link>
        <Link to={"/grade"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Grade</h3>
          </div>
        </Link>
        <Link to={"/payment"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faWallet} />
            <h3>Payment</h3>
          </div>
        </Link>
        <Link to={"/announcement"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBullhorn} />
            <h3>Announcement</h3>
          </div>
        </Link>
      </div>
      <div className="bg-[dodgerblue] flex items-center">
        <FontAwesomeIcon
          onClick={sideBarShift}
          icon={shiftSide ? faAngleRight : faAngleLeft}
          className="cursor-pointer bg-white text-[dodgerblue] py-2"
        />
      </div>
    </div>
  );
}
