import React, {useState} from 'react'

let red =0;
let green=0;
let blue=100;


// Estilos para usurio logueado
const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    frontWeight: 'bold'
};

// Estilos para usurio no logueado
const unloggedStyle = {
    backgroundColor: 'orange',
    color: 'white',
    frontWeight: 'bold'
}


//Components Login / Ogout buttons
const LoginButton = ({loginAction, propStyle}) =>{
    return (<buetton style={propStyle} onClick={loginAction}>Login</buetton>)
}


const LogoutButton = ({logoutAction, propStyle}) =>{
    return (<buetton style={propStyle} onClick={logoutAction}>Logout</buetton>)
}

export default function Optionalrender() {
    const [access, setAccess] = useState(true);
    const [nMessage, setMessage] = useState(0);
    /* const updateAccess = () => {
        setAccess(!access);
    } */
    
    
    let optionalButton;

    //Unread Messages
    let addMessages=()=>{
        setMessage(nMessage+1)
    }
    
    
    /* if (access){
        optionalButton = <buetton onClick={updateAccess}>Logout</buetton>
    }else{
        optionalButton = <buetton onClick={updateAccess}>Login</buetton>
    } */
    
    const loginAction = ()=>{
        setAccess(true)
    }
    const logoutAction = ()=>{
        setAccess(false)
    }

    if (access){
        optionalButton = <LogoutButton propStyle={unloggedStyle}  logoutAction={logoutAction}>Logout</LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}>Login</LoginButton>
    }

  
  
    return (
    <div>
        
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* N Messages unread */}
            {nMessage > 0 && <p>You have {nMessage} new messages... </p>}
            {nMessage === 0 && <p>There are no new messages</p> }
            {/* Operador ternario para hacer las validaciones del condicional */}
            {nMessage > 0 && nMessage === 1 ?
                <p>You have {nMessage} new messages...</p> :
                <p>There are no new messages</p>
            }
            <button onClick={addMessages} >Add new Message</button>
        </div>
    </div>
  )
}
