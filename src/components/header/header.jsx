import React, { useState } from "react";
import "./styles.css";
import logo from "../../images/logo.svg";
import Button from "../buttonDark/button";
function Header({ setDark }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <Button
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setDark={setDark}
      />
    </div>
  );
}
export default Header;
