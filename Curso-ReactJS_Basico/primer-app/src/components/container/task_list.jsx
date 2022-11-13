import React from 'react'
import PropTypes from 'prop-types'
import {LEVELS} from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = props => {
    const defaultTask= new Task ('Example','Default description', false, LEVELS.NORMAL)
  return (
    <div>
        <div>Your Tasks: </div>
        {/* */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

TaskListComponent.propTypes = {}

export default TaskListComponent