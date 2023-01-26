import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

//Importando la hoja de estilos de task
import "../../assets/styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Created task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /**Funcion para level de los task */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  function taskIconCompleted(){
    if(task.completed){
      return(<i
      onClick={()=>complete(task)}
        className="bi-toggle-on task-action"
        style={{ color: "green", fontWeight: "bold" }}
      ></i>)
    }else {
      return(<i
        onClick={()=>complete(task)}
        className="bi-toggle-off task-action"
        style={{ color: "grey", fontWeight: "bold" }}
      ></i>)
    }
  }

  // Se crean dos funciones para darle estilos a las tareas segun este completada o pendiente
  const taskCompleted={
    color: 'green',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }

  const taskPending={
    color: 'orange',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }

  return (
    <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending} >
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{task.description}</span>
      </td>
      <td className="align-middle">
        {/* <span>{task.level}</span> */}
        {/**Ejecucion de la funcion */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {/* {task.completed ? (
          <i
            className="bi-toggle-on"
            style={{ color: "green", fontWeight: "bold" }}
          ></i>
        ) : (
          <i
            className="bi-toggle-off"
            style={{ color: "grey", fontWeight: "bold" }}
          ></i>
        )}
        <i className="bi-trash" style={{ color: "tomato" }}></i> */}
        {/* <span>{task.completed ? 'Completed':'Pending'}</span> */}
        {taskIconCompleted()}
        <i className="bi-trash task-action" style={{ color: "tomato" }} onClick={()=>remove(task)}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TaskComponent;
