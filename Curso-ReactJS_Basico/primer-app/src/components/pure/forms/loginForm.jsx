/**Componente para autenticacion de usuario */

import React, {useState} from 'react';

export default function Loginform() {
    const initialCredentials = [
        {
            documento: '',
            user: '',
            password: ''
        }
    ];
    const [credentials, setCredentials] = useState(initialCredentials);

  return (
    <div>loginForm</div>
  )
}










