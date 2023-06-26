import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Waitlist from "./pages/waitlist/Waitlist";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    );
  };

  const BasicDash = () => {
    return (
      <Fragment>
        <Navbar />
        <Outlet />
        <Footer />
      </Fragment>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <BasicDash />,
      children: [
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/wait",
          element: <Waitlist />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
