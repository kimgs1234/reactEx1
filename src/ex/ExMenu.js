import React from "react";

const ExMenu = ({ isChk, onClick }) => {
  return (
    <div className={isChk ? "active" : ""}>
      <a href="#" className="x-btn" onClick={onClick}>
        <span>bar</span>
        <span>bar</span>
      </a>
      <menu>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>contact</li>
      </menu>
    </div>
  );
};

export default ExMenu;
