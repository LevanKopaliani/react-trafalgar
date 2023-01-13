import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <Home />
      <Services />
      <Providers />
      <Testimonials />
      <About />
    </>
  );
};

const Applayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
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
      {
        path: "/Apps",
        element: <Providers />,
      },
      {
        path: "/Testimonials",
        element: <Testimonials />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
