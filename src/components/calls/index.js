import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Leftfold from "./left-fold";
import RightFold from "./right-fold";
import "./calls.css";
function Calls() {
  return (
    <div className="class-container">
      <Header />
      <div className="calls-body">
        <div className="calls-sidebar">
          <Sidebar />
        </div>
        <div className="calls-leftFold">
          <Leftfold />
        </div>
        <div className="calls-rightFold">
          <RightFold />
        </div>
      </div>
    </div>
  );
}

export default Calls;
