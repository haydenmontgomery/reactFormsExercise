import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const INITIAL_STATE = [];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id: uuidv4() }]);
  };

  const deleteTodo = idx => {
    setTodos(todos => (
      todos.filter((todo, i) => i !== idx)
    ));
  };

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      <br />
      <ul>
        {todos.map(({ task }, idx) => 
        <Todo 
        deleteTodo={deleteTodo}
        key={idx} 
        idx={idx}
        task={task}
        />)}
      </ul>
    </div>
  )
}

export default TodoList;