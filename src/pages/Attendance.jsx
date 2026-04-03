import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

export default function Attendance() {
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
          <Card props={{heading:"Class",span:100,color: "oklch(70.7% 0.165 254.624)"}}/>
          <Card props={{heading:"Present",span:90,color: "#05df72"}}/>
          <Card props={{heading:"Absent",span:8,color: "oklch(70.4% 0.191 22.216)"}}/>
          <Card props={{heading:"Leave",span:2,color: "oklch(85.2% 0.199 91.936)"}}/>
          </section>
        </section>
      </section>
    </>
  )
}
