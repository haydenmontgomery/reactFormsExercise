import React from "react";
import "./Box.css";

const Box = ({idx, width, height, bgcolor, deleteBox}) => {
  return (
    <div style={{
      position: "relative",
      marginBottom: "20px"
    }}>
      <button
        style={{
        position: "absolute",
        top: "10px",
        left: "0px"
        }}
      onClick={() => deleteBox(idx)}
      >
        Delete!
      </button>
    <div
      className="Box"
      style={{
        backgroundColor: bgcolor,
        width: `${width}px`,
        height: `${height}px`,
        position: "absoluute",
        left: "100px"
      }}
    >
    </div>
    </div>
  )

}

export default Box;