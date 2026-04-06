import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Progress() {
  return (
    <>
          {/* Header Section */}
      <Navbar />
      {/* Main Section */}
      <section className=" h-screen flex gap-5">
        {/* Sidebar Bar Section*/}
        <section>
          <Sidebar pageName={"progress"}/>
        </section>
        {/* Page Content */}
        <section className="pt-20">
          <h1>Progress</h1>
        </section>
      </section>
    </>
  );
}
