import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Progress_Dash from "../components/Progress_Dash";

export default function Dashboard() {
  return (
    <>
      {/* Header Section */}
      <Navbar />
      {/* Main Section */}
      <section className=" h-screen flex gap-5">
        {/* Sidebar Bar Section*/}
        <section>
          <Sidebar />
        </section>
        {/* Page Content */}
        <section className="w-screen md:mt-20 md:ml-50">
          <h1 className="font-bold text-[20px]">Welcome!</h1>
          <span>Today is Tuesday, Octuber 26th.</span>
          <section className="w-[70vw] my-5 px-3 py-4 rounded-[10px] bg-white">
            <h1>Attendance</h1>
            <div className=" h-10 w-50 border-2 flex justify-start px-2 items-center my-2 rounded-[10px] cursor-pointer">
              <h1>100 /<span className="text-[dodgerblue]"> 90</span></h1>
            </div>
          </section>
          <section className="w-[70vw] my-5 px-3 py-4 rounded-[10px] bg-white">
            <h1>Active Courses</h1>
            {/* <span>https://www.instagram.com/reels/DVRdsnKDJX2/</span> */}
            <div className="flex flex-wrap">
              <Progress_Dash
                props={{
                  subject: "English",
                  teacher: "Sir Ahmed",
                }}
              >
                <div className={`h-4 w-[20%] rounded-[10px] bg-blue-600`}></div>
              </Progress_Dash>
              <Progress_Dash props={{ subject: "Math", teacher: "Sir Bilal" }}>
                <div className={`h-4 w-[40%] rounded-[10px] bg-blue-600`}></div>
              </Progress_Dash>
              <Progress_Dash
                props={{
                  subject: "Science",
                  teacher: "Miss Ayesha",
                }}
              >
                <div className={`h-4 w-[35%] rounded-[10px] bg-blue-600`}></div>
              </Progress_Dash>
              <Progress_Dash
                props={{ subject: "Urdu", teacher: "Miss Aqsa", progress: 40 }}
              >
                <div className={`h-4 w-[30%] rounded-[10px] bg-blue-600`}></div>
              </Progress_Dash>
              <Progress_Dash
                props={{
                  subject: "Computer",
                  teacher: "Sir Ahmed",
                  progress: 25,
                }}
              >
                <div className={`h-4 w-[25%] rounded-[10px] bg-blue-600`}></div>
              </Progress_Dash>
            </div>
          </section>
          <section className="w-[70vw] my-5 px-3 py-4 rounded-[10px] bg-white">
            <h1>Fee Dues</h1>
          </section>
        </section>
      </section>
    </>
  );
}
