import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ChildrenNav from "../ChildrenNav/ChildrenNav";
import SearchMeds from "../SearchMeds/SearchMeds";
import "./Home.css";

function Home({ children, activeChild, setActiveChild }) {
  return (
    <>
      <NavBar />
      <div className="home-box">
        <ChildrenNav
          children={children}
          activeChild={activeChild}
          setActiveChild={setActiveChild}
          showUI={true}
        />
        <SearchMeds activeChild={activeChild} />
      </div>
    </>
  );
}

export default Home;
