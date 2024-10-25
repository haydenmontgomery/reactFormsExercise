import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Todo = ({idx, task, deleteTodo}) => {
  return (
    <div style={{
      position: "relative"
      }}>
      <li
      style={{
        position: "absolute",
        left: "80px",
        top: "10px"
      }}>{task}</li>
        <button 
          onClick={() => deleteTodo(idx)}
          style={{
            position: "absolute",
            textAlign: "center",
            left: "0px",
          }}>
          X
        </button>
    </div>
  )
}

export default Todo;