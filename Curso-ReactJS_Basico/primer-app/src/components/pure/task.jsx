import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

//Importando la hoja de estilos de task
import "../../assets/styles/task.scss";

const TaskComponent = ({ task }) => {
  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{task.description}</span>
      </td>
      <td className="align-middle">
        <span>{task.level}</span>
      </td>
      <td className="align-middle">
        {task.completed ? ( <i className="bi-toggle-on" style={{color: 'green',fontWeight:'bold'}}></i> )
        : ( <i className="bi-toggle-off" style={{color: 'grey',fontWeight:'bold'}}></i> )}



        <span>{task.completed ? 'Completed':'Pending'}</span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
