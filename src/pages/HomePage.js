import React, { useState } from "react";
import HelloSection from "../components/HelloSection/HelloSection";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <SideBar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <Navbar toggleIsOpen={toggleIsOpen} />
      <HelloSection />
    </>
  );
};

export default HomePage;
