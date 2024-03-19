import TaskInput from "./components/TaskInput";
import React, { useState } from 'react';
import TaskItems from "./components/TaskItems" ;
import Stats from "./components/Stats";


function App() {
  const [toDolist,setToDolist] = useState([]);
  const addTask = (taskName) =>{
    const newTask = {taskName, checked: false };
    setToDolist([...toDolist,newTask]);

  };

  function deletTask(deletTaskName) {
    console.log("Deleting task:", deletTaskName); // Check if deletTask function is being called
    setToDolist(toDolist.filter(task => task.taskName !== deletTaskName.taskName));
  }

  function toggleCheck(taskName) {
    setToDolist(prevToDolist => {
      return prevToDolist.map(task => {
        if (task.taskName === taskName) {
          return { ...task, checked: !task.checked };
        }
        return task;
      });
    });
  }
  

  
  
  console.log(toDolist);
  return( 
<div className="container" id="cont">
  <h1>Todo App</h1>


  <TaskInput addTask = {addTask} />

  <div className="toDolist">
    <span>To Do</span>
    <ul className="list-items">
      {toDolist.map((task,key) => (

      <TaskItems task={task} key = {key} deletTask={deletTask} toogleCheck={toggleCheck}/>
      ))}
    </ul>
  {toDolist.length === 0? (
  <p className='notify'>You are done!</p>
  ) : null }

</div>
<Stats  toDolist= {toDolist}/>
</div>

  );
};

export default App;
