import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Payment() {
  return (
    <>
          {/* Header Section */}
      <Navbar />
      {/* Main Section */}
      <section className=" h-screen flex gap-5">
        {/* Sidebar Bar Section*/}
        <section>
          <Sidebar pageName={"payment"}/>
        </section>
        {/* Page Content */}
        <section className="pt-20">
          <h1>Payment</h1>
        </section>
      </section>
    </>
  );
}
