import React from "react";
import "./leftFold.css";
import { CallsMenu } from "../../../data/calls";
import MenuItem from "./menuItem";
function Leftfold() {
  const menu = CallsMenu;
  return (
    <div className="leftFold">
      <div className="leftFoldMenu">
        <label className="menuLabel">Calls</label>
        <div className="menuItems">
          {menu.map((item) => {
            return <MenuItem item={item} />;
          })}
        </div>
      </div>
      <div className="leftFoldDialer"></div>
    </div>
  );
}

export default Leftfold;
