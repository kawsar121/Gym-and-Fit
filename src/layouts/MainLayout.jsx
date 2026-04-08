import React from "react";
import Hero from "../Components/Hero";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div>
        <header className="relative">
          <Nav />
          <Hero />
        </header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
