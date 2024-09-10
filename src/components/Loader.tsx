import React from "react";
import '../styles/Loader.css'

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <span className="loader__text">
        Loading
        <span className="loader__dot loader__dot--1">.</span>
        <span className="loader__dot loader__dot--2">.</span>
        <span className="loader__dot loader__dot--3">.</span>
      </span>
    </div>
  );
};

export default Loader;
