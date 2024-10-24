import React from "react";
import "./Box.css";

const Box = ({idx, width, height, bgcolor, deleteBox}) => {
  return (
    
    <div
      className="Box"
      style={{
        backgroundColor: bgcolor,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <button
      onClick={() => deleteBox(idx)}
      >
        Delete!
      </button>
    </div>
  )

}

export default Box;