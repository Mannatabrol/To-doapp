import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

const TaskItems = ({task,deletTask , toogleCheck}) => {
  return( 
   <li className="items">
    <div className="items-text">
      <input type="checkbox" checked={task.checked} onChange={() => toogleCheck(task.taskName)}/>
      <p className={task.checked? 'isChecked': ''}>{task.taskName}</p>
    </div>
    <MdDeleteSweep className="delete-icon" onClick={() => deletTask(task)} />

  </li>
  );
}

export default TaskItems;
