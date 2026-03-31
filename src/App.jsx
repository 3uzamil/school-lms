import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Announcement from "./pages/Announcement";
import Attendance from "./pages/Attendance";
import Grade from "./pages/Grade";
import Payment from "./pages/Payment";
import Progress from "./pages/Progress";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

export default function App() {
  let allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "attendance",
      element: <Attendance />
    },
    {
      path: "announcement",
      element: <Announcement />
    },
    {
      path: "grade",
      element: <Grade />
    },
    {
      path: "payment",
      element: <Payment />
    },
    {
      path: "progress",
      element: <Progress />
    }
  ]);
  return (
    <RouterProvider router={allRoutes} />
  );
}
