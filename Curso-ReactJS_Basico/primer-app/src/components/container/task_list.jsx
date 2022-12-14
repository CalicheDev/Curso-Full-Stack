import React, { useState } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

import "../../assets/styles/task.scss";
import Taskform from "../pure/forms/taskForm";

const TaskListComponent = (props) => {

  const defaultTask1 = new Task('Example1', 'Description1',true,LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2',true,LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description3',true,LEVELS.BLOCKING);




  const defaultTask = new Task(
    "Example",
    "Default description",
    true,
    LEVELS.NORMAL
  );

  //Estado del componenete
  const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
  const [loading, setLoading] = useState(true);

  const changeCompleted = (id) => {
    console.log("Cambiar el estado de una tarea");
  };
  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/**CArd  header*/}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
        </div>
        {/**Card Body */}
        <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
          <table>
            <thead>
            <tr>
              <th scope='col'>Tittle</th>
              <th scope='col'>Description</th>
              <th scope='col'>Priority</th>
              <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
              {tasks.map((task, index)=>{
                return(
                  <TaskComponent key={index} task={task}></TaskComponent>
                  )
                })}
            </tbody>
          </table>
        </div>
        <Taskform></Taskform>
      </div>
      {/* */}
      
    </div>
  );
};

TaskListComponent.propTypes = {};

export default TaskListComponent;
