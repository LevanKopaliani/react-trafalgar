import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import Testimonials from "./pages/Testimonials";

const MainPage = () => {
  return (
    <>
      <Home />
      <Services />
      <Providers />
      <Testimonials />
    </>
  );
};

const Applayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
