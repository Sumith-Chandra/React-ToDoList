import React,{useEffect,useState} from "react";
import './App.css';

function App() {
  const [task,setTask]=useState[""]
  const [todos,setTodos]=useState([])
  function createToDo()
  {
    setTodos(oldTodos=>{
      return [...oldTodos,task]
    })
  }


  return (
    <div>
      <h1>To-Do-List</h1>
      <input type="text" value={task} onChange={event=>{
        setTask(event.target.value)
        }}
        />
      <button onClick={createToDo}>Create To-Do</button>
      <ul>
        {todos.map(todo=>{
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
