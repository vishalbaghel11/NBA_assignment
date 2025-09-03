import React from "react";
import "./App.css"; 
import { Logo_url } from "./utils/logo";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo_url} alt="logo" id="" />
      <input
        type="text"
        placeholder="Search here..."
      />
    </div>
  );
};

export default Header;
