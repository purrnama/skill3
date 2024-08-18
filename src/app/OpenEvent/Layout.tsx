/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Sidebar from "../dashboard/side-bar/Sidebar";
import MainContent from "../Skill/MainContent";

const Layout: React.FC = () => {
  return (
    <div className="pr-16 pb-11 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar activeSection="home" />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
