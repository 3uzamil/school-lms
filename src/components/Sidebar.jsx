import {faCalendar,faFileLines,faHome,} from "@fortawesome/free-regular-svg-icons";
import {faAngleLeft,faBookOpen,faBullhorn,faGraduationCap, faWallet,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Sidebar() {
  return (
    <section className="h-screen flex justify-start">
      <div className="h-full w-50 bg-[#e5e5e5] flex gap-5 pl-5">
        <div className="flex basis-[80%] flex-col gap-8 mt-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faHome} />
            <h3>Dashboard</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBookOpen} />
            <h3>Progress</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faCalendar} />
            <h3>Attendance</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faFileLines} />
            <h3>Assignment</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Grade</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faWallet} />
            <h3>Payment</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBullhorn} />
            <h3>Announcement</h3>
          </div>
        </div>
        <div className="bg-[dodgerblue] flex items-center">
          <FontAwesomeIcon icon={faAngleLeft} className="cursor-pointer bg-white text-[dodgerblue] py-2"/>
        </div>
      </div>
    </section>
  );
}
