import React from "react";
import "./Header.css";

export default function Header({ children }) {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__occ-space"></div>
        {children}
      </div>
    </div>
  );
}
