import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi fi-br-grid"></i>
      </div>
      <div className="header-leftFold">
        <label className="headerLabel">Microsoft Teams</label>
      </div>
      <div className="header-rightFold">
        <div className="headerSearch">
          <i class="fi fi-rr-search"></i>
          <input placeholder="Search"></input>
        </div>
        <div className="headerProfile">
          <div className="headerOption">
            <i class="fi fi-rr-menu-dots"></i>
          </div>
          <img
            className="headerAvatar"
            src="https://cdn-icons.flaticon.com/png/128/4140/premium/4140048.png?token=exp=1653832432~hmac=e20904d8b5cbb7d11aa0d27c070871fe"
            alt="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
