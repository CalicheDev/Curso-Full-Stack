import React, {useState} from 'react'
import Child from '../pure/child'

export default function Father() {

    const [name, setName] = useState('Carlos');

    function updateName(newName){
        setName(newName)

    }

    function showMessage(text){
        alert(`Message received: :${text}`)
    }

  return (
    <div>
        <Child name={name} send={showMessage} update={updateName} >
            
        </Child>
    </div>
  )
}
