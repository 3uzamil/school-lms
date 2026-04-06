import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Attendance() {
  let attendanceRecord = [
    {
      class: 1,
      date: "Mon,Apr 06,2026",
      status: "Present",
    },
    {
      class: 2,
      date: "Wed,Apr 08,2026",
      status: "Present",
    },
    {
      class: 3,
      date: "Fri,Apr 10,2026",
      status: "Present",
    },
    {
      class: 4,
      date: "Mon,Apr 13,2026",
      status: "Present",
    },
  ];
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
        <section className="w-screen mt-5 md:mt-20 md:ml-50">
          <h1 className="font-bold text-[20px]">Attendance</h1>
          <section className="md:w-[70vw] flex md:flex-row flex-col flex-wrap gap-5 justify-between mr-5 my-5">
            <Card
              props={{
                heading: "Class",
                span: 100,
                color: "oklch(70.7% 0.165 254.624)",
              }}
            />
            <Card props={{ heading: "Present", span: 90, color: "#05df72" }} />
            <Card
              props={{
                heading: "Absent",
                span: 8,
                color: "oklch(70.4% 0.191 22.216)",
              }}
            />
            <Card
              props={{
                heading: "Leave",
                span: 2,
                color: "oklch(85.2% 0.199 91.936)",
              }}
            />
          </section>
          <section className="h-full md:w-[70vw] mr-5 p-1 bg-blue-200 border-2 border-blue-300 rounded-[10px]">
            <table className="w-full text-center">
              <thead className="border-b border-blue-400 text-blue-600">
                <tr>
                  <th>Class</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecord.map((item, index) => {
                  return (
                    <tr key={index} className="border-b border-blue-400">
                      <td className="py-2">{item.class}.</td>
                      <td>{item.date}</td>
                      <td>
                        <span className="bg-green-200 text-green-600 p-1 text-[12px] border rounded-[5px]">{item.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
}
