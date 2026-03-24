import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Assignment() {
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
        <section className="flex items-start h-full pt-30">
          <h1>Assignment</h1>
        </section>
      </section>
    </>
  )
}
