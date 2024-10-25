import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    task: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const handleChange = (e) => {
    setIsTouched(true);
    const { name, value } = e.target;
    if(value === '') {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isInvalid){
      addTodo({...formData});
      setFormData(INITIAL_STATE);
      setIsInvalid(true);
      setIsTouched(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="NewFormTodo">
      <label htmlFor="task">Task: </label>
      <input 
      id="task"
      type="text"
      name="task"
      placeholder="Task"
      value={formData.task} 
      onChange={handleChange}
      />
      {isInvalid && isTouched && <span style={{ color: 'red' }}>Task cannot be blank!</span>}
      <button>Create Todo</button>
    </form>
  )
}

export default NewTodoForm;