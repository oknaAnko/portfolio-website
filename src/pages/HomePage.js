import React, { useState } from "react";
import HelloSection from "../components/HelloSection/HelloSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/InfoData";
import InfoSection from "../components/InfoSection/InfoSection";
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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default HomePage;
