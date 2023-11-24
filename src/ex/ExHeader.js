import React, { useState } from "react";
import ExMenu from "./ExMenu";

const ExHeader = () => {
  const [isChk, setIsChk] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setIsChk(!isChk);
  };

  return (
    <header>
      <h3>로고</h3>
      <a href="#" className="ham-btn" onClick={onClick}>
        <span>bar1</span>
        <span>bar2</span>
        <span>bar3</span>
      </a>
      <ExMenu isChk={isChk} onClick={onClick} />
    </header>
  );
};

export default ExHeader;
