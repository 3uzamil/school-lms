import {faCalendar,faFileLines,faHome,} from "@fortawesome/free-regular-svg-icons";
import {faAngleLeft,faBookOpen,faBullhorn,faGraduationCap,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Sidebar() {
  return (
    <section className="h-screen flex justify-start">
      <div className="h-full w-50 bg-[#e5e5e5] border-r-20 border-[dodgerblue] flex pt-15">
        <div className="translate-x-45 translate-y-10">
          <FontAwesomeIcon icon={faAngleLeft} style={{color: "#e5e5e5"}} className="cursor-pointer"/>
        </div>
        <div className="flex flex-col gap-8 mt-15">
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
            <h3>Assignments</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Grades</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBullhorn} />
            <h3>Announcements</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
