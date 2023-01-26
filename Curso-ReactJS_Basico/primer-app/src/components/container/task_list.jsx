import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Models
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
// Styles
import "../../assets/styles/task.scss";
import Taskform from "../pure/forms/taskForm";

const TaskListComponent = (props) => {
  const defaultTask1 = new Task(
    "Example1",
    "Description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description2",
    true,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description3",
    true,
    LEVELS.BLOCKING
  );

  const defaultTask = new Task(
    "Example",
    "Default description",
    true,
    LEVELS.NORMAL
  );

  //Estado del componenete
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo del componente
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList componenete is going to unmount");
    };
  }, [tasks]);

  /* const changeCompleted = (id) => {
    console.log("Cambiar el estado de una tarea");
  }; */
  function completeTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    //We update the state of the component and it will update the iteration of the task in order to show the task updated
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  // Se crea una funcion para limpirar un poco mas el código e insertar la tabla desde un componente
  const Table = () => (
    <table>
      <thead>
        <tr>
          <th scope="col">Tittle</th>
          <th scope="col">Description</th>
          <th scope="col">Priority</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <TaskComponent
              key={index}
              task={task}
              complete={completeTask}
              remove={deleteTask}
            ></TaskComponent>
          );
        })}
      </tbody>
    </table>
  );

  let taskTable;

  // Se crea una variable para renderizar la funcion de la tabla 
  if (tasks.length > 0) {
    taskTable = <Table></Table>;
  } else {
    taskTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    );
  }

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
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        ></div>
        {taskTable}
        <Taskform add={addTask} length={tasks.length}></Taskform>
      </div>
      {/* */}
    </div>
  );
};

TaskListComponent.propTypes = {};

export default TaskListComponent;
