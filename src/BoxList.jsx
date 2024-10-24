import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuidv4() }]);
  };

  const deleteBox = idx => {
    setBoxes(boxes => (
      boxes.filter((box, i) => i !== idx)
    ));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <br />
      <div>
        {boxes.map(({ width, height, bgcolor }, idx) => 
        <Box 
        deleteBox={deleteBox}
        key={idx} 
        idx={idx}
        width={width} 
        height={height} 
        bgcolor={bgcolor} 
        />)}
      </div>
    </div>
  )
};

export default BoxList;