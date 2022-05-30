import React from "react";
import { sidebarBottom, SidebarData, SidebarMore } from "../../../data/sidebar";
import "./sidebar.css";
import SidebarOption from "./sidebarOption";

function Sidebar() {
  const topOptions = SidebarData;
  const more = SidebarMore;
  const bottomOptions = sidebarBottom;
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div>
          {topOptions.map((option) => {
            return (
              <SidebarOption
                option={option}
                isActive={option.name === "Calls" ? true : false}
              />
            );
          })}
        </div>

        <div>
          <SidebarOption option={more} />
        </div>
      </div>

      <div className="sidebarBottom">
        {bottomOptions.map((option) => {
          return <SidebarOption option={option} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
