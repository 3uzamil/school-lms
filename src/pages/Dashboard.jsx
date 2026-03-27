import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
        <section className="pt-20">
          <h1 className="font-bold text-[20px]">Welcome!</h1>
          <span>Today is Tuesday, Octuber 26th.</span>

          <section className="w-[70vw] my-5 px-3 py-4 rounded-[10px] bg-white">
            <h1>My Courses</h1>
          </section>
          
        </section>
      </section>
    </>
  );
}
