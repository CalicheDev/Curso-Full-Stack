import React, {useState} from 'react'

export default function Registerform() {
    const initialData = [
        {
            documento: '',
            user: '',
            password: '',
            email: '',
            telefono: '',
            direccion: ''
        }
    ];
    const [data, setData] = useState(initialData);
  return (
    <div>registerForm</div>
  )
}
