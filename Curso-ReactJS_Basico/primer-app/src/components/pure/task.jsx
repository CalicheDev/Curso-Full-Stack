import React from 'react'
import PropTypes from 'prop-types'
import {Task } from '../../models/task.class';

const TaskComponent = ({task}) => {
  return (
    <div>
        <h1>
            Nombre: {task.name}
        </h1>
        <h2>
            Descripcion: {task.description}
        </h2>
        <h3>
            Level: {task.level}
        </h3>
        <h4>
            This task is: {task.completed ? 'COMPLETED':'PENDING'}
        </h4>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent