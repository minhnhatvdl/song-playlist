import React from "react";
import "./Song.css";

const Song = ({ title }) => {
  return (
    <div className="item flexCenter">
      <div className="content">{title}</div>
      <div className="right floated content">
        <div className="ui button">Select</div>
      </div>
    </div>
  );
};

export default Song;
