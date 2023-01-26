import React, {useRef} from 'react'
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from '../../../models/task.class';

export default function Taskform({add, length}) {
  const nameRef=useRef('');
  const descriptionRef=useRef('');
  const levelRef=useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask)
  }

  const normalStyle={
    color: 'blue',
    fontWeight: 'bold'
  }

  const urgentStyle={
    color: 'orange',
    fontWeight: 'bold'
  }
  const blockingStyle={
    color: 'red',
    fontWeight: 'bold'
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-countent-center align-items-center mb-4'>
      <div className='form-ouline flex-fill'>
        <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
        <input ref={descriptionRef} id='inputDescription' type="text" className='form-control form-control-lg' required  placeholder='Task Description'/>
        <label htmlFor='selectLevel' className='sr-only'>Priority</label>
        <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' >
          <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
          <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'> 
      {length>0 ? 'Add nueva tarea' : 'Crear su primer tarea' }
      </button>

    </form>
  )
}

Taskform.protoType ={
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

